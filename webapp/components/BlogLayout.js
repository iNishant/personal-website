import React from 'react'
import PropTypes from 'prop-types'
import PageHead from 'components/PageHead'
import TimeFromNow from 'components/TimeFromNow'
import { withRouter } from 'next/router'
import GetAbsoluteURLFromRelativeURL from 'utils/GetAbsoluteURLFromRelativeURL'
import GetOGImageWithText from 'utils/GetOGImageWithText'
import Image from 'next/image'

const BlogLayout = ({ children, meta, router }) => (
  <div className="prose prose-xl dark:prose-light">
    <PageHead
      title={meta.title}
      meta={{
        type: 'article',
        url: GetAbsoluteURLFromRelativeURL(router.pathname),
        image: GetOGImageWithText('Nishant Singh • Blog'),
        ...meta,
      }}
    />
    <h1 className="text-3xl md:text-5xl">{meta.title}</h1>
    <div className="text-sm flex items-center">
      <Image
        src="/images/picture.png"
        layout="fixed"
        className="rounded-full"
        height={40}
        width={40}
      />
      <div className="ml-2">
        <p className="font-bold m-0">Nishant Singh</p>
        <span className="mr-1">Published</span>
        <TimeFromNow value={meta.createdOn} />
      </div>
    </div>
    {children}
  </div>
)

BlogLayout.propTypes = {
  meta: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  router: PropTypes.object.isRequired,
}

export default withRouter(BlogLayout)
