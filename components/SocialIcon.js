import React from 'react'
import { SocialIcon } from 'react-social-icons'
import PropTypes from 'prop-types'

const SocialIconBlock = ({ url }) => (
  <div className="inline-block mt-2 mr-2">
    <SocialIcon url={url} target="_blank" className="h-7 w-7" />
  </div>
)

SocialIconBlock.propTypes = {
  url: PropTypes.string.isRequired,
}

export default SocialIconBlock
