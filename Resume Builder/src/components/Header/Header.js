import React from "react";

import resumeSvg from "../../assets/image-removebg-preview.png";

import styles from "./Header.module.css";

import {Link} from 'react-router-dom'

function Header() {
    
  return (
    <>
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
        <button className={styles.getstarted}>
          <Link to='/Body'>
            Get Started
          </Link>
        </button>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      </div>
      </>
  );
}

export default Header;
