import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { useState } from "react";
import styles from "./RadioGroup.module.css";

type Props = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

const RadioGroupElement = ({ options, value, onChange }: Props) => {
  const [selected, setSelected] = useState(value);

  return (
    <RadioGroup
      value={selected}
      onChange={(value) => {
        setSelected(value);
        onChange(value);
      }}
      className={styles.radioGroup}
    >
      {options.map((option) => (
        <Field key={option} className={styles.field}>
          <Radio
            value={option}
            className={`${styles.radioBtn} ${
              selected === option ? styles.radioBtnChecked : ""
            }`}
          >
            <span
              className={
                selected === option
                  ? styles.radioInnerCircleActive
                  : styles.radioInnerCircleInactive
              }
            />
          </Radio>
          <Label className={styles.label}>{option}</Label>
        </Field>
      ))}
    </RadioGroup>
  );
};

export default RadioGroupElement;
