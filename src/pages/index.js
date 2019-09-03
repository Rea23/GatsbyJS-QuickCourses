import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { Layout } from "../components";
import "../styles/index.css";
import Img from 'gatsby-image';

 export default (props) => {
  return (
    <Layout>
      <main id="main">
      <Img className="main-img" fluid={props.data.main.childImageSharp.fluid} />
        <div class="main start">
          <p class="main-p">Start now!</p>
          <div id="main-start-images">
            <Link class="start-images-link" to='/register'>
              <Img className="main-start-img" fluid={props.data.register.childImageSharp.fluid} />
            </Link>
            <Link class="start-images-link" to='/courses'>
              <Img className="main-start-img" fluid={props.data.enroll.childImageSharp.fluid} />
            </Link>
            <Link class="start-images-link" to='/blog'>
              <Img className="main-start-img" fluid={props.data.learn.childImageSharp.fluid} />
            </Link>
          </div>
        </div>
        <div class="main skills">
          <p class="main-p">Skills</p>
          <div id="main-skills-div">
            <div class="main-skills-list">
              <p class="main-skills-item">Artificial Intelligence</p>
              <p class="main-skills-item">Android Development</p>
              <p class="main-skills-item">iOS Development</p>
              <p class="main-skills-item">Data Analytics</p>
            </div>
            <div class="main-skills-list">
              <p class="main-skills-item">.NET Development</p>
              <p class="main-skills-item">Data Science</p>
              <p class="main-skills-item">Network Security</p>
              <p class="main-skills-item">Front-End Development</p>
            </div>
            <div class="main-skills-list">
              <p class="main-skills-item">Back-End Development</p>
              <p class="main-skills-item">Operating systems</p>
              <p class="main-skills-item">Computing graphics</p>
              <p class="main-skills-item">And many more...</p>
            </div>
          </div>
        </div>
        <p class="main-skills-item main-price">Register and get access to all courses for just <b>$20/month!</b></p>
        <p class="main-p sponsors">Our sponsors</p>
        <div class="sponsors-div">
          <a href="https://www.google.com" target="_blank">
          <Img className="icon" fluid={props.data.sponsor1.childImageSharp.fluid}
          /></a>
          <a href="https://www.google.com" target="_blank">
          <Img className="icon" fluid={props.data.sponsor2.childImageSharp.fluid}
          /></a>
          <a href="https://www.google.com" target="_blank">
          <Img className="icon" fluid={props.data.sponsor3.childImageSharp.fluid}
          /></a>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
query {
  main: file(relativePath: { eq: "main.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  register: file(relativePath: { eq: "register1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  enroll: file(relativePath: { eq: "enroll1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  learn: file(relativePath: { eq: "learn1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  sponsor1: file(relativePath: { eq: "sponsor1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  sponsor2: file(relativePath: { eq: "sponsor2.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  sponsor3: file(relativePath: { eq: "sponsor3.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`