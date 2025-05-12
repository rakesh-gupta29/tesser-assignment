import { useState } from "react";
import type { KeyboardEvent } from "react";
import styles from "./TagInput.module.css";
import Input from "../Input/Input";
import CloseIcon from "../icons/CloseIcon";

interface Tag {
  key: string;
  value: string;
}

interface TagInputProps {
  value: Tag[];
  onChange: (tags: Tag[]) => void;
  label?: string;
}

export default function TagInput({ value, onChange, label }: TagInputProps) {
  const [keyInput, setKeyInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [error, setError] = useState("");

  const validateAndAddTag = () => {
    const trimmedKey = keyInput.trim();
    const trimmedValue = valueInput.trim();

    setError("");

    if (!trimmedKey || !trimmedValue) {
      setError("Both key and value are required");
      return;
    }

    if (trimmedKey.includes(" ")) {
      setError("Key cannot contain spaces");
      return;
    }

    if (value.some((tag) => tag.key === trimmedKey)) {
      setError("Key already exists");
      return;
    }

    onChange([...value, { key: trimmedKey, value: trimmedValue }]);
    setKeyInput("");
    setValueInput("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      validateAndAddTag();
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...value];
    newTags.splice(index, 1);
    onChange(newTags);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.inputContainer}>
        <div className={styles.inputRow}>
          <Input
            className={styles.input}
            type="text"
            placeholder="Key"
            ghost
            value={keyInput}
            onChange={(e) => setKeyInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <div className={styles.colon}>
            <span>:</span>
          </div>
          <Input
            className={styles.input}
            type="text"
            ghost
            placeholder="Value"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        {error && <span className={styles.error}>{error}</span>}
      </div>
      <div className={styles.tags}>
        {value.map((tag, index) => (
          <span className={styles.tag} key={index}>
            <span>{tag.key}</span> : <span>{tag.value}</span>
            <button
              type="button"
              className={styles.remove}
              onClick={() => removeTag(index)}
            >
              <CloseIcon height={14} width={14} />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
