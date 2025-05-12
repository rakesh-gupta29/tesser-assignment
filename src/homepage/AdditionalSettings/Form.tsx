import { forwardRef, useImperativeHandle, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./AdditionalSettings.module.css";
import RadioGroupElement from "../../components/ui/RadioGroup/RadioGroup";
import DatePicker from "../../components/ui/DatePicker/DatePicker";
import TimePicker from "../../components/ui/TimePicker/TimePicker";
import DropDown from "../../components/ui/DropDown/DropDown";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import Input from "../../components/ui/Input/Input";
import FormInfoTile from "../FormInfoTile/FormInfoTile";

const formSchema = z.object({
  withWindow: z.boolean(),
  startDate: z.string().optional(),
  startTime: z.string().optional(),
  duration: z.string().optional(),
  withMinorVersion: z.boolean(),
  sla: z.string().min(1, { message: "SLA is required" }),
  snapshotTime: z.string().min(1, { message: "Snapshot time is required" }),
});

type FormValues = z.infer<typeof formSchema>;

export interface FormRef {
  submit: () => void;
}

const Form = forwardRef<FormRef>((_, ref) => {
  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    register,
    formState,
    clearErrors,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      withWindow: false,
      startDate: "",
      startTime: "",
      duration: "",
      withMinorVersion: false,
      sla: "",
      snapshotTime: "",
    },
  });

  const { errors } = formState;

  const withWindow = watch("withWindow");
  const duration = watch("duration");
  const withMinorVersion = watch("withMinorVersion");
  const startTime = watch("startTime");
  const startDate = watch("startDate");
  const sla = watch("sla");
  const snapshotTime = watch("snapshotTime");

  useEffect(() => {
    if (!withWindow) {
      reset({
        withWindow: false,
        startDate: "",
        startTime: "",
      });
    }
  }, [withWindow, reset]);

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  useImperativeHandle(ref, () => ({
    submit: () => {
      handleSubmit(onSubmit)();
    },
  }));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(watch());
      }}
      className={styles.formComponentsWrapper}
    >
      <RadioGroupElement
        options={["No Preferences", "Select Window"]}
        value={"No Preferences"}
        onChange={(value) => {
          if (value === "Select Window") {
            setValue("withWindow", true);
          } else {
            setValue("withWindow", false);
            clearErrors(["startDate", "startTime", "duration"]);
            setValue("startDate", "");
            setValue("startTime", "");
            setValue("duration", "");
            setValue("withMinorVersion", false);
          }
        }}
      />

      {withWindow && (
        <>
          <div className={styles.formRow}>
            <DatePicker
              label="Start Date"
              value={startDate ?? ""}
              onChange={(value) => setValue("startDate", value)}
              error={errors.startDate?.message}
            />
            <TimePicker
              label="Start Time"
              value={startTime ?? ""}
              onChange={(value) => setValue("startTime", value)}
              error={errors.startTime?.message}
            />
          </div>
          <div className={styles.formRow}>
            <div style={{ flex: 1 }}>
              <DropDown
                label="Duration"
                value={duration ?? ""}
                placeholder="Duration"
                options={[
                  { label: "1 hour", value: "1" },
                  { label: "2 hours", value: "2" },
                  { label: "3 hours", value: "3" },
                  { label: "4 hours", value: "4" },
                  { label: "5 hours", value: "5" },
                ]}
                onChange={(value) => {
                  setValue("duration", value, { shouldValidate: false });
                }}
                error={errors.duration?.message}
              />
            </div>
            <div style={{ flex: 1 }} />
          </div>

          <Checkbox
            id="containerDatabase"
            label="Create as a Container Database"
            checked={withMinorVersion}
            onChange={() => setValue("withMinorVersion", !withMinorVersion)}
          />
        </>
      )}

      <div className={styles.additionalOptionsWrapper}>
        <FormInfoTile
          title="Availability Machine Preferences"
          subtitle="Here you can define your data protection SLA and schedule. Once the database has been created, you can further define the data availability and access policies from the Availability Machine app."
        />
        <div className={styles.formRow}>
          <div style={{ flex: 1 }}>
            <Input
              label="SLA"
              value={sla ?? ""}
              {...register("sla")}
              placeholder="Enter SLA"
              error={errors.sla?.message}
            />
          </div>
          <TimePicker
            label="Snapshot Time"
            value={snapshotTime ?? ""}
            onChange={(value) => setValue("snapshotTime", value)}
            error={errors.snapshotTime?.message}
          />
        </div>
      </div>
    </form>
  );
});

export default Form;
