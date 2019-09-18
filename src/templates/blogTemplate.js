import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

import blogTemplateStyles from './blogTemplate.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title}/>
        <div className={blogTemplateStyles.section_1}>
          <h1 className={blogTemplateStyles.blogTitleStyle}>
            {props.data.contentfulBlogPost.title}
          </h1>
          <div className={blogTemplateStyles.blogContentContainer}>
            <div className={blogTemplateStyles.authorImageContainer}>
              <img className={blogTemplateStyles.mePhoto} src="https://res.cloudinary.com/ddsihrmda/image/upload/v1510035228/mefiltered_qff7c0.jpg" alt="Joe Mulick" />
            </div>
            <div className={blogTemplateStyles.authorImageContainer}>
              <p className={blogTemplateStyles.blogPostInfoStyle}>
                <i>written by</i><br/>
                <b>Joe Mulick</b>
              </p>
            </div>
            <div className={blogTemplateStyles.authorImageContainer}>
              <p className={blogTemplateStyles.blogPostInfoStyle}>
                <i>published on</i><br/>
                <b>{props.data.contentfulBlogPost.publishedDate}</b>
              </p>
            </div>
            <div className={blogTemplateStyles.authorImageContainer}>
                <div className={blogTemplateStyles.tempSocialIcons}>

                </div>
                <div className={blogTemplateStyles.tempSocialIcons}>

                </div>
                <div className={blogTemplateStyles.tempSocialIcons}>

                </div>
                <div className={blogTemplateStyles.tempSocialIcons}>

                </div>
            </div>
          </div>
          <p className={blogTemplateStyles.blogTextStyle}>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </p>
        </div>
    </Layout>
  )
}

export default Blog