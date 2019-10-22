import React from 'react';
import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import servicesSytles from '../styles/services.module.scss'




export default function App() {

  return (
    <div>
      <Layout>
        <Navbar />
        <div className={servicesSytles.mainContainerOne}>
            <h1>Services Page</h1>
        </div>
        <Footer />
      </Layout>

    </div>
  );
}