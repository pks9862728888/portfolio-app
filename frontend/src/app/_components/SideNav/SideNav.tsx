import styles from "./SideNav.module.css";

const SideNav = () => {
  return (
    <div className={styles.sidenav}>
      <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.9858 11.25L19.5002 0L0.0146484 11.25V33.75L38.9858 11.25Z" fill="#EC5EB7"/>
        <path d="M2.99956 34.5L22.4851 45.75L41.9707 34.5L41.9707 12L2.99956 34.5Z" fill="#B783EB"/>
      </svg>
    </div>
  );
}

export default SideNav;
