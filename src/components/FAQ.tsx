import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What's your turnaround time?",
    answer: (
      <div>
        <p className="mb-2">Our standard turnaround time for transcription services depends on the length and complexity of your audio files. Typically, we deliver high-accuracy transcripts within 3-5 business days. Expedited options are available for faster delivery.</p>
        <p className="mb-2">All projects are handled by professional, U.S.-based transcriptionists to ensure accuracy, security, and compliance.</p>
        <p className="mb-2">Need a precise timeline for your project? <a href="https://form.typeform.com/to/WJddQLWy?utm_content=FAQLanding" className="text-blue-300 hover:text-blue-100 underline" target="_blank" rel="noopener noreferrer">Contact us today</a> for a custom estimate! 🚀</p>
      </div>
    )
  },
  {
    question: "How do you ensure confidentiality?",
    answer: (
      <div>
        <p className="mb-2">At Landmark Associates, confidentiality is our top priority.</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Strict Data Security Protocols – All files are encrypted in transit and at rest, with access restricted to authorized personnel only.</li>
          <li>U.S.-Based Professional Transcriptionists – We never use AI or offshore teams, ensuring controlled, secure handling of sensitive data.</li>
          <li>Non-Disclosure Agreements (NDAs) – Every team member signs legally binding NDAs to safeguard client information.</li>
          <li>Permission-Based Access – Our Research Teams tool lets you control who can view, edit, or manage files within your project.</li>
          <li>HIPAA Compliance & IRB Documentation – We follow HIPAA requirements and offer ready-to-use documentation for your IRB.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Can you handle specialized academic terminology?",
    answer: (
      <div>
        <p className="mb-2">Yes! At Landmark Associates, we specialize in academic transcription and translation, ensuring precise handling of complex terminology across various disciplines.</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Expert U.S.-Based Transcriptionists – Our team has experience with qualitative research, interviews, and focus groups in fields like sociology, healthcare, and legal studies.</li>
          <li>Context-Driven Accuracy – We carefully transcribe industry-specific jargon, ensuring your research is captured accurately.</li>
          <li>Custom Formatting & Speaker Identification – We adapt to your project's needs, including verbatim transcription and time-stamping.</li>
        </ul>
        <p className="mb-2">Have specific terminology requirements? <a href="https://form.typeform.com/to/WJddQLWy?utm_content=FAQLanding" className="text-blue-300 hover:text-blue-100 underline" target="_blank" rel="noopener noreferrer">Let's discuss your project!</a></p>
      </div>
    )
  },
  {
    question: "Do you offer volume discounts for large projects?",
    answer: (
      <div>
        <p className="mb-2">Yes! We offer custom volume discounts for large projects, making high-quality transcription and translation more cost-effective for research teams.</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Scalable Pricing – Discounts are available based on project size, file volume, and turnaround time.</li>
          <li>Consistent Quality – Even with high-volume projects, we ensure 100% human transcription with expert accuracy.</li>
          <li>Dedicated Project Support – Large projects receive personalized assistance to streamline workflow and meet deadlines.</li>
        </ul>
        <p className="mb-2">Want a custom quote? <a href="https://form.typeform.com/to/WJddQLWy?utm_content=FAQLanding" className="text-blue-300 hover:text-blue-100 underline" target="_blank" rel="noopener noreferrer">Contact us to discuss your project's needs!</a></p>
      </div>
    )
  },
  {
    question: "Is your service approved by university IRBs?",
    answer: (
      <div>
        <p className="mb-2">Yes! Our transcription and translation services meet university IRB requirements, ensuring compliance with research ethics and data security standards.</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>HIPAA-Compliant & Secure – We follow strict security protocols to protect sensitive research data.</li>
          <li>Ready-to-Use IRB Documentation – We provide detailed documentation to support your IRB application.</li>
          <li>Trusted by Researchers Nationwide – Universities across the U.S. rely on our services for accurate, confidential transcription.</li>
        </ul>
        <p className="mb-2">Need IRB documentation or have specific compliance questions? Contact us today!</p>
      </div>
    )
  },
  {
    question: "What languages can you transcribe?",
    answer: "We offer transcription services in various languages, with a specialization in Spanish for both direct transcription and English translation."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-[#2D1B69] to-[#312e81] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Find answers to common questions about our academic transcription services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-purple-500/30 rounded-lg px-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 bg-purple-900/40"
                data-state="closed"
                data-orientation="vertical"
              >
                <AccordionTrigger className="text-white font-medium text-left text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent 
                  className="text-blue-200"
                  style={{
                    "--radix-collapsible-content-height": "180px",
                    "--radix-collapsible-content-width": "525px"
                  } as React.CSSProperties}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
