import React from 'react';
import Content from './HtmlContent';
import useAboutContent from '../hooks/useAboutContent';

const About = () => {
  const { title, content } = useAboutContent();

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <h2 className="title is-size-3-desktop is-size-4-mobile has-text-centered-mobile">
          {title}
        </h2>
        <Content content={content} />
      </div>
    </section>
  );
};

export default About;
