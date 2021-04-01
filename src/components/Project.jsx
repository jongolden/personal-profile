import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({
  title,
  subtitle,
  description,
  role,
  url,
}) => (
  <div className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </div>
        <div className="media-content">
          <p className="title is-size-4-tablet is-size-5-mobile">{title}</p>
          <p className="subtitle is-6 has-text-dark">{subtitle}</p>
        </div>
      </div>
      <div className="content">
        {description}
      </div>
      <div className="content">
        <span className="tag">{role}</span>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Project;
