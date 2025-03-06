'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { useState } from 'react';
import PricingCard from './PricingCard';
import { Check } from 'lucide-react';

const pricingOptions = [
  {
    title: 'Standard',
    description: 'Perfect for small research projects with clear audio',
    price: '$1.25',
    unit: 'per minute',
    features: [
      'Standard 24-hour turnaround',
      'Speaker identification',
      'Basic timestamps',
      'Standard formatting options',
      'Email support'
    ],
    popular: false,
    buttonText: 'Get Started'
  },
  {
    title: 'Academic Pro',
    description: 'Ideal for most academic research projects',
    price: '$1.75',
    unit: 'per minute',
    features: [
      'Expedited 12-hour turnaround',
      'Enhanced speaker identification',
      'Detailed timestamps',
      'Multiple export formats',
      'Technical terminology support',
      'Priority email & chat support'
    ],
    popular: true,
    buttonText: 'Get Started'
  },
  {
    title: 'Research Enterprise',
    description: 'For large-scale research projects with complex needs',
    price: 'Custom',
    unit: 'pricing',
    features: [
      'Custom turnaround options',
      'Advanced speaker identification',
      'Comprehensive timestamps',
      'All export formats',
      'Specialized terminology glossary',
      'Dedicated account manager',
      'Integration with research tools',
      'Volume discounts available'
    ],
    popular: false,
    buttonText: 'Contact Us'
  }
];

export const ResearcherPricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'minute' | 'hour'>('minute');

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'minute' ? 'hour' : 'minute');
  };

  const getAdjustedPrice = (price: string, plan: number) => {
    if (price === 'Custom') return 'Custom';
    const numericPrice = parseFloat(price.replace('$', ''));
    if (billingPeriod === 'hour') {
      return `$${(numericPrice * 60).toFixed(2)}`;
    }
    return price;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Research-Focused Pricing Plans
          </Typography>
          <Typography variant="large" className="text-gray-600 max-w-3xl mx-auto">
            Transparent pricing designed specifically for academic research budgets, with options for every project size.
          </Typography>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-3 text-sm font-medium ${billingPeriod === 'minute' ? 'text-blue-600' : 'text-gray-500'}`}>
              Per Minute
            </span>
            <button
              type="button"
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                billingPeriod === 'hour' ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={toggleBillingPeriod}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingPeriod === 'hour' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 text-sm font-medium ${billingPeriod === 'hour' ? 'text-blue-600' : 'text-gray-500'}`}>
              Per Hour
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <PricingCard
              key={index}
              title={option.title}
              description={option.description}
              price={getAdjustedPrice(option.price, index)}
              unit={billingPeriod === 'minute' ? option.unit : 'per hour'}
              features={option.features}
              popular={option.popular}
              buttonText={option.buttonText}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
          <Typography variant="h3" className="mb-6 text-center">
            All Plans Include
          </Typography>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
              <div>
                <Typography variant="large" className="font-semibold">
                  99%+ Accuracy Guarantee
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  Or we'll fix it for free
                </Typography>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
              <div>
                <Typography variant="large" className="font-semibold">
                  Secure File Handling
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  GDPR & HIPAA compliant
                </Typography>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
              <div>
                <Typography variant="large" className="font-semibold">
                  Research Tool Integration
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  NVivo, ATLAS.ti compatible
                </Typography>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
              <div>
                <Typography variant="large" className="font-semibold">
                  Academic Discount
                </Typography>
                <Typography variant="small" className="text-gray-600">
                  For verified institutions
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResearcherPricingSection;
