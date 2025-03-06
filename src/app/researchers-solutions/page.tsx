import { SecondaryHero } from '@/components/sections/SecondaryHero';
import { ResearchersSolutionsSection } from '@/components/sections/ResearchersSolutions';
import { TestimonialsSection } from '@/components/sections/Testimonials';
import { ResearcherPricingSection } from '@/components/sections/ResearcherPricing';
import { ResearcherCallToActionSection } from '@/components/sections/ResearcherCallToAction';
import { ResearcherTestimonialsSection } from '@/components/sections/ResearcherTestimonials';
import { ResearcherFAQSection } from '@/components/sections/ResearcherFAQ';
import { ResearcherFinalCTASection } from '@/components/sections/ResearcherFinalCTA';

export default function ResearchersSolutions() {
  return (
    <main className="min-h-screen">
      <SecondaryHero />
      <ResearchersSolutionsSection />
      <TestimonialsSection />
      <ResearcherPricingSection />
      <ResearcherCallToActionSection />
      <ResearcherTestimonialsSection />
      <ResearcherFAQSection />
      <ResearcherFinalCTASection />
    </main>
  );
}
