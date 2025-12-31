import { Mail, Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center py-20">
      <div className="section-container text-center">
        <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
          <p className="text-primary font-medium text-sm tracking-wide mb-4">
            Available for opportunities
          </p>
        </div>
        
        <h1 
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-heading mb-4 tracking-tight animate-fade-in"
          style={{ animationDelay: "100ms" }}
        >
          Emmanuel Zulu
        </h1>
        
        <p 
          className="text-lg sm:text-xl text-subheading font-medium mb-6 animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Software Engineer | Computer Science Graduate
        </p>
        
        <p 
          className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: "300ms" }}
        >
          I build innovative software solutions, leverage AI to solve real problems, and thrive on 
          creating efficient, user-centered applications. Ready to contribute to dynamic teams from day one.
        </p>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="mailto:emmanuelnathanzulu343@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="/Emmanuel_Zulu_CV.pdf"
            download="Emmanuel_Zulu_CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="https://github.com/StoicSlxde45"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-surface-elevated hover:bg-muted transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-nathan-zulu-5844a4263/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-border bg-surface-elevated hover:bg-muted transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
