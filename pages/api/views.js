import { errorResponse, successResponse } from 'utils/apiUtils'
import hasuraQuery from 'utils/hasuraQuery'

export default async function handler(req, res) {
  const {
    query: { path },
  } = req

  const finalPath = path || '/'

  // get view count for path (0 if DNE)
  let data = await hasuraQuery(`{
    website_page (where: {path: {_eq: "${finalPath}"}})  {
      views
    }
  }`).then((hData) => hData.website_page)

  const currentViews = data.length ? data[0].views : 0

  if (req.method === 'GET') {
    // returns views for path
    successResponse(res, { views: currentViews })
  } else if (req.method === 'POST') {
    // increment views for path

    // create or update
    data = await hasuraQuery(`mutation {
      insert_website_page(objects: {path: "${finalPath}", views: ${
      currentViews + 1
    }}, on_conflict: {constraint: page_stats_pkey, update_columns: views}) {
        returning {
          views
        }
      }
    }`).then((hData) => hData.insert_website_page.returning)

    const finalViews = data.length ? data[0].views : 0

    successResponse(res, { views: finalViews })
  } else {
    errorResponse(res)
  }
}
