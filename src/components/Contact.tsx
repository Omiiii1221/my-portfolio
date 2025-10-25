import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gaikwadom465@gmail.com",
      href: "mailto:gaikwadom465@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8010063701",
      href: "tel:+918010063701"
    },
    {
      icon: Phone,
      label: "Alternate Phone",
      value: "+91-7972324072",
      href: "tel:+917972324072"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/om-gaikwad-a70421310",
      href: "https://www.linkedin.com/in/om-gaikwad-a70421310/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Omiiii1221",
      href: "https://github.com/Omiiii1221"
    }
  ];

  return (
    <section id="contact" className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Let's discuss how I can contribute to your team</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-card shadow-card-hover">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center pt-6 border-t border-border">
              <p className="text-muted-foreground mb-4">
                Available for full-time opportunities in Data Science, Machine Learning, and Analytics
              </p>
              <Button size="default" className="gap-2" asChild>
                <a href="/Resume_gaikwad_om.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
