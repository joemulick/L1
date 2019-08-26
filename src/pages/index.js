import React from 'react'

import Navbar from '../components/Navbar'
import MainLandingSectionAlpha from '../components/indexComponents/MainLandingSectionAlpha'
import IndexSectionTwoModal from '../components/indexComponents/IndexSectionTwoModal'
import IndexSectionThreeExpPanel from '../components/indexComponents/IndexSectionThreeExpPanel'
import Footer from '../components/Footer'

export default function App() {

  return (
    <div>
      
    <Navbar />

    <MainLandingSectionAlpha />

    <IndexSectionTwoModal />

    {/* <IndexSectionTwoHover /> */}

    <IndexSectionThreeExpPanel />

    <Footer />

    </div>
  );
}
