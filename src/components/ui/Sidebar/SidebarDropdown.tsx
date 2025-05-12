import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import styles from "./Sidebar.module.css";

interface SidebarDropdownProps {
  children: React.ReactNode;
  actionText: string;
}

export default function SidebarDropdown({
  children,
  actionText,
}: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={styles.sidebarDropdown}
      >
        <span>{actionText}</span>
        <span
          className={`${styles.arrowIconWrapper} ${
            isOpen ? styles.rotate90 : ""
          }`}
        >
          {isOpen ? (
            <ArrowRightIcon height={16} width={16} />
          ) : (
            <ArrowRightIcon height={16} width={16} />
          )}
        </span>
      </button>
      <div
        className={`${styles.sidebarDropdownContent} ${
          isOpen ? styles.dropDownOpen : styles.dropDownClosed
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        {isOpen ? children : <div aria-hidden>{children}</div>}
      </div>
    </div>
  );
}
