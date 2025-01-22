import { HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-landmark-violet focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-landmark-violet text-white',
        secondary:
          'border-transparent bg-gray-100 text-landmark-blue',
        outline: 'text-landmark-blue border-landmark-violet',
        success: 'border-transparent bg-green-100 text-green-800',
        warning: 'border-transparent bg-yellow-100 text-yellow-800',
        danger: 'border-transparent bg-red-100 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({
  className,
  variant,
  ...props
}: BadgeProps) => {
  return (
    <div className={badgeVariants({ variant, className })} {...props} />
  );
};

export { Badge, badgeVariants };
