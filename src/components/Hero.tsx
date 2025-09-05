import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

interface HeroProps {
  onPlayTrack?: () => void;
}

const Hero = ({ onPlayTrack }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Post-punk atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <h1 
            className="text-6xl md:text-8xl font-black tracking-wider text-neon animate-pulse-neon"
            data-text="edmondD"
          >
            edmondD
          </h1>
          <div className="h-1 w-32 bg-gradient-neon mx-auto mt-4" />
        </div>
        
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
            Back
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={onPlayTrack}
            size="lg"
            className="bg-transparent border-2 border-neon text-neon hover:bg-neon hover:text-primary-foreground transition-all duration-300 px-8 py-6 text-lg font-semibold tracking-wider btn-neon"
          >
            <Play className="mr-2 h-5 w-5" />
            Play Suspected By My Beloved
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 w-2 h-16 bg-gradient-neon opacity-60" />
      <div className="absolute top-8 right-8 w-16 h-2 bg-gradient-neon opacity-60" />
    </section>
  );
};

export default Hero;