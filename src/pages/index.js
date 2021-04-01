import React from 'react';
import About from '../components/About';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

const Index = () => (
  <Layout>
    <Seo />
    <Hero />
    <About />
    <Projects />
  </Layout>
);

export default Index;
