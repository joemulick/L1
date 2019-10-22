import React from 'react'



import layoutStyles from '../styles/layout.module.scss'



const Layout = (props) => {
    return(
        <div>

                <div className={layoutStyles.navPadding}>
                    {props.children}
                </div>

        </div>
    )
}

export default Layout