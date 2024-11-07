import React from "react";
import styles from "./Landing.module.css"; // Import CSS module

const Landing = () => {
  return (
    <div className={styles.textBlack}>
      {" "}
      {/* Sử dụng styles.textBlack */}
      <nav>
        <ul className={styles.navLinks}>
          {" "}
          {/* Sử dụng styles.navLinks */}
          <li className={styles.link}>
            {" "}
            {/* Sử dụng styles.link */}
            <a href="#">HOME</a>
          </li>
          <li className={styles.link}>
            <a href="#">ABOUT US</a>
          </li>
          <li className={styles.link}>
            <a href="#">E-TICKET</a>
          </li>
          <li className={styles.link}>
            <a href="#">JOURNEY</a>
          </li>
          <li className={styles.link}>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        {" "}
        {/* Sử dụng styles.container */}
        <div className={styles.containerLeft}>
          {" "}
          {/* Sử dụng styles.containerLeft */}
          <div className={styles.leftContent}>
            {" "}
            {/* Sử dụng styles.leftContent */}
            <h4>Best guide for you</h4>
            <p>
              Our team of experts has scoured collection of handpicked
              destinations and insider tips to ensure your journey is
              extraordinary.
            </p>
          </div>
        </div>
        <div className={styles.containerRight}>
          {" "}
          {/* Sử dụng styles.containerRight */}
          <img src="assets/women.png" alt="women" />
          <div className={styles.rightContent}>
            {" "}
            {/* Sử dụng styles.rightContent */}
            <h1>ENJOY</h1>
            <h4>Travelling moment</h4>
            <p>
              Welcome to our travel website, where we pride ourselves on being
              the best guide for you in your wanderlust adventures. Whether
              you're seeking sun-soaked beaches, or thrilling outdoor escapades,
              we've got you covered.
            </p>
            <div className={styles.actionBtns}>
              {" "}
              {/* Sử dụng styles.actionBtns */}
              <button className={styles.primaryBtn}>Explore</button>{" "}
              {/* Sử dụng styles.primaryBtn */}
              <button className={styles.secondaryBtn}>See More</button>{" "}
              {/* Sử dụng styles.secondaryBtn */}
            </div>
            <div className={styles.socials}>
              {" "}
              {/* Sử dụng styles.socials */}
              <span>
                <i className="ri-instagram-line"></i>
              </span>
              <span>
                <i className="ri-twitter-fill"></i>
              </span>
              <span>
                <i className="ri-facebook-fill"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
