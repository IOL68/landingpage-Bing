import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-xl border bg-white transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border-gray-200 shadow-sm hover:shadow-md',
        featured: 'border-landmark-violet shadow-lg scale-105 hover:scale-[1.06]',
        ghost: 'border-transparent shadow-none',
      },
      padding: {
        default: 'p-6',
        pricing: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        className={cardVariants({ variant, padding, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

// Card Header - Para el título y subtítulo del plan
const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`space-y-1.5 ${className || ''}`}
    {...props}
  />
);

// Card Content - Para la lista de características
const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={`pt-6 ${className || ''}`} {...props} />
);

// Card Footer - Para el precio y CTA
const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`pt-6 ${className || ''}`}
    {...props}
  />
);

Card.displayName = 'Card';

export { Card, CardHeader, CardContent, CardFooter };
