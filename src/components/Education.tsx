import { Card } from "@/components/ui/card";
import { GraduationCap, ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Post Graduate Certification in Data Science and Analytics with Advanced ML",
      institution: "Imarticus Learning",
      period: "July 2025",
      link: "https://www.imarticus.com/",
      description: "Advanced training in Data Science, Machine Learning, Deep Learning, and Business Analytics"
    },
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "SPPU, Pune | Ahilyanagar, India",
      period: "June 2025",
      achievement: "Among the top 5% of the batch | 8.36/10 CGPA",
      description: "Comprehensive foundation in computer science, programming, and data structures"
    }
  ];

  return (
    <section id="education" className="py-12 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Education</h2>
          <p className="text-lg text-muted-foreground">Academic excellence and continuous learning</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <span>{item.institution}</span>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" 
                         className="text-primary hover:text-primary-glow transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                  {item.achievement && (
                    <p className="text-sm font-medium text-primary mb-3">{item.achievement}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
