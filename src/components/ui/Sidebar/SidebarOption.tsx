import styles from "./Sidebar.module.css";

interface SidebarOptionProps {
  iconLeft: React.ReactNode;
  label: string;
  active?: boolean;
  iconRight?: React.ReactNode;
}

function SidebarOption({
  iconLeft,
  label,
  active,
  iconRight,
}: SidebarOptionProps) {
  return (
    <button
      className={`${styles.sidebarOption} ${active ? styles.optionActive : ""}`}
      type="button"
    >
      {iconLeft}
      <span>{label}</span>
      {iconRight}
    </button>
  );
}

export default SidebarOption;
