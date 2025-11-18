import { Github, Download, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Mokhtari <br />
              <span className="text-secondary">Nourelhouda</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Master 2 Student – IDTW
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Ingénierie des Données et Technologie Web
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://github.com/nourelhouda" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-3xl blur-2xl opacity-20"></div>
              <img
                src={profilePhoto}
                alt="Mokhtari Nourelhouda"
                className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
