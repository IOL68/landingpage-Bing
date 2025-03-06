'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { FileText, Mic, Video, Clock, Check, Users, BookOpen, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import TypeformModal from './TypeformModal';

const solutions = [
  {
    icon: <FileText className="h-10 w-10 text-blue-500" />,
    title: 'Interview Transcription',
    description: 'Convert research interviews into accurate text with speaker identification and timestamps.',
    features: [
      'Speaker identification',
      'Timestamps for easy reference',
      'Support for multiple accents',
      'Specialized terminology handling'
    ]
  },
  {
    icon: <Mic className="h-10 w-10 text-blue-500" />,
    title: 'Focus Group Transcription',
    description: 'Transcribe multi-participant discussions with clear speaker separation and contextual notes.',
    features: [
      'Multiple speaker tracking',
      'Contextual annotations',
      'Cross-talk handling',
      'Non-verbal cue notation'
    ]
  },
  {
    icon: <Video className="h-10 w-10 text-blue-500" />,
    title: 'Video Research Transcription',
    description: 'Full transcription of video-based research with visual context descriptions when needed.',
    features: [
      'Visual context descriptions',
      'Integration with video timestamps',
      'Participant action notation',
      'Environmental context inclusion'
    ]
  },
  {
    icon: <BookOpen className="h-10 w-10 text-blue-500" />,
    title: 'Academic Lectures & Presentations',
    description: 'Convert lectures, seminars, and academic presentations into searchable text documents.',
    features: [
      'Technical terminology accuracy',
      'Citation notation',
      'Q&A session formatting',
      'Integration with presentation slides'
    ]
  }
];

export const ResearchersSolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            Specialized Transcription Solutions for Academic Research
          </Typography>
          <Typography variant="large" className="text-gray-600 max-w-3xl mx-auto">
            Our transcription services are specifically designed to meet the unique needs of academic researchers, with specialized features for different research methodologies.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-blue-500 shadow-lg' 
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <CardContent className="p-6">
                <div className="mb-4">{solution.icon}</div>
                <Typography variant="h4" className="mb-2">
                  {solution.title}
                </Typography>
                <Typography variant="small" className="text-gray-600 mb-4">
                  {solution.description}
                </Typography>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <Typography variant="small" className="text-gray-700">
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Typography variant="h3" className="mb-4">
                Why Researchers Choose Our Transcription Services
              </Typography>
              <Typography variant="large" className="text-gray-700 mb-6">
                Our academic-focused transcription services deliver the accuracy and specialized features researchers need for qualitative data analysis.
              </Typography>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="font-semibold">
                      Fast Turnaround
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                      24-48 hour delivery for most projects
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <Check className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="font-semibold">
                      99%+ Accuracy
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                      Verified by independent testing
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="font-semibold">
                      Subject Matter Experts
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                      Specialized in academic terminology
                    </Typography>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
                    <FileText className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="font-semibold">
                      Multiple Format Options
                    </Typography>
                    <Typography variant="small" className="text-gray-600">
                      Compatible with NVivo, ATLAS.ti, etc.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-white rounded-xl p-8 shadow-md">
              <Typography variant="h4" className="text-center mb-6">
                Ready to get started with your research transcription?
              </Typography>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <TypeformModal buttonText="Get a Quote" buttonClassName="w-full" />
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResearchersSolutionsSection;
