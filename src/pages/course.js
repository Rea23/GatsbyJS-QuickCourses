import React from "react";
import { Link, graphql } from "gatsby";
import { Layout } from "../components";
import "../styles/course.css";
import computer from "../assets/images/computer.jpg";
import Img from 'gatsby-image';
import { isLoggedIn } from "../services/auth";

export default (props) => {
  return(
  <Layout>
    {isLoggedIn() ? (
      <main id="main">
      <Link class="back-link text" to="courses">Back to Courses</Link>
      <Img className="main-header-img" fluid={props.data.imageOne.childImageSharp.fluid} />
      <div id="main-div">
        <h3 class="main-div-h">Android basics</h3>
        <p class="main-div-difficulty text">Basic</p>
      </div>
      <p class="main-text text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        magni! Officiis ipsa repellat distinctio libero ratione. Inventore
        officiis, eos, dolores voluptatem libero sapiente, rerum laborum sequi
        quae tempore ducimus quis! Sed ut perspiciatis unde omnis iste natus 
        error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
        vitae dicta sunt explicabo.
      </p>
      <div id="course-grid">
        <div id="course-grid-text">
          <p class="course-code text">
          public class MainActivity extends AppCompatActivity <br/>&#123; <br/>&#125;
          </p>
          <p class="course-text text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            magni! Officiis ipsa repellat distinctio libero ratione. Inventore
            officiis, eos, dolores voluptatem libero sapiente, rerum laborum
            sequi quae tempore ducimus quis! Nam libero tempore, cum soluta 
            nobis est eligendi optio cumque nihil impedit quo minus id quod 
            maxime placeat facere possimus, omnis voluptas assumenda est, omnis 
            dolor repellendus. Temporibus autem quibusdam et aut officiis debitis 
            aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae 
            sint et molestiae non recusandae.
          </p>
          <p class="course-code text">
          @Override
          <br/>protected void onCreate(Bundle savedInstanceState) &#123;
          <br/>super.onCreate(savedInstanceState);
          <br/>setContentView(R.layout.activity_main);
          <br/>&#125;
          </p>
          <p class="course-text text">
          Vestibulum eget turpis consequat, varius urna sit amet, auctor erat. 
          Quisque est est, maximus sed pulvinar nec, tempor ut est. Etiam dapibus 
          nulla enim, ut mattis diam laoreet ac. Maecenas aliquet varius consectetur. 
          Donec consectetur magna mi, eu elementum diam pulvinar non. Morbi non neque 
          diam. Curabitur laoreet diam eget mattis porttitor. In sit amet pellentesque 
          urna. Duis sollicitudin quis elit eu gravida. Donec ultrices nunc sem, a tempus 
          nibh egestas eu. Proin vitae luctus elit.
          </p>
        </div>
      </div>
    </main>
    ) : (
      <div className="main-register">
        <p className="main-register-p log-message"><b>You're not logged in!</b></p>
        <p className="main-register-p">Log in to open the course.</p>
        <Link className="login-link" to="log-in">Log in</Link>
        <p className="main-register-p">Don't have an acconut?</p>
        <Link to="register">Register</Link>
      </div>
    )}
    
  </Layout>
);
};

export const query = graphql`
query {
  imageOne: file(relativePath: { eq: "computer.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
