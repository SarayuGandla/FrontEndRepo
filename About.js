import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';

const About = () => (
  <div>
    <Header />
    <main style={{ padding: '20px' }}>
      <h2>About Page</h2>
      <CustomCard title="About Us" content="We are a React-based web development team." />
    </main>
    <Footer />
  </div>
);

export default About;
