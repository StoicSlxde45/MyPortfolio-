import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="section-container">
        <p className="section-title">Get In Touch</p>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-heading mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg">
          I'm actively seeking opportunities where I can contribute, learn, and grow. 
          Feel free to reach out—I'd love to hear from you.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="mailto:emmanuelnathanzulu343@gmail.com"
            className="card-elevated p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Mail className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground mb-0.5">Email</p>
              <p className="text-sm font-medium text-heading truncate">emmanuelnathanzulu343@gmail.com</p>
            </div>
          </a>
          
          <a
            href="tel:+260967929067"
            className="card-elevated p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Phone className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
              <p className="text-sm font-medium text-heading">+260 967 929 067</p>
            </div>
          </a>
          
          <a
            href="https://github.com/StoicSlxde45"
            target="_blank"
            rel="noopener noreferrer"
            className="card-elevated p-5 flex items-center gap-4 hover:border-primary/30 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Github className="w-5 h-5 text-accent-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">GitHub</p>
              <p className="text-sm font-medium text-heading">View Profile</p>
            </div>
          </a>
          
          <div className="card-elevated p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <MapPin className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Location</p>
              <p className="text-sm font-medium text-heading">Lusaka, Zambia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
