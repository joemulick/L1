import React from 'react';
import Layout from '../components/Layout'
import contactSytles from '../styles/contact.module.scss'




export default function App() {

  return (
    <div>
      <Layout>
        <div className={contactSytles.contactMainContainerOne}>
            <h1>Contact Page</h1>
        </div>
      </Layout>

    </div>
  );
}