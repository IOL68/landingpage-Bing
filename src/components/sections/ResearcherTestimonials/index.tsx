'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Container } from '@/components/ui/container';
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "The transcription quality has been exceptional for our longitudinal study. The accuracy with technical medical terminology saved us countless hours of editing and allowed us to focus on analysis rather than transcription correction.",
    name: "Dr. Sarah Johnson",
    role: "Professor at a California State University / Verified Researcher",
    image: "/images/testimonial-1.jpg",
    institution: "Department of Public Health"
  },
  {
    quote: "We needed transcription for over 200 hours of interviews with medical professionals. The team handled our specialized terminology perfectly and delivered within our tight deadline. The integration with our NVivo workflow was seamless.",
    name: "Dr. Michael Chen",
    role: "Researcher at University of Arkansas for Medical Sciences / Verified Researcher",
    image: "/images/testimonial-2.jpg",
    institution: "Clinical Research Division"
  },
  {
    quote: "As a qualitative researcher, accurate transcription is the foundation of my analysis. The service provided exceptional quality with proper notation of non-verbal cues and environmental context that was critical for my ethnographic study.",
    name: "Dr. Rebecca Martinez",
    role: "Landmark's Customer Satisfaction Survey / Verified Researcher",
    image: "/images/testimonial-3.jpg",
    institution: "Department of Anthropology"
  },
  {
    quote: "The academic discount made it possible to transcribe our entire dataset within our grant budget. The accuracy was outstanding, especially with the technical linguistics terminology that is often transcribed incorrectly by other services.",
    name: "Prof. James Wilson",
    role: "Linguistics Department Chair / Verified Researcher",
    image: "/images/testimonial-4.jpg",
    institution: "University of Washington"
  },
  {
    quote: "For our multi-year psychology study, we needed consistent, reliable transcription with precise timestamps. The service delivered exactly what we needed, and their handling of sensitive participant data met all our IRB requirements.",
    name: "Dr. Emily Rodriguez",
    role: "Principal Investigator / Verified Researcher",
    image: "/images/testimonial-5.jpg",
    institution: "Psychological Research Institute"
  },
  {
    quote: "The ability to get transcripts in formats compatible with ATLAS.ti saved us significant time in our workflow. The accuracy with multiple speakers in our focus groups was impressive, even with overlapping speech.",
    name: "Dr. Thomas Lee",
    role: "Associate Professor / Verified Researcher",
    image: "/images/testimonial-6.jpg",
    institution: "Department of Sociology"
  }
];

export const ResearcherTestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoplay(false);
  };

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Trusted by Leading Researchers
          </Typography>
          <Typography variant="large" className="text-gray-600 max-w-3xl mx-auto">
            See what academic researchers and institutions say about our specialized transcription services.
          </Typography>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="h-full">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 h-full">
                        <div className="md:w-1/3 flex flex-col items-center text-center">
                          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                            <Image 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              fill
                              style={{ objectFit: 'cover' }}
                              className="rounded-full"
                            />
                          </div>
                          <Typography variant="h4" className="mb-1">
                            {testimonial.name}
                          </Typography>
                          <Typography variant="small" className="text-gray-600 mb-2">
                            {testimonial.role}
                          </Typography>
                          <Typography variant="small" className="text-blue-600 font-medium">
                            {testimonial.institution}
                          </Typography>
                        </div>
                        
                        <div className="md:w-2/3 flex flex-col justify-center">
                          <Quote className="h-10 w-10 text-blue-300 mb-4" />
                          <Typography variant="large" className="italic text-gray-700 mb-6">
                            "{testimonial.quote}"
                          </Typography>
                          <div className="flex items-center">
                            <div className="flex items-center mr-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                              ))}
                            </div>
                            <Typography variant="small" className="text-gray-600">
                              Verified Review
                            </Typography>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-blue-400'
                }`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Typography variant="h3" className="text-blue-600 mb-2">
              500+
            </Typography>
            <Typography variant="large" className="text-gray-700">
              Academic Researchers
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" className="text-blue-600 mb-2">
              50+
            </Typography>
            <Typography variant="large" className="text-gray-700">
              Universities
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" className="text-blue-600 mb-2">
              10,000+
            </Typography>
            <Typography variant="large" className="text-gray-700">
              Research Hours Transcribed
            </Typography>
          </div>
          
          <div>
            <Typography variant="h3" className="text-blue-600 mb-2">
              99.8%
            </Typography>
            <Typography variant="large" className="text-gray-700">
              Accuracy Rate
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResearcherTestimonialsSection;
