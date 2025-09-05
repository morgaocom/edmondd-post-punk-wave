import Hero from "@/components/Hero";
import TrackSection from "@/components/TrackSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const handlePlayTrack = () => {
    toast({
      title: "🎵 Now Playing",
      description: "Suspected By My Beloved - edmondD",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onPlayTrack={handlePlayTrack} />
      <TrackSection />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
