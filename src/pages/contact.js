import React from 'react';
import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import contactSytles from '../styles/contact.module.scss'




export default function App() {

  return (
    <div>
      <Navbar />
        <Layout>
          <div className={contactSytles.contactMainContainerOne}>
              <h1>Contact Page</h1>
          </div>
        </Layout>
      <Footer />
    </div>
  );
}