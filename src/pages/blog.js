import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogIndex } from "../components";
import "../styles/blog.css";
import "../styles/blog-article.css";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <Layout>
      <div id="blog-filter">
          <select id="blog-select">
            <option selected disabled>
            Filter by topic...
            </option>
            <option value="All">All</option>
            <option value="Android Development">Android Development</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Back-End Development">Back-End Development</option>
            <option value="Computing Graphics">Computing Graphics</option>
            <option value="Front-End Development">Front-End Development</option>
            <option value=".NET Development">.NET Development</option>
          </select>
        </div>
      <BlogIndex posts={posts} />
      <div id="blog-pages">
          <p class="blog-text blog-page-label">Page 1/5</p>
          <select id="blog-page-select">
            <option selected disabled>Jump to...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            slug
            image {
              childImageSharp {
                fixed {
                  src
                  
                }
              }
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;
