import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cheating Detection System for Online Exams",
      date: "October 2025",
      description: "Real-time cheating detection system to monitor online exams using webcam feeds. Implemented person detection with MediaPipe and phone detection with YOLOv8 (COCO model) to identify suspicious activities.",
      technologies: ["Computer Vision", "Flask", "MediaPipe", "YOLOv8", "OpenCV", "HTML/CSS/JS"],
      achievements: ["Real-time exam monitoring", "Multi-person and phone detection", "Live alert mechanism for suspicious activities"],
      github: "https://github.com/Omiiii1221/Cheat_Detector_Yolo",
      live: "#"
    },
    {
      title: "Used Car Price Prediction",
      date: "May 2025",
      description: "Developed a machine learning model to predict used car prices with 92% accuracy. Performed exploratory data analysis (EDA) and applied regression techniques to support better pricing insights. Deployed the model using Flask with an interactive HTML/CSS frontend.",
      technologies: ["Regression", "Flask", "EDA", "HTML", "CSS"],
      achievements: [
        "Achieved 92% prediction accuracy",
        "End-to-end deployment on AWS EC2",
        "Designed a user-friendly web interface"
      ],
      github: "https://github.com/Omiiii1221/car-price-prediction",
      live: "http://ec2-54-145-1-168.compute-1.amazonaws.com:8080/"
    },
    {
      title: "Sign Language to Text and Audio Translation",
      date: "September 2025",
      description: "Real-time sign language recognition system converting gestures into text. Implemented Mediapipe + LSTM models for accurate classification with Flask-based web interface for live gesture-to-text translation.",
      technologies: ["Deep Learning", "LSTM", "NLP", "Mediapipe", "Flask"],
      achievements: ["Real-time gesture recognition", "Enhanced accessibility", "Live translation interface"],
      github: "#",
      live: "#"
    },
    {
      title: "Bank Loan Report – Financial Risk Analysis",
      date: "September 2025",
      description: "Interactive Power BI dashboard helping banks understand loan performance, customer repayment patterns, and default risks. Integrated multiple data sources for comprehensive portfolio analysis.",
      technologies: ["Power BI", "DAX", "Data Modeling", "Financial Analytics"],
      achievements: ["Real-time portfolio tracking", "Risk identification system", "Improved loan management efficiency"],
      github: "#",
      live: "#"
    },
    {
      title: "Online Retail Dashboard – Market Diversification",
      date: "June 2025",
      description: "Analyzed 500K+ rows retail dataset, creating interactive dashboard with custom DAX measures. Identified top 5 potential markets for diversification strategy beyond the leading country.",
      technologies: ["Power BI", "DAX", "Data Cleaning", "Visualization"],
      achievements: ["500K+ data points analyzed", "Diversification strategy enabled", "Data-driven market insights"],
      github: "#",
      live: "#"
    },
    {
      title: "Music Store Database Analysis",
      date: "April 2025",
      description: "Analyzed 20K+ transactions to uncover purchasing trends. Optimized pricing strategies and improved inventory planning using SQL queries.",
      technologies: ["Excel", "SQL", "Data Analysis"],
      achievements: ["25% marketing efficiency improvement", "15% revenue increase", "20% reduction in stockouts"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-12 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
          <p className="text-lg text-muted-foreground">Real-world applications of data science and ML</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-card-hover transition-all flex flex-col">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{project.date}</span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="gap-2" asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
