import styles from "./Layout.module.css";
import Header from "../Header/Header";
import { Button } from "../../package/components/Button/Button";
import PlusIcon from "../../components/ui/icons/PlusIcon";
import Sidenav from "../Sidenav/Sidenav";
import ServiceDetailsForm from "../ServiceDetailsForm/ServiceDetailsForm";
import AdditionalSettingsForm from "../AdditionalSettings/AdditionalSettings";
import type { FormRef } from "../ServiceDetailsForm/Form";
import { useRef } from "react";

export default function HomepageLayout() {
  const detailsFormRef = useRef<FormRef>(null!);
  const additionalSettingsFormRef = useRef<FormRef>(null!);

  return (
    <div className={styles.homepageContainer}>
      <Header />
      <div className={styles.PageContentWrapper}>
        <div className={styles.sideNav}>
          <div className={styles.contentWrapper}>
            <div className={styles.section}>
              <Sidenav />
            </div>
            <div className={styles.footer}>
              <div className={styles.priceInfo}>
                <div className={styles.priceInfoWrapper}>
                  <span className={styles.estimateLabel}>
                    Estimated Monthly Price*
                  </span>
                  <a href="#" className={styles.viewDetails}>
                    View details
                  </a>
                </div>
                <div className={styles.priceValue}>$99.99</div>
              </div>
              <div className={styles.ButtonWrapper}>
                <Button
                  onClick={() => {
                    detailsFormRef.current?.submit();
                    additionalSettingsFormRef.current?.submit();
                  }}
                >
                  <PlusIcon height={20} width={20} /> Create service
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>
          <ServiceDetailsForm ref={detailsFormRef} />
          <AdditionalSettingsForm ref={additionalSettingsFormRef} />
        </div>
      </div>
    </div>
  );
}
