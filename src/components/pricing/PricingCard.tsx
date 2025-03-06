import React from 'react';
import { Card, CardContent, CardHeader, Button } from '../ui';
import { Check } from 'lucide-react';

export interface PricingFeature {
  text: string;
  highlighted?: boolean;
}

interface PricingCardProps {
  tier: string;
  title: string;
  description: string;
  price: string;
  priceUnit?: string;
  buttonText?: string;
  buttonClassName?: string;
  buttonComponent?: React.ReactNode;
  features: PricingFeature[];
  tagText?: string;
  tagClassName?: string;
  isDark?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tier,
  title,
  description,
  price,
  priceUnit,
  buttonText,
  buttonClassName,
  buttonComponent,
  features,
  tagText,
  tagClassName,
  isDark = false,
}) => {
  // Force dark background for Premium tier
  const forceDark = tier === 'Premium' ? true : isDark;
  return (
    <Card className={`border-gray-200 relative flex flex-col h-full ${forceDark ? 'bg-[#2D1B69] text-white' : 'bg-white'} transition-all duration-300 hover:shadow-xl`}>
      {tagText && (
        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${tagClassName}`}>
          {tagText}
        </div>
      )}
      <div className={`absolute top-4 left-4 ${forceDark ? 'bg-slate-700 text-gray-100' : 'bg-gray-100 text-gray-700'} text-xs font-semibold px-2 py-1 rounded`}>
        {tier}
      </div>
      <CardHeader className="pt-12 pb-4">
        <h3 className="text-xl font-bold mb-2">
          <span className={`${forceDark ? 'bg-gradient-to-r from-[#9b87f5] to-[#d6bcfa] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#9b87f5] to-[#d6bcfa] bg-clip-text text-transparent'}`}>
            {title}
          </span>
        </h3>
        <p className={`${forceDark ? 'opacity-80' : 'text-landmark-gray-text'} text-sm`}>
          {description}
        </p>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col h-full">
        <div className="mb-4">
          <span className={`${price === 'Custom' ? 'text-3xl' : 'text-5xl'} font-bold ${forceDark ? '' : 'text-landmark-blue-text'}`}>{price}</span>
          {priceUnit && <span className={`${forceDark ? 'opacity-80' : 'text-landmark-gray-text'} ml-2`}>{priceUnit}</span>}
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-2 mb-10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className={`h-5 w-5 flex-shrink-0 ${feature.highlighted ? 'text-yellow-500' : 'text-green-500'} mr-2 mt-0.5`} />
                <span className={feature.highlighted ? 'text-yellow-300' : forceDark ? 'opacity-80' : 'text-landmark-gray-text'}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          {buttonComponent ? (
            buttonComponent
          ) : (
            <Button 
              className={`w-full ${buttonClassName}`}
            >
              {buttonText}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
