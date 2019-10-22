import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

import Footer from '../components/footer'
import Navbar from '../components/navbar'



const NotFound = () => {
    return (
        <div>
            <Navbar />
                <Layout>
                    <h1>Page Not Found</h1>
                    <p>You have reached this page in ERROR</p>
                    <Link to="/">Head home</Link>
                </Layout>
            <Footer />
        </div>
    )
}

export default NotFound