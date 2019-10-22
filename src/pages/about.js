import React from 'react';

import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import AboutOne from '../components/aboutComponents/AboutOne'


export default function App() {
  return (
    <div>
      <Navbar />
        <Layout>
          <AboutOne />
        </Layout>
      <Footer />
    </div>
  );
}
