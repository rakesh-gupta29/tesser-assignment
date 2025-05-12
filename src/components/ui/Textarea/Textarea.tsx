import React, { useLayoutEffect, useRef } from "react";
import styles from "./Textarea.module.css";
import TextareaAutosize from "react-textarea-autosize";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  id,
  className,
  placeholder,
}: TextareaProps) {
  const textbox = useRef<HTMLTextAreaElement>(null);

  function adjustHeight() {
    if (textbox.current) {
      textbox.current.style.height = "inherit";
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }
  }

  useLayoutEffect(adjustHeight, []);

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.textareaWrapper}>
        <TextareaAutosize
          id={id}
          minRows={6}
          placeholder={placeholder}
          maxRows={16}
          onChange={adjustHeight}
          className={`${styles.textarea} ${className || ""}`}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
