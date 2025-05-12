import React from "react";
import styles from "./Navbar.module.css";
import UserProfileAvatar from "../UserProfileAvatar/UserProfileAvatar";
import NavOption from "./NavOption";
import AnnounceIcon from "../icons/AnnounceIcon";
import HelpIcon from "../icons/HelpIcon";
import BellIcon from "../icons/BellIcon";
interface NavbarProps {
  path: string[];
  credits: string;
}

export default function Navbar({ path, credits }: NavbarProps) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.TextWrapper}>
        {path.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            {index < path.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.optionsWrapper}>
        <span className={styles.credits}>Credits: {credits}</span>
        <span className={styles.divider}>|</span>
        <NavOption>
          <AnnounceIcon />
        </NavOption>
        <NavOption>
          <HelpIcon />
        </NavOption>
        <NavOption>
          <BellIcon />
        </NavOption>
        <NavOption>
          <UserProfileAvatar height={24} width={24} />
        </NavOption>
      </div>
    </div>
  );
}
