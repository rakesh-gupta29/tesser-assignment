import { type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  ghost?: boolean;
}
export default function Input({
  error,
  label,
  id,
  className,
  icon,
  ghost,
  ...props
}: InputProps & { icon?: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <div
          className={`${styles.inputWrapper} ${ghost ? styles.ghost : ""} ${
            error ? styles.invalid : ""
          }`}
        >
          <input
            id={id}
            className={`${styles.input} ${className}`}
            {...props}
          />
          <div className={styles.iconWrapper}>{icon}</div>
        </div>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    </div>
  );
}
