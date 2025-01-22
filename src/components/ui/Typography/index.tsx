import { cn } from '@/lib/utils'

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'lead' | 'p' | 'small' | 'subtle'
  color?: 'default' | 'muted' | 'primary' | 'white'
  children: React.ReactNode
}

const variants = {
  h1: 'scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  lead: 'text-xl text-muted-foreground',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  small: 'text-sm font-medium leading-none',
  subtle: 'text-sm text-muted-foreground',
}

const colors = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  white: 'text-white',
}

export function Typography({
  variant = 'p',
  color = 'default',
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = variant === 'p' || variant === 'lead' || variant === 'small' || variant === 'subtle' ? 'p' : variant

  return (
    <Component
      className={cn(variants[variant], colors[color], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
