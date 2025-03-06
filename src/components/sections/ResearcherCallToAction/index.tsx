'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import TypeformModal from './TypeformModal';

const benefits = [
  "Specialized academic terminology support",
  "Integration with qualitative analysis software",
  "IRB-compliant data handling",
  "Dedicated research support team",
  "Volume discounts for large projects",
  "Expedited options for tight deadlines"
];

export const ResearcherCallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg">
              <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <Typography variant="h4">Research Transcription</Typography>
                    <Typography variant="small" className="text-gray-600">Specialized for academic needs</Typography>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <Typography variant="large" className="font-medium">Accurate Technical Terminology</Typography>
                      <Typography variant="small" className="text-gray-600">Our transcriptionists are trained in academic terminology across disciplines</Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <Typography variant="large" className="font-medium">Research Software Compatible</Typography>
                      <Typography variant="small" className="text-gray-600">Export formats compatible with NVivo, ATLAS.ti, and other CAQDAS tools</Typography>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <Typography variant="large" className="font-medium">IRB and Ethics Compliance</Typography>
                      <Typography variant="small" className="text-gray-600">Secure handling of sensitive research data with confidentiality agreements</Typography>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden relative">
                        <Image 
                          src="/images/researcher-avatar.jpg" 
                          alt="Dr. Emily Chen"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <Typography variant="large" className="font-medium">Dr. Emily Chen</Typography>
                      <Typography variant="small" className="text-gray-600">Research Professor, UC Berkeley</Typography>
                      <Typography variant="small" className="italic mt-1">
                        "The transcription quality has been exceptional for our longitudinal study. The accuracy with technical terms saved us countless hours of editing."
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Typography variant="h2" className="mb-4">
              Accelerate Your Research with Professional Transcription
            </Typography>
            
            <Typography variant="large" className="text-gray-600 mb-6">
              Our specialized academic transcription services help researchers focus on analysis instead of transcribing, with features designed specifically for research workflows.
            </Typography>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <Typography variant="large">
                    {benefit}
                  </Typography>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Typography variant="h4">
                  Academic Discount Available
                </Typography>
              </div>
              <Typography variant="large" className="text-gray-700 mb-2">
                We offer special pricing for academic institutions and research projects. Contact us with your institutional email to qualify.
              </Typography>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <TypeformModal buttonText="Request Academic Quote" />
              <TypeformModal 
                buttonText="Schedule a Demo" 
                buttonClassName="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300"
                formUrl="https://form.typeform.com/to/demo-request-form"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResearcherCallToActionSection;
