import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cosmetics E-Commerce Website",
    description: "A full-featured e-commerce platform for cosmetics with shopping cart, product catalog, and checkout functionality.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "https://github.com/nourelhouda/cosmetics-ecommerce",
    liveUrl: null,
  },
  {
    title: "Chatbot Weather Forecast",
    description: "An interactive chatbot that provides weather forecasts using natural language processing and weather API integration.",
    technologies: ["JavaScript", "Node.js", "API Integration"],
    githubUrl: "https://github.com/nourelhouda/chatbot",
    liveUrl: null,
  },
  {
    title: "Voice of Palestine",
    description: "A website dedicated to sharing stories and information about Palestine, featuring multimedia content and community engagement.",
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/nourelhouda/voice-of-palestine",
    liveUrl: "https://palestine-black.vercel.app/",
  },
  {
    title: "PDF Embedder Project",
    description: "A FastAPI-based application for embedding and processing PDF documents with advanced text extraction capabilities.",
    technologies: ["Python", "FastAPI", "PDF Processing"],
    githubUrl: "https://github.com/nourelhouda/pdf-embedder",
    liveUrl: null,
  },
  {
    title: "Weather Forecast Website",
    description: "A clean and responsive weather forecast application with real-time weather data and location-based forecasts.",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    githubUrl: "https://github.com/nourelhouda/weather-forecast",
    liveUrl: null,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground">
            A showcase of my work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    asChild 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      asChild 
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
