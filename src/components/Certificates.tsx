import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Post Graduate Program in Data Science and Analytics with Advanced ML Track",
      issuer: "Imarticus Learning",
      date: "2025",
      link: "https://pegasus.imarticus.org/vfcrt/EK5ENEE85371E3"
    },
    {
      title: "HP Data Science Certification",
      issuer: "HP",
      date: "2025",
      link: "https://www.life-global.org/certificate/ed2c1704-eee0-4abd-8b7a-cf07bf17ab28"
    },
    {
      title: "Cisco Data Analyst Essentials",
      issuer: "Cisco",
      date: "2025",
      link: "https://www.credly.com/badges/8277ef19-cd62-433d-81c8-c50fb6435229/public_url"
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "2025",
      link: "https://www.credly.com/badges/0c4724a0-0474-4e6a-a228-25c4e31cc552/public_url"
    }
  ];

  return (
    <section id="certificates" className="py-12 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Certificates</h2>
          <p className="text-lg text-muted-foreground">Professional certifications and achievements</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
