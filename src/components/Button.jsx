import React from "react";

const Button = ({ children, variant = "green", className = "" }) => {
  const variants = {
    green: "fill-[#A3FF00] text-black",
  };

  return (
    <button className={`relative flex items-center ${className}`}>
      <svg
        width="212"
        height="50"
        viewBox="0 0 212 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={variants[variant]}
      >
        <path d="M14.38 0H208.34C210 0 211.34 1.34 211.34 3V35.62C211.34 36.95 210.81 38.22 209.88 39.16L200.5 48.54C199.56 49.48 198.29 50 196.96 50H3C1.34 50 0 48.66 0 47V14.38C0 13.05 0.529961 11.78 1.45996 10.84L10.84 1.45996C11.78 0.529961 13.06 0 14.38 0Z" />
      </svg>

      <div className="absolute left-5 right-5 flex justify-between text-black text-[22px]">
        <span>{children}</span>
        <span>↗</span>
      </div>
    </button>
  );
};

export default Button;
