import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <Container>
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="The LAI"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* CTA Button */}
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#3A2D80] px-6 py-2.5 text-sm font-medium text-white hover:bg-[#2E2466] transition-colors"
          >
            Unlock university rate
          </Link>
        </div>
      </Container>
    </header>
  )
}
