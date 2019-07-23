import React from 'react';

import Navbar from '../components/Navbar'
import MainLandingSectionAlpha from '../components/MainLandingSectionAlpha'
// import IndexSectionTwoHover from '../components/IndexSectionTwoHover'
import IndexSectionTwoModal from '../components/IndexSectionTwoModal'
import IndexSectionThreeExpPanel from '../components/IndexSectionThreeExpPanel'

export default function App() {

  return (
    <div>
      
    <Navbar />

    <MainLandingSectionAlpha />

    <IndexSectionTwoModal />

    {/* <IndexSectionTwoHover /> */}

    <IndexSectionThreeExpPanel />



    </div>
  );
}
