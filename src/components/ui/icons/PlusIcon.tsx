import React from "react";

export default function PlusIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_7543)">
        <path
          d="M5.46875 2.375C5.46875 2.11612 5.25888 1.90625 5 1.90625C4.74112 1.90625 4.53125 2.11612 4.53125 2.375V5.03125H1.875C1.61612 5.03125 1.40625 5.24112 1.40625 5.5C1.40625 5.75888 1.61612 5.96875 1.875 5.96875H4.53125V8.625C4.53125 8.88387 4.74112 9.09375 5 9.09375C5.25888 9.09375 5.46875 8.88387 5.46875 8.625V5.96875H8.125C8.38387 5.96875 8.59375 5.75888 8.59375 5.5C8.59375 5.24112 8.38387 5.03125 8.125 5.03125H5.46875V2.375Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_7543">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
