import React from 'react'

import Layout from '../templates/layout'
import Head from '../components/head'
import MainLandingSectionAlpha from '../components/indexComponents/MainLandingSectionAlpha'
import IndexSectionTwoModal from '../components/indexComponents/IndexSectionTwoModal'
import IndexSectionThreeExpPanel from '../components/indexComponents/IndexSectionThreeExpPanel'



export default function App() {

  return (
    <div>
      <Layout>
      <Head title="Home"/>
        <MainLandingSectionAlpha />
        <IndexSectionTwoModal />
        {/* <IndexSectionTwoHover /> */}
        <IndexSectionThreeExpPanel />
      </Layout>
    </div>
  );
}
