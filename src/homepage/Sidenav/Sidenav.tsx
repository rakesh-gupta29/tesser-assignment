import styles from "./Sidenav.module.css";
import Bullet from "./Bullet";
export default function Sidenav() {
  return (
    <div className={styles.container}>
      <Bullet
        active
        title="Service Details"
        subtitle={
          <div className={styles.serviceInfo}>
            <div className={styles.serviceItem}>
              <span>Oracle_service</span>
            </div>
          </div>
        }
      />

      <Bullet
        title="Additional Setting"
        subtitle={
          <div className={styles.additionalSettings}>
            <span>No Preference Enabled minor version update</span>
            <span>7-day PITR 01:00 snapshot time</span>
          </div>
        }
      />
    </div>
  );
}
