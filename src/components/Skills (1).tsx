import { Code, Palette, Server, Database, Globe, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Java", icon: Code, color: "text-orange-600" },
  { name: "JavaScript", icon: Code, color: "text-yellow-500" },
  { name: "HTML & CSS", icon: Globe, color: "text-blue-600" },
  { name: "PHP", icon: Server, color: "text-purple-600" },
  { name: "Node.js", icon: Server, color: "text-green-600" },
  { name: "Figma", icon: Palette, color: "text-pink-600" },
  { name: "UI/UX Design", icon: Laptop, color: "text-secondary" },
  { name: "Web Development", icon: Globe, color: "text-accent" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:scale-105 transition-all duration-300 cursor-default"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                <div className={`w-14 h-14 rounded-xl bg-card flex items-center justify-center shadow-sm ${skill.color}`}>
                  <skill.icon className="h-7 w-7" />
                </div>
                <p className="font-medium text-foreground">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
