'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface TypeformModalProps {
  buttonText: string;
  buttonClassName?: string;
}

const TypeformModal: React.FC<TypeformModalProps> = ({ buttonText, buttonClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openTypeform = () => {
    setIsOpen(true);
    // In a real implementation, this would open the Typeform modal
    // For now, we'll just simulate it by opening a new window
    window.open('https://form.typeform.com/to/P8Xmlu7C?typeform-source=thelai.com', '_blank');
  };

  return (
    <Button 
      onClick={openTypeform}
      className={buttonClassName || ""}
    >
      {buttonText}
    </Button>
  );
};

export default TypeformModal;
