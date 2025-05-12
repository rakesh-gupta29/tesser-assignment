import styles from "./FormInfoTile.module.css";
type Props = {
  title: string;
  subtitle: string;
  topMargin?: number;
};

export default function FormInfoTile({ title, subtitle, topMargin }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{ marginTop: `${topMargin ?? 0}px` }}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
}
