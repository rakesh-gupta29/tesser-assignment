import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import CheckIcon from "../icons/CheckIcon";
import styles from "./DropDown.module.css";
import ArrowRightIcon from "../icons/ArrowRightIcon";

interface Option {
  label: string;
  value: string;
}

interface DropDownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  label?: string;
}

function DropDown({
  options,
  value,
  onChange,
  placeholder,
  error,
  label,
}: DropDownProps) {
  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
  };

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.errorWrapper}>
        <div className={styles.dropdownContainer}>
          <Menu>
            <MenuButton
              className={`${styles.button} ${!value ? styles.placeholder : ""}`}
            >
              <div className={styles.buttonContent}>
                {options.find((option) => option.value === value)?.label ?? (
                  <span className={styles.placeholderText}>{placeholder}</span>
                )}
              </div>
              <ArrowRightIcon
                style={{ transform: "rotate(90deg)" }}
                height={16}
                width={16}
              />
            </MenuButton>
            <MenuItems className={styles.items}>
              {options.map((option) => (
                <MenuItem key={option.value}>
                  <button
                    className={styles.menuItem}
                    onClick={() => handleSelect(option.value)}
                  >
                    <span>{option.label}</span>
                    {option.value === value && (
                      <CheckIcon height={16} width={16} />
                    )}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
}

export default DropDown;
