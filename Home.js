import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomCard from '../components/CustomCard';

const Home = () => (
  <div>
    <Header />
    <main style={{ padding: '20px' }}>
      <h2>Home Page</h2>
      <CustomCard title="Welcome!" content="This is the home page of our website." />
    </main>
    <Footer />
  </div>
);

export default Home;
