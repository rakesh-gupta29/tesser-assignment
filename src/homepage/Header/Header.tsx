import styles from "./Header.module.css";
import CodeIcon from "../../components/ui/icons/CodeIcon";
import CloseIcon from "../../components/ui/icons/CloseIcon";

export default function Header() {
  return (
    <div className={styles.pageHeader}>
      <h1>Create New Oracle Database Service</h1>
      <div className={styles.optionsWrapper}>
        <button type="button" className={styles.codeButton}>
          <CodeIcon /> Code
        </button>
        <button type="button" className={styles.closeButton}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
