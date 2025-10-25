import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Fourise Software Solutions Pvt. Ltd.",
      location: "Kharadi, Pune",
      role: "Data Scientist Intern",
      type: "On-site",
      period: "Jun 2025 – Present",
      technologies: ["Object Detection", "NLP", "CNN", "LSTM", "Transfer Learning", "Deep Learning", "Power BI"],
      responsibilities: [
        "Led team project on object detection and NLP multimodal applications, collaborating with senior data scientists",
        "Developed and optimized deep learning models using CNNs, Mediapipe and LSTMs, improving object detection accuracy by 18%",
        "Designed and delivered interactive Power BI dashboards for HR and Financial data, enabling leadership to track employee performance and financial KPIs",
        "Built and fine-tuned NLP models for text classification and sentiment analysis"
      ]
    },
    {
      company: "Codtech IT Solutions Pvt. Ltd.",
      location: "Hyderabad, India",
      role: "Data Analytics Intern",
      type: "Remote",
      period: "Feb 2025 – Apr 2025",
      technologies: ["SQL", "Python", "Excel", "Tableau", "Business Intelligence", "Agile"],
      responsibilities: [
        "Processed and analyzed 100k+ data points, detecting trends and anomalies to improve efficiency by 25%",
        "Built automated data reports, reducing manual effort by 40% and enhancing reporting speed",
        "Collaborated with cross-functional teams in an Agile environment, improving workflow automation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Experience</h2>
          <p className="text-lg text-muted-foreground">Professional journey and impact</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.location} • {exp.type}</p>
                    </div>
                    <span className="text-sm text-primary font-medium mt-2 md:mt-0">{exp.period}</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
