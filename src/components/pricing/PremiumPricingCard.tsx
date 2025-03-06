import React from 'react';
import PricingCard, { PricingFeature } from './PricingCard';
import TypeformModal from '@/components/TypeformModal';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PremiumPricingCard: React.FC = () => {
  const features: PricingFeature[] = [
    { text: 'Over 25 languages' },
    { text: 'We specialize in Spanish transcription and translation', highlighted: true },
    { text: 'Professional transcribers and translators' },
    { text: 'Understanding of dialects' },
    { text: 'Translation certificate' },
    { text: 'Global expertise' },
    { text: 'Certified translations' },
  ];

  return (
    <Card className="border-gray-200 relative flex flex-col h-full bg-[#2D1B69] text-white transition-all duration-300 hover:shadow-xl">
      <div className="absolute top-4 left-4 bg-slate-700 text-gray-100 text-xs font-semibold px-2 py-1 rounded">
        Premium
      </div>
      <CardHeader className="pt-12 pb-4">
        <h3 className="text-xl font-bold mb-2">
          <span className="bg-gradient-to-r from-[#9b87f5] to-[#d6bcfa] bg-clip-text text-transparent">
            Premium - All languages
          </span>
        </h3>
        <p className="opacity-80 text-sm">
          Managing multi-language projects or complex data capture.
        </p>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col h-full">
        <div className="mb-4">
          <span className="text-3xl font-bold">Custom</span>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-2 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className={`h-5 w-5 flex-shrink-0 ${feature.highlighted ? 'text-yellow-500' : 'text-green-500'} mr-2 mt-0.5`} />
                <span className={feature.highlighted ? 'text-yellow-300' : 'opacity-80'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <TypeformModal
            buttonText="Available Languages"
            buttonClassName="bg-[#2D1B69] text-white hover:bg-[#3C2A78] w-full"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PremiumPricingCard;
