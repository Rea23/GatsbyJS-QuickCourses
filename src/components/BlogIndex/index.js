import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import Img from 'gatsby-image';

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id, excerpt } = post.node;
    const { title, slug, image } = post.node.frontmatter;
    const { src } = image.childImageSharp.fixed;

    return (
      <section key={id} className={styles.Post}>
        <Link to={`blog/${slug}`} className={styles.ImageDiv}>
          <img className={styles.Image} src={src} />
          {/* <Img className={styles.Image} fixed={src} /> */}
        </Link>
        <div className={styles.ArticleText}>
          <Link to={`blog/${slug}`}>
            <h2 className={styles.Title}>{title}</h2>
          </Link>
          <p className={styles.Excerpt}>{excerpt}</p>
          <Link className={styles.Link_more} to={`blog/${slug}`}>
            Read more
          </Link>
        </div>
      </section>
    );
  });
  return postsList;
};
