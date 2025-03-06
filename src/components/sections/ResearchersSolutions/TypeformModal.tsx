'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

interface TypeformModalProps {
  buttonText: string;
  buttonClassName?: string;
  formUrl?: string;
}

const TypeformModal = ({
  buttonText,
  buttonClassName = '',
  formUrl = 'https://form.typeform.com/to/example-researcher-form',
}: TypeformModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`${buttonClassName}`}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] h-[80vh] p-0">
        <iframe
          src={formUrl}
          frameBorder="0"
          className="w-full h-full"
          allow="camera; microphone; autoplay; encrypted-media;"
          style={{
            display: 'block',
            margin: 0,
            padding: 0,
            border: 0,
          }}
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default TypeformModal;
