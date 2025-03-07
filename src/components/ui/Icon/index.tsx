import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?: 'default' | 'primary' | 'secondary' | 'muted'
  iconSize?: string
}

const variants = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted-foreground',
}

const sizes: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
}

export function Icon({ icon: Icon, variant = 'default', iconSize, className, ...props }: IconProps) {
  return (
    <div className={cn(variants[variant], className)} {...props}>
      <Icon className={iconSize && sizes[iconSize] ? sizes[iconSize] : undefined} />
    </div>
  )
}