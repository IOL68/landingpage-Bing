import { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva('mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      default: 'max-w-7xl',
      sm: 'max-w-5xl',
      lg: 'max-w-8xl',
    },
    padding: {
      default: 'py-8 md:py-12 lg:py-16',
      sm: 'py-4 md:py-6 lg:py-8',
      lg: 'py-12 md:py-16 lg:py-24',
      none: '',
    },
  },
  defaultVariants: {
    size: 'default',
    padding: 'default',
  },
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = ({
  className,
  size,
  padding,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={containerVariants({ size, padding, className })}
      {...props}
    >
      {children}
    </div>
  );
};

export { Container, containerVariants };
