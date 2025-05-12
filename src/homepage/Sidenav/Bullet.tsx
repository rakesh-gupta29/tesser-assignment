import type React from "react";
import styles from "./Bullet.module.css";

interface BulletProps {
  title: string;
  subtitle?: React.ReactNode;
  active?: boolean;
}

const Bullet: React.FC<BulletProps> = ({ title, subtitle, active = false }) => {
  return (
    <div className={styles.bulletContainer}>
      <div className={styles.bulletLine}>
        <div className={`${styles.bullet} ${active ? styles.active : ""}`} />
      </div>
      <div className={styles.content}>
        <h3 className={`${styles.title} ${active ? styles.activeTitle : ""}`}>
          {title}
        </h3>
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
    </div>
  );
};

export default Bullet;
