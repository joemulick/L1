import React from 'react';
import Layout from '../templates/layout'
import servicesSytles from '../styles/services.module.scss'




export default function App() {

  return (
    <div>
      <Layout>
        <div className={servicesSytles.mainContainerOne}>
            <h1>Services Page</h1>
        </div>
      </Layout>

    </div>
  );
}