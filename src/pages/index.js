import React from 'react';

import Navbar from '../components/Navbar'
import MainLandingSectionAlpha from '../components/indexComponents/MainLandingSectionAlpha'
// import IndexSectionTwoHover from '../components/IndexSectionTwoHover'
import IndexSectionTwoModal from '../components/indexComponents/IndexSectionTwoModal'
import IndexSectionThreeExpPanel from '../components/indexComponents/IndexSectionThreeExpPanel'

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
