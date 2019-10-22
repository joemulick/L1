import React from 'react'

import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import Head from '../components/head'
import MainLandingSectionAlpha from '../components/indexComponents/MainLandingSectionAlpha'
import IndexSectionTwoModal from '../components/indexComponents/IndexSectionTwoModal'
import IndexSectionThreeExpPanel from '../components/indexComponents/IndexSectionThreeExpPanel'



export default function App() {

  return (
    <div>
      <Layout>
      <Head title="Home"/>

        <Navbar />

          <MainLandingSectionAlpha />
          <IndexSectionTwoModal />
          {/* <IndexSectionTwoHover /> */}
          <IndexSectionThreeExpPanel />

        <Footer />

      </Layout>
    </div>
  );
}
