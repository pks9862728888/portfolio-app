import styles from "./DashboardPage.module.css";

const DashboardPage = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.dpWrapper}></div>
      <div className={styles.aboutSection}>
          <p className={styles.headingLine}>Hi, I am <span className={styles.highlightName}>Pran Kumar Sarkar</span></p>
          <p className={styles.subHeading}>
            A passionate <span className={styles.role}>Full Stack Web Developer</span>
          </p>
          <p className={styles.subHeading}>
            Crafting <strong>innovative</strong> and <strong>user-centric solutions.</strong><br />
            <span>Let's bring your ideas to life!</span>
          </p>
        <div className={"flex mt-4"}>
          <a className={"mr-4"} href={"https://github.com/pks9862728888"} target={"_blank"}>
            <img src={"github.png"} alt={"github link"} className={`${styles.connectIcon} ${styles.gitIcon}`}/>
          </a>
          <a className={"mr-4"} href={"https://www.linkedin.com/in/pran-kumar/"} target={"_blank"}>
            <img src={"linkedin.png"} alt={"linkedin link"} className={styles.connectIcon}/>
          </a>
          <a href={"mailto:pks9862728888@gmail.com"} target={"_blank"}>
            <img src={"mail.png"} alt={"gmail link"} className={styles.connectIcon}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
