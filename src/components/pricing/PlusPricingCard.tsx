import React from 'react';
import PricingCard, { PricingFeature } from './PricingCard';
import TypeformModal from '@/components/TypeformModal';

const PlusPricingCard: React.FC = () => {
  const features: PricingFeature[] = [
    { text: 'Group interviews' },
    { text: 'Focus groups' },
    { text: 'Time stamps' },
    { text: 'Verbatim Capture' },
    { text: 'Available rush turnaround*', highlighted: false },
    { text: 'Guard Duty' },
    { text: 'SSL Data Encryption' },
  ];

  return (
    <PricingCard
      tier="Plus"
      title="Plus - English Only"
      description="For projects with groups with over three speakers."
      price="$2.69"
      priceUnit="/per audio minute"
      buttonComponent={
        <TypeformModal 
          buttonText="Get a Volume Quote"
          buttonClassName="bg-[#2D1B69] text-white hover:bg-[#3C2A78] w-full"
        />
      }
      features={features}
      tagText="Most popular"
      tagClassName="bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full"
    />
  );
};

export default PlusPricingCard;
