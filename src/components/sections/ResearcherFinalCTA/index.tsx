'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import TypeformModal from './TypeformModal';

const benefits = [
  "Specialized Academic Transcription",
  "99%+ Accuracy Guarantee",
  "Fast Turnaround Options",
  "Research Software Integration",
  "IRB-Compliant Data Handling",
  "Academic Discount Program"
];

export const ResearcherFinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4 text-white">
            Ready to Transform Your Research Workflow?
          </Typography>
          <Typography variant="large" className="text-blue-100 max-w-3xl mx-auto">
            Join thousands of researchers who trust our specialized transcription services to accelerate their qualitative research.
          </Typography>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <Typography variant="h4" className="text-white">
                  Standard Research Package
                </Typography>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Transcription of interviews and focus groups
                  </Typography>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Speaker identification and timestamps
                  </Typography>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Standard 24-48 hour turnaround
                  </Typography>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Export in multiple formats
                  </Typography>
                </li>
              </ul>
              
              <div className="flex items-baseline mb-6">
                <Typography variant="h3" className="text-white">
                  $1.25
                </Typography>
                <Typography variant="large" className="text-blue-200 ml-1">
                  per audio minute
                </Typography>
              </div>
              
              <TypeformModal 
                buttonText="Get Started" 
                buttonClassName="w-full bg-white text-blue-600 hover:bg-blue-50"
              />
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <Typography variant="h4" className="text-white">
                  Institutional Package
                </Typography>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    All features of Standard Package
                  </Typography>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Volume discounts for departments
                  </Typography>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Dedicated account manager
                  </Typography>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 mt-0.5 flex-shrink-0" />
                  <Typography variant="large" className="text-blue-50">
                    Custom IRB compliance documentation
                  </Typography>
                </li>
              </ul>
              
              <div className="flex items-baseline mb-6">
                <Typography variant="h3" className="text-white">
                  Custom
                </Typography>
                <Typography variant="large" className="text-blue-200 ml-1">
                  pricing available
                </Typography>
              </div>
              
              <TypeformModal 
                buttonText="Request Quote" 
                buttonClassName="w-full bg-white text-blue-600 hover:bg-blue-50"
                formUrl="https://form.typeform.com/to/institutional-quote-form"
              />
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Typography variant="h3" className="text-white mb-4">
                  Join Thousands of Researchers
                </Typography>
                <Typography variant="large" className="text-blue-100 mb-6">
                  Our specialized academic transcription services are trusted by researchers at leading institutions worldwide.
                </Typography>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                      <Typography variant="small" className="text-blue-50">
                        {benefit}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <Typography variant="h4" className="mb-4">
                  Start Your Research Transcription
                </Typography>
                <Typography variant="large" className="text-gray-600 mb-6">
                  Fill out our quick form to get a custom quote for your research project.
                </Typography>
                
                <div className="space-y-4">
                  <TypeformModal 
                    buttonText="Get a Free Quote" 
                    buttonClassName="w-full"
                  />
                  
                  <div className="text-center">
                    <Typography variant="small" className="text-gray-500">
                      Or call us directly at
                    </Typography>
                    <Typography variant="large" className="text-gray-900 font-semibold">
                      (800) 555-1234
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResearcherFinalCTASection;
