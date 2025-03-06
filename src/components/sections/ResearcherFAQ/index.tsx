'use client';

import { Container } from '@/components/ui/container';
import { Typography } from '@/components/ui/typography';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do you handle specialized academic terminology?",
    answer: "Our transcriptionists are trained in various academic disciplines and have access to specialized glossaries. For each project, we can work with your specific terminology list to ensure accuracy. We also have subject matter experts who review transcripts in specialized fields like medicine, law, and technical disciplines."
  },
  {
    question: "What file formats do you support for transcription?",
    answer: "We accept most audio and video formats including MP3, WAV, MP4, MOV, WMA, AVI, and many others. If you have a specific format not listed here, please contact us and we'll let you know if we can accommodate it."
  },
  {
    question: "How do you ensure confidentiality for research data?",
    answer: "We take data security and confidentiality seriously. All our transcriptionists sign NDAs, we use secure file transfer protocols, and our systems are GDPR compliant. We can also accommodate specific IRB requirements and provide documentation for your ethics committee if needed."
  },
  {
    question: "Can you integrate with qualitative analysis software?",
    answer: "Yes, we provide transcripts in formats compatible with popular qualitative analysis software including NVivo, ATLAS.ti, MAXQDA, and Dedoose. We can include timestamps, speaker identification, and other formatting that makes importing into these platforms seamless."
  },
  {
    question: "What is your turnaround time for academic transcription?",
    answer: "Our standard turnaround time is 24-48 hours for most projects. We also offer expedited services for time-sensitive research with options for same-day or overnight delivery. Turnaround times may vary based on audio quality, number of speakers, and total duration."
  },
  {
    question: "Do you offer academic or institutional discounts?",
    answer: "Yes, we offer special pricing for academic institutions, researchers, and students. Contact us with your institutional email to learn about our academic discount program. We also offer volume discounts for large research projects."
  },
  {
    question: "How do you handle poor audio quality in field recordings?",
    answer: "Our transcriptionists are trained to work with challenging audio, including field recordings with background noise or multiple speakers. We use specialized audio enhancement tools when necessary. For particularly difficult sections, we'll note [inaudible] and the timestamp so you can review those portions."
  },
  {
    question: "Can you transcribe focus groups or multi-person interviews?",
    answer: "Yes, we specialize in multi-speaker transcription. We can identify different speakers (either by name if provided or as Speaker 1, Speaker 2, etc.), handle overlapping speech, and note non-verbal cues when relevant to the research context."
  }
];

export const ResearcherFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Frequently Asked Questions
          </Typography>
          <Typography variant="large" className="text-gray-600 max-w-3xl mx-auto">
            Common questions about our research transcription services
          </Typography>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-lg transition-all duration-200 ${
                  openIndex === index ? 'border-blue-500 shadow-md' : 'border-gray-200'
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <Typography variant="h4" className="font-medium">
                    {faq.question}
                  </Typography>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 pt-0 border-t border-gray-100">
                    <Typography variant="large" className="text-gray-700">
                      {faq.answer}
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-gray-50 p-6 rounded-lg">
            <Typography variant="h4" className="mb-4">
              Still have questions?
            </Typography>
            <Typography variant="large" className="text-gray-600 mb-6">
              Contact our research support team for personalized assistance with your academic transcription needs.
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:research@example.com" 
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Email Us
              </a>
              <a 
                href="tel:+18005551234" 
                className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Call (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ResearcherFAQSection;
