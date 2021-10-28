import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Hi, I'm Leo"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={["causal inference", "statistics", "data science"]}
        />
        <h1>This is my site.</h1>
        <p>
          For my undergraduate capstone, I'm doing research into causal
          inference in observational datasets. As I do my literature review, I
          am writing summaries of important papers and collecting them here.
        </p>

        <Link to="/blog/">
          <Button marginTop="35px">Continue!</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
