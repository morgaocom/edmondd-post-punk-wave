import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
import { useState } from "react";

const TrackSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 px-4 bg-surface-darker">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neon mb-4">
            LATEST RELEASE
          </h2>
          <div className="h-0.5 w-24 bg-neon mx-auto" />
        </div>
        
        <Card className="bg-surface-dark border-border/30 p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Track Artwork */}
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-neon rounded-lg flex items-center justify-center shadow-neon">
                <div className="w-40 h-40 bg-surface-darker rounded-md flex items-center justify-center">
                  <Volume2 className="w-16 h-16 text-neon" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon rounded-full animate-pulse-neon" />
            </div>
            
            {/* Track Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Suspected By My Beloved
              </h3>
              <p className="text-neon text-lg font-medium mb-4">edmondD</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A haunting exploration of trust and paranoia, blending dark synthesizers 
                with driving bass lines. This track showcases edmondD's signature post-punk 
                sound with contemporary electronic elements.
              </p>
              
              {/* Player Controls */}
              <div className="flex items-center gap-4">
                <Button 
                  onClick={togglePlay}
                  size="lg"
                  className="bg-neon text-primary-foreground hover:bg-neon/90 px-6"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </Button>
                
                {/* Mock Progress Bar */}
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div className="bg-neon h-2 rounded-full w-1/3 transition-all duration-300" />
                </div>
                
                <span className="text-sm text-muted-foreground font-mono">
                  1:23 / 3:45
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TrackSection;