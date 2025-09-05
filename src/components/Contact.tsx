import { Button } from "@/components/ui/button";
import { Mail, Instagram, Twitter, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-surface-darker">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <div className="h-0.5 w-24 bg-neon mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            Stay connected for updates, new releases, and exclusive content
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-surface-dark p-6 rounded-lg border border-border/30">
            <h3 className="text-xl font-semibold text-neon mb-4">FOR BOOKINGS</h3>
            <p className="text-muted-foreground mb-4">
              Interested in booking edmondD for your venue or event?
            </p>
            <Button className="bg-neon text-primary-foreground hover:bg-neon/90">
              <Mail className="w-4 h-4 mr-2" />
              bookings@edmondd.com
            </Button>
          </div>
          
          <div className="bg-surface-dark p-6 rounded-lg border border-border/30">
            <h3 className="text-xl font-semibold text-neon mb-4">PRESS INQUIRIES</h3>
            <p className="text-muted-foreground mb-4">
              Media requests, interviews, and promotional materials
            </p>
            <Button className="bg-neon text-primary-foreground hover:bg-neon/90">
              <Mail className="w-4 h-4 mr-2" />
              press@edmondd.com
            </Button>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-6">FOLLOW</h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              className="border-neon text-neon hover:bg-neon hover:text-primary-foreground btn-neon"
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon text-neon hover:bg-neon hover:text-primary-foreground btn-neon"
            >
              <Twitter className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-neon text-neon hover:bg-neon hover:text-primary-foreground btn-neon"
            >
              <Youtube className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-8">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            © 2024 edmondD. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;