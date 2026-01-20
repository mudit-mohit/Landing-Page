import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonClasses = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        outline: "",
      },
      size: {
        small: "text-xs px-3 py-1.5",
        medium: "text-sm px-4 py-2",
        large: "text-base px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

const Button = ({
  text = "",
  text_font_size = "16",
  text_font_family = "Montserrat",
  text_font_weight = "400",
  text_line_height = "20px",
  text_text_align = "center",
  text_color = "#ffffff",

  border_border = "none",
  border_border_radius = "6px",

  fill_background,
  fill_background_color,

  effect_box_shadow,

  layout_gap,
  padding,
  margin,
  layout_width,
  className,
  children,
  variant,
  size,
  onClick,
  type = "button",
}) => {
  // build inline styles (RELIABLE)
  const style = {
    background:
      fill_background && typeof fill_background === "string"
        ? fill_background
        : undefined,

    backgroundColor:
      fill_background_color && typeof fill_background_color === "string"
        ? fill_background_color
        : undefined,

    border: border_border || "none",
    borderRadius: border_border_radius,

    boxShadow:
      effect_box_shadow && typeof effect_box_shadow === "string"
        ? effect_box_shadow
        : undefined,

    width: layout_width,
    padding,
    margin,
  };

  // typography classes
  const baseClasses = `
    text-[${text_font_size}px]
    leading-[${text_line_height}]
    font-[${text_font_weight}]
    text-[${text_color}]
    font-['${text_font_family}']
    text-${text_text_align}
    ${layout_gap ? `gap-[${layout_gap}]` : ""}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={twMerge(
        buttonClasses({ variant, size }),
        baseClasses,
        "inline-flex items-center",
        className
      )}
    >
      {children || text}
    </button>
  );
};

export default Button;
