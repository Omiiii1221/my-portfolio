import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Quick Learner",
      description: "Rapid adaptation to new technologies and methodologies"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Delivered solutions improving efficiency by 25%"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong collaborator in Agile environments"
    }
  ];

  return (
    <section id="about" className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <p className="text-lg text-muted-foreground">Data-driven problem solver with a passion for analytics</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
            <h3 className="text-xl font-semibold mb-3">Background</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Data Science Intern with a B.Sc. in Computer Science and a Post Graduate Certification in Data Science & Advanced ML. 
              Among the top 5% of my batch with an 8.36/10 CGPA.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Skilled in Python, SQL, Power BI, Tableau, Excel, AWS, and Machine Learning. Experienced in building 
              dashboards, automating reports, predictive modeling, and delivering business insights.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
            <h3 className="text-xl font-semibold mb-3">Passion & Goals</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Passionate about Analytics, AI, and solving real-world business problems through data. I believe in the power of 
              data to transform businesses and drive meaningful decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Recognized for being a quick learner, strong collaborator, and critical thinker. Currently expanding my expertise 
              in deep learning, NLP, and advanced machine learning techniques.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {highlights.map((item, index) => (
            <Card key={index} className="p-5 text-center bg-gradient-card shadow-card hover:shadow-card-hover transition-all">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
