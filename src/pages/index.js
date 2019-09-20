import React from 'react'

import Layout from '../templates/layout'
import MainLandingSectionAlpha from '../components/indexComponents/MainLandingSectionAlpha'
import IndexSectionTwoModal from '../components/indexComponents/IndexSectionTwoModal'
import IndexSectionThreeExpPanel from '../components/indexComponents/IndexSectionThreeExpPanel'


export default function App() {

  return (
    <div>
      <Layout>
        <MainLandingSectionAlpha />
        <IndexSectionTwoModal />
        {/* <IndexSectionTwoHover /> */}
        <IndexSectionThreeExpPanel />
      </Layout>
    </div>
  );
}
