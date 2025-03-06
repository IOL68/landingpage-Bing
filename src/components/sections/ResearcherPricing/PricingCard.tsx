'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { Check } from 'lucide-react';
import TypeformModal from './TypeformModal';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  unit: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
}

const PricingCard = ({
  title,
  description,
  price,
  unit,
  features,
  popular = false,
  buttonText,
}: PricingCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${
      popular ? 'border-blue-500 shadow-lg scale-105 z-10' : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <CardContent className={`p-6 ${popular ? 'pt-8' : 'pt-6'}`}>
        <div className="text-center mb-6">
          <Typography variant="h3" className="mb-2">
            {title}
          </Typography>
          <Typography variant="small" className="text-gray-600">
            {description}
          </Typography>
        </div>
        
        <div className="text-center mb-6">
          <div className="flex items-center justify-center">
            <Typography variant="h2" className="font-bold">
              {price}
            </Typography>
            {price !== 'Custom' && (
              <Typography variant="large" className="text-gray-600 ml-1">
                {unit}
              </Typography>
            )}
          </div>
        </div>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${popular ? 'text-blue-500' : 'text-green-500'}`} />
              <Typography variant="small" className="text-gray-700">
                {feature}
              </Typography>
            </div>
          ))}
        </div>
        
        <div className="mt-auto">
          {buttonText === 'Contact Us' ? (
            <TypeformModal 
              buttonText={buttonText} 
              buttonClassName={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} 
              formUrl="https://form.typeform.com/to/example-contact-form"
            />
          ) : (
            <TypeformModal 
              buttonText={buttonText} 
              buttonClassName={`w-full ${popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`} 
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
