import { LucideIcon, LucideProps } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const iconVariants = cva('', {
  variants: {
    variant: {
      default: 'text-landmark-blue',
      primary: 'text-landmark-violet',
      secondary: 'text-gray-500',
      white: 'text-white',
    },
    iconSize: {
      default: 'h-5 w-5',
      sm: 'h-4 w-4',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    iconSize: 'default',
  },
});

export interface IconProps extends Omit<LucideProps, 'size'>, VariantProps<typeof iconVariants> {
  icon: LucideIcon;
}

const Icon = ({
  className,
  icon: Icon,
  variant,
  iconSize,
  ...props
}: IconProps) => {
  return (
    <Icon className={iconVariants({ variant, iconSize, className })} {...props} />
  );
};

export { Icon, iconVariants };
