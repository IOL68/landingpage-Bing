'use client'

import { Button } from '@/components/ui/Button';
import { Typography } from '@/components/ui/Typography';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Shield, Clock, CheckCircle, GraduationCap, Quote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const badges = [
  {
    icon: Shield,
    title: 'Follows HIPAA Guidelines',
    description: 'Enterprise-grade security'
  },
  {
    icon: CheckCircle,
    title: '99% Accuracy',
    description: 'Crafted by Humans'
  },
  {
    icon: GraduationCap,
    title: '.EDU Discount',
    description: 'Special rates for educational institutions'
  }
];

export const HeroSection = () => {
  const [currentBadge, setCurrentBadge] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBadge((prev) => (prev + 1) % badges.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(timer);
  }, []);

  const openTypeform = () => {
    // @ts-ignore
    const popup = window.typeformEmbed.makePopup('https://form.typeform.com/to/IZhtU0cB?utm_content=google', {
      mode: 'popup',
      hideHeaders: true,
      hideFooter: true,
      size: 50,
      borderRadius: 20
    });
    popup.open();
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1150] via-[#241670] to-[#312b94]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Noise Effect */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ 
          backgroundImage: 'url("/noise.png")', 
          backgroundRepeat: 'repeat' 
        }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1150] via-transparent to-transparent opacity-80" />
      
      {/* Glow Effects */}
      <div className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>

      <Container className="relative">
        <div className="pt-12 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20">
          <div className="mx-auto max-w-7xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6 items-center">
            <div className="lg:max-w-xl">
              {/* Main Headline */}
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-center sm:text-left">
                  <span className="block mb-2 animate-fade-up [animation-duration:1000ms]">Focus on Your Research,</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-violet-200 animate-fade-up [animation-duration:1000ms] [animation-delay:300ms]">
                    We’ll Handle the Transcription
                  </span>
                </h1>
                <div className="mt-6 max-w-2xl hidden sm:block">
                  <Typography variant="p" className="text-lg leading-8 text-gray-300">
                    Accurate, human-created transcripts tailored to your research project's needs.
                  </Typography>
                </div>
                {/* Subheading */}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 animate-fade-up [animation-duration:1000ms] [animation-delay:900ms]">
                <Button 
                  className="!text-[#1a1150] group relative overflow-hidden px-8 py-3 text-lg font-semibold rounded-full bg-white hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.8),0_0_30px_rgba(255,255,255,0.6),0_0_45px_rgba(255,255,255,0.4)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000 animate-pulse-glow hover:animate-none after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/0 after:via-white/40 after:to-white/0 after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000"
                  onClick={openTypeform}
                >
                  <span className="relative z-10 flex items-center whitespace-nowrap">
                  Get your 2-hour sample
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <p className="text-sm leading-6 text-gray-400 text-center">
                  No credit card required,<br />
                  all you need is an .edu email
                </p>
              </div>
              {/* Featured Testimonial */}
            <div className="mt-12 bg-white/[0.03] border border-white/[0.05] rounded-lg p-4 animate-fade-up [animation-duration:1000ms] [animation-delay:1400ms]">
              <div className="flex items-start gap-3">
                <Quote className="h-5 w-5 text-blue-200 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/90 text-sm sm:text-base italic">
                    As a researcher engaged in qualitative research, I needed to find a professional transcription service capable of handling sensitive personal data. I have been impressed with the quality of the transcripts and the quick turnaround and responses.
                  </p>
                  <p className="mt-2 text-white/50 text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" /> Verified Researcher / Professor at a California State University
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* Hero Image */}
            <motion.div 
              className="hidden lg:block relative mt-8 lg:ml-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-full max-w-[800px] transform translate-x-24">
                <Image
                  src="https://landmarkmktemailimages.s3.amazonaws.com/platform-new-dashboard.png"
                  alt="Landmark Platform Dashboard"
                  width={800}
                  height={533}
                  className="rounded-xl shadow-2xl w-full h-auto scale-110"
                  priority
                />
                
                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium whitespace-nowrap">Start Uploading Immediately</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium whitespace-nowrap">No Credit Card Required</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
