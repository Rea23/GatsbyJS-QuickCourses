import React from "react";
import { Layout } from "../components";
import "../styles/register.css";

export default () => (
  <Layout>
    <div id="main-site">
      <p class="register-input-text register-input-row price">
        Register and get access to all courses for just $20/month!
      </p>
      <input
        class="register-input-box register-input register-input-row"
        placeholder="Full name"
      />
      <input
        class="register-input-box register-input register-input-row"
        placeholder="e-mail"
      />
      <div class="date register-input-box register-input-row select-div">
        <p class="birthdate">Birthdate:</p>
        <input class="date-input" type="date" />
      </div>
      <input
        class="register-input-box register-input register-input-row"
        placeholder="Credit card"
      />
      <input
        class="register-input-box register-input register-input-row"
        placeholder="Username"
      />
      <input
        type="password"
        class="register-input-box register-input register-input-row"
        placeholder="Password"
      />
      <button id="register-input-button">Register</button>
    </div>
  </Layout>
);
