import React from 'react'
import { Link } from 'gatsby'



const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>You have reached this page in ERROR</p>
            <Link to="/">Head home</Link>
        </div>
    )
}

export default NotFound