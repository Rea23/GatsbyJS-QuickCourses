import React, { Component } from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";
import CoursesData from "../../data/courses.json";
import "../../styles/courses.css";
import Fuse from "fuse.js";

export default () => (
  <>
    {CoursesData.map(detail => {
      return (
        <div class="article-div">
          <Link header={detail.heading} to="course">
            <h3 class="article-h big-text">{detail.heading}</h3>
          </Link>
          <p class="article-difficulty">{detail.difficulty}</p>
          <p>{detail.text}</p>
        </div>
      );
    })}
  </>
);

// class Courses extends Component {
//   state = {
//     search: ""
//   };

//   constructor(props) {
//     super(props);
//     const options = {
//     shouldSort: true,
//     threshold: 0.6,
//     location: 0,
//     distance: 100,
//     maxPatternLength: 32,
//     minMatchCharLength: 1,
//     keys: [
//       "header"
//     ]
//   };
//   this.fuse = new Fuse(CoursesData, options);
//   this.results = this.fuse.search("Android");
//   }
//   onChange = event => this.setState({ search: event.target.value });
// render() {
//   const { search } = this.state;
//   var result = this.fuse.search("Android");
//         result.map(detail => {
//         return (
//         <div class="article-div">
//           <Link header={detail.heading} to="course">
//             <h3 class="article-h big-text">{detail.heading}</h3>
//           </Link>
//           <p class="article-difficulty">{detail.difficulty}</p>
//           <p>{detail.text}</p>
//         </div>
//       );
//     });
//     return (<>
//       <input type="search"
//       value={this.state.search}
//       onChange={this.onChange}></input>
// </>
//     );
//   }
// }

// export default Courses;
