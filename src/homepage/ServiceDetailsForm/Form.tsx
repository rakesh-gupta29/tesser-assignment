import { useState, forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../../components/ui/Input/Input";
import CheckIcon from "../../components/ui/icons/CheckIcon";
import Spinner from "../../components/ui/icons/Spinner";
import styles from "./ServiceDetails.module.css";
import Textarea from "../../components/ui/Textarea/Textarea";
import TagInput from "../../components/ui/TagInput/TagInput";
import DropDown from "../../components/ui/DropDown/DropDown";
import Checkbox from "../../components/ui/Checkbox/Checkbox";
import FormInfoTile from "../FormInfoTile/FormInfoTile";

const formSchema = z.object({
  serviceName: z.string().min(1, "Service name is required"),
  description: z.string().optional(),
  tags: z.array(z.object({ key: z.string(), value: z.string() })),
  softwareRelease: z.string().min(1, "Software release is required"),
  softwareVersion: z.string().min(1, "Software version is required"),
  withContainer: z.boolean(),
});

const softwareReleaseOptions = [
  { label: "Oracle Database 23c", value: "23c" },
  { label: "Oracle Database 21c", value: "21c" },
  { label: "Oracle Database 19c", value: "19c" },
  { label: "Oracle Database 18c", value: "18c" },
  { label: "Oracle Database 12c", value: "12c" },
  { label: "Oracle Database 11g", value: "11g" },
];

const softwareVersionOptions = [
  { label: "23.3.0", value: "23.3.0" },
  { label: "23.2.0", value: "23.2.0" },
  { label: "21.3.0", value: "21.3.0" },
  { label: "19.19.0", value: "19.19.0" },
  { label: "19.18.0", value: "19.18.0" },
  { label: "18.14.0", value: "18.14.0" },
  { label: "12.2.0.1", value: "12.2.0.1" },
  { label: "11.2.0.4", value: "11.2.0.4" },
];

type FormValues = z.infer<typeof formSchema>;

export interface FormRef {
  submit: () => void;
}

const Form = forwardRef<FormRef>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tags: [],
      softwareRelease: "",
      softwareVersion: "",
      withContainer: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  useImperativeHandle(ref, () => ({
    submit: () => {
      handleSubmit(onSubmit)();
    },
  }));

  const dummyAPICall = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsValid(true);
    }, 3000);
  };
  const tags = watch("tags");
  const softwareRelease = watch("softwareRelease");
  const softwareVersion = watch("softwareVersion");
  const withContainer = watch("withContainer");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(watch());
      }}
      className={styles.formComponentsWrapper}
    >
      <Input
        id="serviceName"
        label="Service Name"
        type="text"
        placeholder="Enter Service Name"
        error={errors.serviceName?.message}
        icon={
          isLoading ? (
            <Spinner height={20} width={20} />
          ) : isValid ? (
            <CheckIcon className="text-green-500" />
          ) : null
        }
        {...register("serviceName", {
          onChange: async () => {
            setIsLoading(true);
            await dummyAPICall();
          },
        })}
      />

      <Textarea
        id="Description (optional)"
        label="Description (optional)"
        placeholder="Enter Service Description"
        error={errors.description?.message}
        {...register("description")}
      />

      <TagInput
        label="Tags"
        value={tags}
        onChange={(tags) => setValue("tags", tags, { shouldValidate: true })}
      />
      <FormInfoTile
        topMargin={8}
        title="Engine configuration"
        subtitle="Adjustable parameters, performance optimization, fine-tuning options"
      />

      <div className={styles.engineConfigurationDropdowns}>
        <DropDown
          label="Software release"
          placeholder="Select software release"
          options={softwareReleaseOptions}
          value={softwareRelease}
          onChange={(value) =>
            setValue("softwareRelease", value, {
              shouldValidate: false,
              shouldDirty: false,
            })
          }
          error={errors.softwareRelease?.message}
        />

        <DropDown
          label="Software version"
          placeholder="Select software version"
          options={softwareVersionOptions}
          value={softwareVersion}
          onChange={(values) =>
            setValue("softwareVersion", values, { shouldValidate: false })
          }
          error={errors.softwareVersion?.message}
        />
      </div>
      <Checkbox
        id="isActive"
        label="Create as a Container Database"
        checked={withContainer}
        onChange={() => setValue("withContainer", !withContainer)}
      />
    </form>
  );
});

export default Form;
