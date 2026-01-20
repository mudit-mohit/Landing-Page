import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const chipViewClasses = cva(
  'inline-flex items-center transition-all duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-chip-background-primary text-chip-text-primary',
        secondary: 'bg-background-secondary text-text-secondary',
        muted: 'bg-background-muted text-text-muted',
      },
      size: {
        small: 'text-xs px-2 py-1',
        medium: 'text-sm px-3 py-1.5',
        large: 'text-base px-4 py-2',
      },
      alignment: {
        start: 'self-start',
        center: 'self-center',
        end: 'self-end',
        stretch: 'self-stretch',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      alignment: 'start',
    },
  }
);

const ChipView = ({
  // Required parameters with defaults
  layout_align_self = "start",
  
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  children,
  onClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Map align-self value
  const alignmentMapping = {
    'start': 'start',
    'center': 'center', 
    'end': 'end',
    'stretch': 'stretch',
    'auto': 'start', // fallback to start
  };

  const mappedAlignment = alignmentMapping?.[layout_align_self] || 'start';

  // Safe click handler
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={twMerge(
        chipViewClasses({ 
          variant, 
          size, 
          alignment: mappedAlignment 
        }),
        optionalClasses,
        className
      )}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e?.key === 'Enter' || e?.key === ' ') {
          e?.preventDefault();
          handleClick(e);
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

export default ChipView;