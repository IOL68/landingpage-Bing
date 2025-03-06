import React from 'react';
import TypeformModal from './TypeformModal';

const CallToAction = () => {
  return (
    <section className="py-16 bg-white text-center">
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

export default CallToAction;
