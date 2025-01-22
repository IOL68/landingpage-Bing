import { HeroSection } from '@/components/sections/Hero';
import { BenefitsSection } from '@/components/sections/Benefits';
import { HowItWorksSection } from '@/components/sections/HowItWorks';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { FAQSection } from '@/components/sections/FAQ';
import { FinalCTASection } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}