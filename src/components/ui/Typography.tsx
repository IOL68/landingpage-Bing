import { ElementType, HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-poppins text-4xl font-bold text-landmark-blue lg:text-5xl',
      h2: 'font-poppins text-3xl font-semibold text-landmark-blue lg:text-4xl',
      h3: 'font-poppins text-2xl font-semibold text-landmark-blue lg:text-3xl',
      h4: 'font-poppins text-xl font-semibold text-landmark-blue lg:text-2xl',
      p: 'font-inter text-base text-landmark-gray',
      lead: 'font-inter text-xl text-landmark-gray',
      large: 'font-inter text-lg font-semibold text-landmark-gray',
      small: 'font-inter text-sm text-landmark-gray',
      subtle: 'font-inter text-sm text-gray-500',
      quote: 'font-poppins text-xl text-landmark-blue font-medium italic lg:text-2xl',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    textColor: {
      default: '',
      muted: 'text-gray-600',
      primary: 'text-landmark-violet',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'p',
    align: 'left',
    textColor: 'default',
  },
});

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: ElementType;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, align, textColor, as: Component = 'p', children, ...props }, ref) => {
    const Tag = Component || 
      (variant?.toString().startsWith('h') ? variant.toString() : 'p');

    return (
      <Tag
        className={typographyVariants({ variant, align, textColor, className })}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
