import React from "react";
import styles from "./Navbar.module.css";
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function NavOption({ children, onClick }: Props) {
  return (
    <button type="button" onClick={onClick} className={styles.navOptionButton}>
      {children}
    </button>
  );
}
