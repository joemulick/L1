import React from 'react'

import { Helmet } from 'react-helmet'
import { useStaticQuery,graphql } from 'gatsby'

const Head = ({title}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Helmet 
        bodyAttributes={{style: 'background-color : #ffffff; font-family: "Source Sans Pro", sans-serif; background-image: linear-gradient(rgba(94, 50, 147,0), rgba(94, 50, 147,1));'}} 
        title={`${title} | ${data.site.siteMetadata.title}`} 
        />
    )
}

export default Head