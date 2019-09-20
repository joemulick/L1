import React from 'react'
import Navbar from '../components/Navbar'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import blogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
                edges {
                    node {
                        title
                        slug
                        BlogMain: publishedDate(formatString:"MMMM Do, YYYY")
                        BlogList: publishedDate(formatString:"M-D-YYYY")
                    }
                }
            }
        }
    `)


    return (
            <div className={blogStyles.section_1}>
            <Navbar />
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <div>

                        <h1>Blog</h1>

                        <ol className={blogStyles.posts}>
                            {data.allContentfulBlogPost.edges.map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <Link to={`/blog/${edge.node.slug}`}>
                                            <h2>{edge.node.title}</h2>
                                            <p>{edge.node.BlogMain}</p>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>

                    <div sm={4}>
                        <div className={blogStyles.listContainer}>
                            {data.allContentfulBlogPost.edges.map((edge) => {
                                return (
                                    <Link className={blogStyles.blogURLstyle} to={`/blog/${edge.node.slug}`}>
                                        <div className={blogStyles.listGroupStyle}>
                                                <p className={blogStyles.listTextStyle}>
                                                    {edge.node.title}<br />
                                                    <div className={blogStyles.dateAlign}>{edge.node.BlogList}</div>
                                                </p>   
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </Grid>
            </Container>
            </div>
    )
}

export default BlogPage