import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-8 px-4"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Section */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-primary text-sm font-medium">
                Data Science Intern
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Om </span>
              <span className="bg-gradient-hero bg-clip-text text-transparent">
               Nandkumar
              </span>
              <br />
              <span className="text-foreground">Gaikwad</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Turning data into insights, and insights into impact. Passionate
              about Analytics, AI, and solving real-world business problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button size="default" className="gap-2" asChild>
                <a href="#contact">
                  Get In Touch
                  <Mail className="w-4 h-4" />
                </a>
              </Button>

              {/* View Resume button — opens PDF in new tab safely */}
              <Button size="default" variant="outline" className="gap-2" asChild>
                <a
                  href="/Resume_gaikwad_om.pdf" // PDF file inside public/ folder
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start pt-2">
              <a
                href="https://github.com/Omiiii1221"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/om-gaikwad-a70421310/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:gaikwadom465@gmail.com"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="tel:+918010063701"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-card-hover">
                <img
                  src="/profile.jpg"
                  alt="Om Nandkumar Gaikwad"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
