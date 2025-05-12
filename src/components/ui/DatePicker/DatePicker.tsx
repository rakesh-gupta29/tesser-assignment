import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";
import CalendarIcon from "../icons/CalendarIcon";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function DatePickerElement({
  label,
  value,
  onChange,
  error,
}: Props) {
  const ref = useRef<DatePicker>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.errorWrapper}>
        <div className={styles.datePicker}>
          <DatePicker
            wrapperClassName={styles.datePickerWrapper}
            dropdownMode="select"
            ref={ref}
            className={styles.datePickerElem}
            placeholderText="Select date"
            selected={selectedDate}
            onChange={(date: Date | null) => {
              setSelectedDate(date);
              onChange(date?.toISOString() ?? "");
            }}
            popperPlacement="bottom-start"
          />
          <div className={styles.calendarIconWrapper}>
            <CalendarIcon
              onClick={() => ref.current?.setOpen(true)}
              className={styles.calendarIcon}
              height={16}
              width={16}
            />
          </div>
        </div>
        {error && (
          <span className={styles.error}>
            {error ?? "Please select a date"}
          </span>
        )}
      </div>
    </div>
  );
}
