import Form, { type FormRef } from "./Form";
import styles from "./ServiceDetails.module.css";

export default function ServiceDetailsForm({
  ref,
}: {
  ref: React.RefObject<FormRef> | null;
}) {
  return (
    <div className={styles.formWrapper}>
      <span className={styles.formTitle}>Service Details</span>
      <span className={styles.formSubtitle}>
        Service Name, Service Description, Software Release
      </span>
      <Form ref={ref} />
    </div>
  );
}
