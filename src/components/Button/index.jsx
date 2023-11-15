import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[33px]",
  circle: "rounded-[50%]",
  square: "rounded-none",
};
const variants = {
  outline: {
    gray_50: "border border-gray-50 border-solid",
    gray_300: "border border-gray-300 border-solid",
  },
  fill: {
    yellow_800: "bg-yellow-800 text-gray-50",
    gray_50_01: "bg-gray-50_01 shadow-bs text-black-900",
    gray_900_01: "bg-gray-900_01 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
  },
};
const sizes = { xs: "p-2", sm: "p-3", md: "p-4", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_50",
    "gray_300",
    "yellow_800",
    "gray_50_01",
    "gray_900_01",
    "white_A700",
  ]),
};

export { Button };
