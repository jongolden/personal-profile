/* eslint react/no-danger: 0 */
import React from 'react';
import PropTypes from 'prop-types';

const HtmlContent = ({ content }) => (
  <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
);

HtmlContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HtmlContent;
