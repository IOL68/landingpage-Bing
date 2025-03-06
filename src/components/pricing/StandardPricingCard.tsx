import React from 'react';
import PricingCard, { PricingFeature } from './PricingCard';
import TypeformModal from '@/components/TypeformModal';

const StandardPricingCard: React.FC = () => {
  const features: PricingFeature[] = [
    { text: 'Registered Vendor' },
    { text: '99% Accuracy or more' },
    { text: 'Speaker Tracking' },
    { text: 'Standard Capture' },
    { text: 'Standard Turnaround Time (3-5 business days)' },
    { text: 'Enterprise-grade security' },
    { text: 'HIPAA Trained Staff' },
  ];

  return (
    <PricingCard
      tier="Standard"
      title="Standard - English Only"
      description="For projects with one-on-one interviews or with single speakers."
      price="$1.99"
      priceUnit="/per audio minute"
      buttonComponent={
        <TypeformModal
          buttonText="Request Your Academic Rate"
          buttonClassName="bg-[#2D1B69] text-white hover:bg-[#3C2A78] w-full"
        />
      }
      features={features}
    />
  );
};

export default StandardPricingCard;
