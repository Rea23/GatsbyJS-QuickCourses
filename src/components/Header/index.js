import React from "react";
import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import heading from "../../assets/images/heading.png";
import user from "../../assets/images/user.png";
import {Login} from "../LogIn/login";
import { isLoggedIn } from "../../services/auth";

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>

      <a className={styles.Logo} href="/">
        <img className={styles.Img} src={heading} />
      </a>

      <aside className={styles.Aside_top}>
        {isLoggedIn() ? (<label className={styles.Label_user}>Rea</label>
        ) : <label className={styles.Label_user}>Guest user</label>}
        <img className={styles.Account_img} src={user} />
      </aside>

      <aside className={styles.Aside_bottom}>
        <Nav>
          <NavLink to="/" exact="true"><div className={styles.Div}>Home</div></NavLink>
          <NavLink to="/courses"><div className={styles.Div}>Courses</div></NavLink>
          <NavLink to="/blog"><div className={styles.Div}>Blog</div></NavLink>
          <NavLink to="/about"><div className={styles.DivAbout}>About</div></NavLink>
          <NavLink to="/register"><div className={styles.Div}>Register</div></NavLink>
          {isLoggedIn() ? (
          <NavLink to="/log-in"><div className={styles.Div}>Log Out</div></NavLink>
          ) : <NavLink to="/log-in"><div className={styles.Div}>Log In</div></NavLink>}
        </Nav>
      </aside>

    </Container>
  </header>
);
