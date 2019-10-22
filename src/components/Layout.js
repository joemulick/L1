import React from 'react'

import Footer from '../components/footer.js'
import Navbar from '../components/navbar.js'

import layoutStyles from '../styles/layout.module.scss'



const Layout = (props) => {
    return(
        <div>
            <Navbar />
                <div className={layoutStyles.navPadding}>
                    {props.children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout