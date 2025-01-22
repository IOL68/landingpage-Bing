export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
  nav: NavItem[]
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  features: string[]
  cta: {
    text: string
    href: string
  }
  popular?: boolean
}
