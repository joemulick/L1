import React from 'react';
import Layout from '../components/layout'
import resourcesSytles from '../styles/resources.module.scss'




export default function App() {

  return (
    <div>
      <Layout>
        <div className={resourcesSytles.resourcesMainContainerOne}>
            <h1>Resource Page</h1>
        </div>
      </Layout>

    </div>
  );
}