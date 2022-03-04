import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <h1>
          Welcome to <a>About</a>
        </h1>
      </main>
    </div>
  );
};

export default About;
