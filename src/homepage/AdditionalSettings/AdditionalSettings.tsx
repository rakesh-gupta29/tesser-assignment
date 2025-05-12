import Form, { type FormRef } from "./Form";
import styles from "./AdditionalSettings.module.css";
import FormInfoTile from "../FormInfoTile/FormInfoTile";
import Table, { type RowData } from "../../components/ui/Table/Table";
import NotificationTile from "../../components/ui/NotificationTile/NotificationTile";

const data: RowData[] = [
  { id: "1", title: "Row Title" },
  { id: "2", title: "Row Title" },
  { id: "3", title: "Row Title" },
  { id: "4", title: "Row Title" },
];

export default function AdditionalSettingsForm({
  ref,
}: {
  ref: React.RefObject<FormRef> | null;
}) {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <span className={styles.formTitle}>Additional settings</span>
        <span className={styles.formSubtitle}>
          Maintenance Window, Availability machine
        </span>
      </div>
      <FormInfoTile
        title="Maintenance Window"
        subtitle="Describing what maintenance window is"
      />

      <Form ref={ref} />
      <Table data={data} />
      <NotificationTile text="Projecting an estimate total count of 71 snapshots with the above configuration." />
    </div>
  );
}
