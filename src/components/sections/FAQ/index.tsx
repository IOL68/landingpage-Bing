'use client';

import { Container } from '@/components/ui/Container';
import { Typography } from '@/components/ui/Typography';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const faqs = [
  {
    question: "How accurate are our transcripts?",
    answer: "Our transcripts are 99%+ accurate. Landmark works with transcriptionists who specialize in transcription for research and each of them has a number of years of experience working on research projects."
  },
  {
    question: "What's our turnaround time?",
    answer: "Our transcription services are designed to deliver prompt and efficient results, with a standard turnaround time of 3 to 5 business days."
  },
  {
    question: "Do you handle sensitive research data?",
    answer: "We follow HIPAA guidelines and transmit and store all our data via encryption."
  },
  {
    question: "What file formats do you accept?",
    answer: "We accept all nearly any media formats including MP3, WAV, M4A, and more. Files can be uploaded directly through our secure platform."
  },
  {
    question: "How do you handle technical terminology?",
    answer: "Our expert reviewers are trained in academic and technical terminology across various fields. We ensure accurate transcription of field-specific terms."
  },
  {
    question: "How can I track speakers, and, do you add timestamps?",
    answer: "Yes, we offer speaker tracking and timestamping as part of our transcription service. Each speaker is clearly labeled to ensure clarity and readability. Additionally, timestamps are added making it easy to locate specific parts of the conversation. If you have specific preferences for speaker identification or timestamp placement, let us know, and we'll customize it to your needs. Learn more in our <a href='https://docs.thelai.com/' target='_blank' rel='noopener noreferrer' class='text-[#312b94] hover:text-[#1a1150] transition-colors duration-300'>Help Center</a>."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    faqRefs.current.forEach((faq) => {
      if (faq) observer.observe(faq);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-br from-[#1a1150]/[0.02] via-[#312b94]/[0.02] to-[#1a1150]/[0.02]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <Container className="relative">
        <div 
          ref={titleRef}
          className="text-center mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 mx-auto"
        >
          <Typography 
            variant="h2" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-center mx-auto"
          >
            <span className="text-[#1a1150] text-center">
              Frequently Asked
              {' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1a1150] via-[#312b94] to-[#1a1150]">
                Questions
              </span>
            </span>
          </Typography>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => faqRefs.current[index] = el}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#1a1150]">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#1a1150] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-[#4a5568] text-base"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
