import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import './layout.css';

library.add(fab, faEnvelope, faFileAlt);

const Layout = ({ children }) => (
  <React.Fragment>
    <main className="is-family-monospace" style={{ position: 'relative' }}>
      {children}
    </main>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
