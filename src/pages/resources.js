import React from 'react';
import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import resourcesSytles from '../styles/resources.module.scss'




export default function App() {

  return (
    <div>

      <Layout>
        <Navbar />
        <div className={resourcesSytles.resourcesMainContainerOne}>
            <h1>Resource Page</h1>
        </div>
        <Footer />
      </Layout>
    </div>
  );
}