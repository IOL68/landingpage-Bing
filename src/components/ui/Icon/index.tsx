import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  variant?: 'default' | 'primary' | 'secondary' | 'muted'
}

const variants = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted-foreground',
}

export function Icon({ icon: Icon, variant = 'default', className, ...props }: IconProps) {
  return (
    <div className={cn(variants[variant], className)} {...props}>
      <Icon />
    </div>
  )
}
