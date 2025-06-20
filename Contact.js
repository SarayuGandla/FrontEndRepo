import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';

const Contact = () => (
  <div>
    <Header />
    <main style={{ padding: '20px' }}>
      <h2>Contact Page</h2>
      <CustomCard title="Contact Info" content="Email: contact@mywebsite.com" />
    </main>
    <Footer />
  </div>
);

export default Contact;
