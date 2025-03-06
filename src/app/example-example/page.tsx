'use client'

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, Play, CheckCircle, Award, Users, BookOpen, User, Lock, GraduationCap, Clock, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import CountUp from '@/components/CountUp';
import TypeformModal from '@/components/TypeformModal';
import StandardPricingCard from '@/components/pricing/StandardPricingCard';
import PlusPricingCard from '@/components/pricing/PlusPricingCard';
import PremiumPricingCard from '@/components/pricing/PremiumPricingCard';

// Section 1: Hero Section
const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const transcriptionLines = [
    "Researcher: How did the implementation of the new methodology affect your workflow?",
    "Participant: Initially it was challenging to adapt, but after the first week...",
    "Participant: ...we noticed a significant improvement in our productivity metrics.",
    "Researcher: Can you elaborate on the specific improvements you observed?",
    "Participant: Yes, our task completion rate increased by roughly 30 percent...",
  ];
  
  useEffect(() => {
    if (!isTyping) return;
    
    const currentLine = transcriptionLines[currentLineIndex];
    if (typedText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentLine.substring(0, typedText.length + 1));
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (currentLineIndex < transcriptionLines.length - 1) {
          setCurrentLineIndex(prev => prev + 1);
          setTypedText('');
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentLineIndex(0);
            setTypedText('');
            setIsTyping(true);
          }, 2000);
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentLineIndex, isTyping]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#1e0453] to-[#2D1B69] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Academic Transcription
              <span className="block bg-gradient-to-r from-[#b8c6ff] to-[#8eabf4] bg-clip-text text-transparent">
                for Qualitative Research
              </span>
            </h1>
            
            <p className="text-lg opacity-90 text-blue-100 font-medium">
              Streamline your workflow with secure, ready-to-analyze transcripts tailored for qualitative research.
            </p>
            
            <p className="text-xl opacity-80 font-semibold">
              Trusted by 500+ Universities Since 1999 | US-Based. No AI.
            </p>
            
            <div className="pt-6">
              <TypeformModal 
                buttonText="Request a Quote"
                buttonClassName="!bg-white !text-[#2D1B69] hover:!bg-white hover:!text-[#0047AB] hover:shadow-lg group flex items-center gap-2 transition-all duration-300 border-2 border-white font-semibold"
              />
            </div>
            
            <div className="mt-10 bg-purple-900/40 p-6 rounded-lg border border-purple-700 hover:shadow-lg transition-all duration-300">
              <Quote className="h-10 w-10 text-blue-300 mb-4" />
              <p className="italic text-lg">
                Our experience with Landmark was wonderful. Everything delivered exceeded our expectations.
              </p>
              <p className="mt-2 font-medium">- Arizona State University</p>
            </div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute inset-0 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
              </div>
              <div className="rounded-xl shadow-2xl overflow-hidden border border-slate-700 hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300">
              <div className="bg-slate-800 p-3 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 bg-slate-700 h-6 w-4/12 rounded-full"></div>
                <div className="ml-auto flex items-center">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="bg-slate-900 p-6 min-h-[400px]">
                {transcriptionLines.map((line, index) => (
                  <div key={index} className={`mb-4 ${index > currentLineIndex ? 'opacity-0' : index < currentLineIndex ? 'opacity-70' : 'opacity-100'}`}>
                    {index === currentLineIndex ? (
                      <p className={`text-sm md:text-base ${line.startsWith('Researcher') ? 'text-blue-300' : 'text-white'}`}>
                        <span className="font-medium">{line.split(':')[0]}:</span>
                        <span>{line.includes(':') ? typedText.substring(line.indexOf(':') + 1) : typedText}</span>
                        {isTyping && index === currentLineIndex && <span className="ml-1 inline-block w-2 h-4 bg-blue-400 animate-pulse"></span>}
                      </p>
                    ) : (
                      <p className={`text-sm md:text-base ${line.startsWith('Researcher') ? 'text-blue-300' : 'text-white'}`}>
                        <span className="font-medium">{line.split(':')[0]}:</span>
                        <span>{line.includes(':') ? line.substring(line.indexOf(':') + 1) : line}</span>
                      </p>
                    )}
                  </div>
                ))}
                
                <div className="mt-12">
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>00:{(currentLineIndex * 12 + typedText.length / 8).toFixed(2)}</span>
                    <span>03:45</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
                      style={{ width: `${(currentLineIndex * 20 + typedText.length / transcriptionLines[currentLineIndex]?.length * 20) || 0}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-end justify-center space-x-1 h-16">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = isTyping ? 
                      Math.max(3, Math.min(Math.floor(Math.random() * 60), 60)) : 
                      i % 2 === 0 ? 4 : 8;
                      
                    return (
                      <div 
                        key={i}
                        className={`w-1 bg-gradient-to-t from-blue-500 to-purple-400 rounded-t transition-all duration-300`} 
                        style={{ 
                          height: `${height}px`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Features Section
// Componente de contador personalizado para 10,000+
const ProjectsCounter = () => {
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  const countRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const duration = 2500; // 2.5 segundos
    const increment = 10000 / (duration / 50); // Incremento por cada 50ms
    let current = 0;
    
    const updateCount = () => {
      current += increment;
      if (current >= 10000) {
        setCount(10000);
        setShowPlus(true);
        if (countRef.current) clearInterval(countRef.current);
      } else {
        setCount(Math.floor(current));
      }
    };
    
    countRef.current = setInterval(updateCount, 50);
    
    return () => {
      if (countRef.current) clearInterval(countRef.current);
    };
  }, []);
  
  return (
    <span>{count.toLocaleString()}{showPlus ? '+' : ''}</span>
  );
};

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCountVisible, setIsCountVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Configurar Intersection Observer para los contadores
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCountVisible(true);
          observer.disconnect(); // Desconectar después de activar
        }
      },
      { threshold: 0.1 } // Activar cuando al menos 10% del elemento sea visible
    );
    
    // Observar el contenedor de los contadores
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-landmark-blue-text mb-4">
            Trusted by Academic Researchers
          </h2>
          <p className="text-landmark-gray-text text-lg md:text-xl max-w-4xl mx-auto">
            Over 25 years of premium transcription for universities and research institutions—99.9% accuracy, zero AI.{' '}
            <a 
              href="https://form.typeform.com/to/iYAyVlU8?utm_content=LandingG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-landmark-violet hover:underline font-medium cursor-pointer"
            >
              Request a special quote for universities
            </a>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={countRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-blue-50 p-3">
                    <BookOpen className="h-8 w-8 text-landmark-violet" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-landmark-blue-text mb-2">
                  {isCountVisible ? <ProjectsCounter /> : "0"}
                </h3>
                <p className="font-medium text-lg text-landmark-blue-text">Projects Completed</p>
                <p className="text-sm text-landmark-gray-text mt-2">
                  Thousands of hours of qualitative interviews, focus groups, and academic data transcribed.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-green-50 p-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-landmark-blue-text mb-2">
                  <CountUp end={99.9} start={0} duration={2.5} />%
                </h3>
                <p className="font-medium text-lg text-landmark-blue-text">Accuracy Rate</p>
                <p className="text-sm text-landmark-gray-text mt-2">
                  Human‐verified transcriptions backed by rigorous quality checks.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-purple-50 p-3">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-landmark-blue-text mb-2">
                  <CountUp end={500} suffix="+" start={0} duration={2.5} />
                </h3>
                <p className="font-medium text-lg text-landmark-blue-text">Universities Served</p>
                <p className="text-sm text-landmark-gray-text mt-2">
                  Trusted by top academic and research organizations nationwide.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Card className="border-0 shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-amber-50 p-3">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-landmark-blue-text mb-2">
                  <CountUp end={25} suffix="+" start={0} duration={2.5} />
                </h3>
                <p className="font-medium text-lg text-landmark-blue-text">Years of Expertise</p>
                <p className="text-sm text-landmark-gray-text mt-2">
                  A legacy of reliability and premium service in qualitative research support.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 3: About Section
const AboutSection = () => {
  const featureItems = [
    {
      icon: <User className="h-6 w-6 text-blue-200" />,
      title: "Personalized Guidance & US-Based Experts",
      description: "Get meticulously human‐verified transcripts—no AI. Our US‐based team ensures every detail meets academic standards."
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-200" />,
      title: "True Confidentiality",
      description: "From NDAs to secure data channels, we protect every transcript. Your sensitive interviews stay private and compliant."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-200" />,
      title: "Academic Expertise",
      description: "Rely on professionals fluent in research jargon. We deliver context‐aware, publication‐ready transcripts for any discipline."
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-200" />,
      title: "Long‐Term Support",
      description: "Need revisions, rush jobs, or expanded projects? We're here to assist through every stage of your research lifecycle."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-200" />,
      title: "Seamless Team Collaboration",
      description: "Oversee progress in real time and share feedback instantly. Keep your entire team aligned without the usual hassle."
    },
    {
      icon: <Building2 className="h-6 w-6 text-blue-200" />,
      title: "Approved Vendor Status",
      description: "Trusted by top universities nationwide. Simplify procurement steps and launch your project faster than ever."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-typeforms to-purple-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Than a Transcript—A Dedicated Research Partner
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Landmark Associates streamlines your entire transcription process—so you can focus on research, not logistics.
          </p>
        </div>
        
        {/* Image with reduced size */}
        <div className="mb-12 flex justify-center">
          <img 
            src="https://thelai.com/_next/image?url=https%3A%2F%2Flandmarkmktemailimages.s3.amazonaws.com%2Fplatform-new-dashboard.png&w=1200&q=75" 
            alt="Landmark Platform Interface" 
            className="w-4/5 md:w-4/5 lg:w-3/4 h-auto rounded-xl shadow-lg"
          />
        </div>
        
        {/* Key Partnership Benefits Title */}
        <h3 className="text-2xl font-semibold mb-8 text-center">Key Partnership Benefits</h3>
        
        {/* All features in a grid below the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature, index) => (
            <Card 
              key={index} 
              style={{backgroundColor: '#2D1B69', color: 'white'}}
              className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="p-6 flex flex-col gap-3">
                <div className="shrink-0 mb-2">
                  {feature.icon}
                </div>
                <h4 className="font-medium text-blue-200 text-lg">{feature.title}</h4>
                <p className="text-white">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Statistics Section
const StatisticsSection = () => {
  // Testimonials data
  const testimonials = [
    {
      quote: "The experience was great! The transcription upload process was easy, and I found the reminders for the invoices helpful. Flexibility with the timing of the invoice payments was also very appreciated.",
      source: "Landmark Customer Email",
      label: "Verified Researcher"
    },
    {
      quote: "Thanks so much to Landmark for the wonderful transcriptions-my colleague and I are very pleased with them! Your work has greatly assisted us in moving forward with data analysis and completion of our research project.",
      source: "Landmark Customer Email",
      label: "Verified Researcher"
    },
    {
      quote: "Thank you for everything you all have done. You have been so easy to work with and have delivered exceptional transcripts!",
      source: "Landmark Customer Survey",
      label: "Verified Researcher"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-landmark-violet text-lg font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            We have worked with thousands of elite researchers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First testimonial (smaller, on the left) */}
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">&quot;{testimonials[0].quote}&quot;</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center overflow-hidden mr-3 text-white">
                  <span>L</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[0].source}</p>
                  <p className="text-sm text-gray-500">{testimonials[0].label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Second testimonial (larger, in the middle) */}
          <Card className="bg-white rounded-xl shadow-sm md:transform md:scale-110 md:z-10 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 md:p-10">
              <p className="text-gray-700 mb-6 text-lg md:text-xl">&quot;{testimonials[1].quote}&quot;</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center overflow-hidden mr-3 text-white">
                  <span>L</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[1].source}</p>
                  <p className="text-sm text-gray-500">{testimonials[1].label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Third testimonial (smaller, on the right) */}
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">&quot;{testimonials[2].quote}&quot;</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden mr-3 text-white">
                  <span>L</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[2].source}</p>
                  <p className="text-sm text-gray-500">{testimonials[2].label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Section 5: Testimonials Section
const TestimonialsSection = () => {
  return (
    <section id="cta" className="py-20 bg-[#2e1a5a] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#d6bcfa] bg-clip-text text-transparent">Got 10+ Hours to Transcribe?</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Trusted by top universities, Landmark delivers high-volume academic projects with 99% human accuracy. 
            Contact the team today for a custom quote and stay on schedule with your research.
          </p>
          
          <div className="flex justify-center">
            <TypeformModal 
              buttonText="Get My Custom Quote"
              buttonClassName="!bg-white !text-[#2D1B69] hover:!bg-white hover:!text-[#0047AB] hover:shadow-lg group flex items-center gap-2 transition-all duration-300 border-2 border-white font-semibold px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 6: Pricing Section
// Usando CardHeader que ya está importado arriba
import { Check } from 'lucide-react';

const PricingSection = () => {
  // Features for Premium card
  const premiumFeatures = [
    { text: 'Over 25 languages' },
    { text: 'We specialize in Spanish transcription and translation', highlighted: true },
    { text: 'Professional transcribers and translators' },
    { text: 'Understanding of dialects' },
    { text: 'Translation certificate' },
    { text: 'Global expertise' },
    { text: 'Certified translations' },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-landmark-blue-text">
            Simple, <span className="bg-gradient-to-r from-[#9b87f5] to-[#d6bcfa] bg-clip-text text-transparent font-extrabold">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-landmark-gray-text max-w-3xl mx-auto">
            Choose the plan that best fits your research needs. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <StandardPricingCard />
          <PlusPricingCard />
          {/* Custom Premium card with forced purple background */}
          <Card style={{backgroundColor: '#2D1B69', color: 'white'}} className="border-gray-200 relative flex flex-col h-full transition-all duration-300 hover:shadow-xl">
            <div className="absolute top-4 left-4 bg-slate-700 text-gray-100 text-xs font-semibold px-2 py-1 rounded">
              Premium
            </div>
            <CardHeader className="pt-12 pb-4">
              <h3 className="text-xl font-bold mb-2">
                <span className="bg-gradient-to-r from-[#9b87f5] to-[#d6bcfa] bg-clip-text text-transparent">
                  Premium - All languages
                </span>
              </h3>
              <p className="opacity-80 text-sm">
                Managing multi-language projects or complex data capture.
              </p>
            </CardHeader>
            <CardContent className="pt-0 flex flex-col h-full">
              <div className="mb-4">
                <span className="text-3xl font-bold">Custom</span>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-2 mb-10">
                  {premiumFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className={`h-5 w-5 flex-shrink-0 ${feature.highlighted ? 'text-yellow-500' : 'text-green-500'} mr-2 mt-0.5`} />
                      <span className={feature.highlighted ? 'text-yellow-300' : 'opacity-80'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <TypeformModal
                  buttonText="Available Languages"
                  buttonClassName="bg-[#2D1B69] text-white hover:bg-[#3C2A78] w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Section 7: FAQ Section
import FAQ from '@/components/FAQ';

const FAQSection = () => {
  return <FAQ />;
};

// Section 8: Call to Action Section
const CTASection = () => {
  return (
    <section id="cta" className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Research?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join hundreds of universities choosing Landmark for precise, reliable transcripts.
          </p>
          <TypeformModal buttonText="Request a Quote" />
        </div>
      </div>
    </section>
  );
};

export default function ExamplePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatisticsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      {/* The Footer component is already included in the layout.tsx */}
    </main>
  );
}
