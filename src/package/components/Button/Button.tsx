import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

export type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  iconOnly?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
  loading?: boolean;
  outline?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  iconOnly = false,
  fullWidth = false,
  className,
  children,
  disabled,
  loading = false,
  outline = false,
  type = "button",
  ...props
}: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[size],
    {
      [styles[variant]]: !outline,
      [styles.outline]: outline,
      [styles[`outline.${variant}`]]: outline,
      [styles.iconOnly]: iconOnly,
    },
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {!iconOnly && children}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {loading && (
        <span className={styles.icon}>
          {/* You can add a loading spinner component here */}
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
    </>
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      style={{ width: fullWidth ? "100%" : "auto" }}
      {...props}
    >
      {content}
    </button>
  );
};
