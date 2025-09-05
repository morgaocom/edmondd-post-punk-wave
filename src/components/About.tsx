const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ABOUT
          </h2>
          <div className="h-0.5 w-16 bg-neon mx-auto" />
        </div>
        
        <div className="prose prose-invert max-w-none">
          <div className="bg-surface-dark p-8 rounded-lg border border-border/30">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              edmondD emerges from the underground music scene with a distinctive sound 
              that bridges the gap between classic post-punk aesthetics and modern electronic 
              experimentation. Drawing inspiration from the stark minimalism of early 80s 
              new wave and the raw energy of punk rock.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              His music explores themes of urban alienation, digital anxiety, and the 
              complexities of human relationships in an increasingly connected yet isolated world. 
              Each track is meticulously crafted to create an atmospheric journey through 
              sound and emotion.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-neon mb-3">INFLUENCES</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Joy Division</li>
                  <li>• Kraftwerk</li>
                  <li>• Bauhaus</li>
                  <li>• New Order</li>
                  <li>• Depeche Mode</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-neon mb-3">EQUIPMENT</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Analog Synthesizers</li>
                  <li>• Drum Machines</li>
                  <li>• Bass Guitar</li>
                  <li>• Digital Audio Workstation</li>
                  <li>• Vintage Effects Pedals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;