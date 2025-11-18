import { User, GraduationCap, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate web developer and data engineer with expertise in modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Personal Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium text-foreground">Age:</span> 21 years old</p>
                <p><span className="font-medium text-foreground">Education:</span> Master 2 – IDTW</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Languages</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium text-foreground">Arabic:</span> C2 (Native)</p>
                <p><span className="font-medium text-foreground">English:</span> B2+ (Advanced)</p>
                <p><span className="font-medium text-foreground">French:</span> A1+ (Beginner)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>• Train the Trainer Certificate<br/><span className="text-sm">(Training + Makeup)</span></p>
                <p>• UI/UX Design Certificate<br/><span className="text-sm">BrainerX Academy</span></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
