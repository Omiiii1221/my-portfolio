import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, Cloud, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Analytics",
      skills: ["Python (Pandas, Scikit-learn, Matplotlib, Seaborn)", "SQL", "Statistics", "EDA", "Machine Learning", "Deep Learning"]
    },
    {
      icon: BarChart3,
      title: "Visualization & BI Tools",
      skills: ["Tableau", "Power BI", "Excel", "Data Visualization", "Dashboard Design"]
    },
    {
      icon: Database,
      title: "Databases & Cloud",
      skills: ["Microsoft SQL Server", "AWS", "Data Warehousing", "ETL Processes"]
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: ["Problem-solving", "Critical Thinking", "Communication", "Team Collaboration", "Agile Methodology"]
    }
  ];

  return (
    <section id="skills" className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">Technical proficiency and professional capabilities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
