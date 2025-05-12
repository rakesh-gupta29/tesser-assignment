import { useRef } from "react";
import styles from "./TimePicker.module.css";
import ClockIcon from "../icons/ClockIcon";

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
  error?: string;
};

export default function TimePicker({ label, onChange, value, error }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.errorWrapper}>
        <div
          className={`${styles.timePickerWrapper} ${
            error ? styles.errorBorder : ""
          }`}
        >
          <input
            ref={ref}
            type="time"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.timePicker}
          />
          <ClockIcon
            onClick={() => ref.current?.showPicker()}
            className={styles.clockIcon}
          />
        </div>
        {error && (
          <span className={styles.error}>
            {error ?? "Please select a time"}
          </span>
        )}
      </div>
    </div>
  );
}
