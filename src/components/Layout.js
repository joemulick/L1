import React from 'react'

import layoutStyles from '../styles/layout.module.scss'



const Layout = (props) => {
    return(
        <div className={layoutStyles.navPadding}>
            {props.children}
        </div>
    )
}

export default Layout