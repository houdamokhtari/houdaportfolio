import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <Card className="shadow-[var(--shadow-hover)]">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Button
                asChild
                size="lg"
                className="h-auto py-6 bg-primary hover:bg-primary/90"
              >
                <a href="mailto:nourelhouda.mokhtari@example.com" className="flex flex-col items-center gap-2">
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold">Email Me</span>
                  <span className="text-xs opacity-80">nourelhouda.mokhtari@example.com</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto py-6 border-2"
              >
                <a 
                  href="https://linkedin.com/in/nourelhouda-mokhtari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="font-semibold">LinkedIn</span>
                  <span className="text-xs opacity-80">Connect with me</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto py-6 border-2"
              >
                <a 
                  href="https://github.com/nourelhouda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2"
                >
                  <Github className="h-6 w-6" />
                  <span className="font-semibold">GitHub</span>
                  <span className="text-xs opacity-80">Check out my code</span>
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="h-auto py-6 bg-accent hover:bg-accent/90"
              >
                <a href="#" className="flex flex-col items-center gap-2">
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-semibold">Let's Chat</span>
                  <span className="text-xs opacity-80">Start a conversation</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-muted-foreground">
          <p>© 2025 Mokhtari Nourelhouda. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
