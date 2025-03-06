import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button
} from "./ui";

interface TypeformModalProps {
  children?: React.ReactNode;
  buttonText: string;
  buttonClassName?: string;
  formUrl?: string;
}

const TypeformModal: React.FC<TypeformModalProps> = ({ 
  children, 
  buttonText, 
  buttonClassName = "bg-[#2e1a5a] hover:bg-[#231347] text-white",
  formUrl = "https://form.typeform.com/to/iYAyVlU8?utm_content=LandingG"
}) => {
  const [open, setOpen] = React.useState(false);
  
  const handleOpenChange = (newOpen: boolean) => {
    // Añadir un pequeño retraso para hacer la transición más suave
    if (newOpen) {
      setTimeout(() => setOpen(newOpen), 50);
    } else {
      setOpen(newOpen);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0 bg-white rounded-md overflow-hidden">
        <DialogHeader className="p-4 bg-white">
          <DialogTitle className="text-[#2e1a5a] font-medium text-left">Need 10+ Hours Transcribed? Check .edu Rates!</DialogTitle>
        </DialogHeader>
        <div className="h-[600px]">
          <iframe
            src={formUrl}
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="camera; microphone; autoplay; encrypted-media; fullscreen; geolocation"
            title="Landmark Quote Request Form"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TypeformModal;
