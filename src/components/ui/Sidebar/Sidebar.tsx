import { Button } from "../../../package/components/Button/Button";
import BrandLogo from "../Brand/Brand";
import AppsIcon from "../icons/Apps";
import CollapseIcon from "../icons/Collapse";
import { sidebarOptions, sidebarBottomOptions } from "./options";
import styles from "./Sidebar.module.css";
import SidebarDropdown from "./SidebarDropdown";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.BrandWrapper}>
          <BrandLogo height={24} width={64} />
          <Button variant="ghost">
            <CollapseIcon style={{ color: "var(--text-50)" }} />
          </Button>
        </div>
        <div className={styles.AppsWrapper}>
          <SidebarOption iconLeft={<AppsIcon />} label="Apps" />
        </div>
        <div className={styles.optionsWrapper}>
          <SidebarDropdown actionText="DB Services">
            {sidebarOptions.map((option) => (
              <SidebarOption
                key={option.label}
                iconLeft={option.iconLeft}
                label={option.label}
                active={option.active}
              />
            ))}
          </SidebarDropdown>
        </div>
        <div className={styles.BottomOptionsWrapper}>
          {sidebarBottomOptions.map((option) => (
            <SidebarOption
              key={option.label}
              iconLeft={option.iconLeft}
              label={option.label}
              iconRight={option.iconRight}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
