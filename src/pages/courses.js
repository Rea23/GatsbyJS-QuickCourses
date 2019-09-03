import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components";
import Courses from "../components/Courses";
import "../styles/courses.css";

export default () => (
  <Layout>
    <div id="courses-main-input">
      <div class="main-input-box search courses-input-row">
        <input type="search" class="search-box text" placeholder="Search..." />
        <p id="search-button">&#128269;</p>
      </div>
      <select class="select main-filter-box courses-input-row text">
        <option selected disabled>
          Filter by skills...
        </option>
        <option value="All">All</option>
        <option value="Android Development">Android Development</option>
        <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Back-End Development">Back-End Development</option>
        <option value="Computing Graphics">Computing Graphics</option>
        <option value="Front-End Development">Front-End Development</option>
        <option value=".NET Development">.NET Development</option>
      </select>
      <select class="select main-filter-box courses-input-row text">
        <option selected disabled>
          Filter by difficulty...
        </option>
        <option value="00">All</option>
        <option value="01">Basic</option>
        <option value="02">Intermediate</option>
        <option value="02">Advanced</option>
      </select>
    </div>
    <h3 class="main-results big-text">Results:</h3>
    <div class="main-articles">
      <Courses />
    </div>
    <div id="pages">
      <p class="page-label text">Page 1/5</p>
      <select class="page-select text">
        <option selected disabled>
          Jump to...
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  </Layout>
);
