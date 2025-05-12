import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  value?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id: string;
  label: string;
  disabled?: boolean;
  withOutline?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled = false,
  withOutline = false,
}) => {
  return (
    <div className={styles.checkboxContainer}>
      <label
        htmlFor={id}
        className={styles.label}
        data-disabled={disabled || undefined}
      >
        <span className={styles.labelText}>{label}</span>
        <input
          id={id}
          type="checkbox"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className={styles.input}
        />
        <div
          className={`${styles.indicator} ${
            withOutline ? styles.checkboxOutline : ""
          }`}
        ></div>
      </label>
    </div>
  );
};

export default Checkbox;
