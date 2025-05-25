
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  backgroundImage?: string;
  onButtonClick?: () => void;
}

export const Hero = ({ 
  title, 
  subtitle, 
  buttonText, 
  backgroundImage = "/assets/verificaation-page-banner.jpg", // Updated path
  onButtonClick 
}: HeroProps) => {
  return (
    <section 
      className="relative h-96 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-800/70"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            {subtitle}
          </p>
        )}
        {buttonText && (
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};
