import { Download, FileVideo, FileImage, FileText, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TPFile {
  name: string;
  blenderFile: string;
  rapport: string;
  image: string;
  video: string;
}

const tpFiles: TPFile[] = [
  {
    name: "TP 1",
    blenderFile: "/files/tp1-project.blend",
    rapport: "/files/tp1-rapport.pdf",
    image: "/images/tp1-screenshot.png",
    video: "/videos/tp1-video.mp4",
  },
  {
    name: "TP 2",
    blenderFile: "#",
    rapport: "#",
    image: "#",
    video: "#",
  },
  {
    name: "TP 3",
    blenderFile: "#",
    rapport: "#",
    image: "#",
    video: "#",
  },
  {
    name: "TP 4",
    blenderFile: "#",
    rapport: "#",
    image: "#",
    video: "#",
  },
];

const finalProject = {
  name: "Gaza",
  description: "Final Project for W3D Module",
  members: [
    "Mokhtari Nour El Houda",
    "Aichour Sara",
    "Hachmi Manar",
  ],
  blenderFile: "#",
  rapport: "#",
  images: ["#"],
  videos: ["#"],
};

export const W3DModule = () => {
  const handleDownload = (url: string, filename: string) => {
    if (url === "#") {
      alert("File not yet available");
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="w3d" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full mb-4">
            <Package className="h-5 w-5" />
            <span className="font-semibold">W3D Module</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            TP – Rapports – Project Media
          </h2>
          <p className="text-lg text-muted-foreground">
            Web 3D Module - Blender Projects & Documentation
          </p>
        </div>

        {/* TPs Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6">Travaux Pratiques</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {tpFiles.map((tp, index) => (
              <Card 
                key={index}
                className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{tp.name}</span>
                    <Badge className="bg-gradient-to-r from-secondary to-primary text-white">
                      Blender
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Complete package with project files, documentation, and media
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleDownload(tp.blenderFile, `${tp.name}-project.blend`)}
                      className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white"
                      size="sm"
                    >
                      <Package className="mr-2 h-4 w-4" />
                      Blender File
                    </Button>
                    <Button
                      onClick={() => handleDownload(tp.rapport, `${tp.name}-rapport.pdf`)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Rapport
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleDownload(tp.image, `${tp.name}-screenshot.png`)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <FileImage className="mr-2 h-4 w-4" />
                      Image
                    </Button>
                    <Button
                      onClick={() => handleDownload(tp.video, `${tp.name}-video.mp4`)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <FileVideo className="mr-2 h-4 w-4" />
                      Video
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Project */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">Final Project</h3>
          <Card className="shadow-[var(--shadow-hover)] border-2 border-secondary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2">{finalProject.name}</CardTitle>
                  <CardDescription className="text-base">
                    {finalProject.description}
                  </CardDescription>
                </div>
                <Badge className="bg-gradient-to-r from-accent to-secondary text-white text-sm px-3 py-1">
                  Group Project
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Team Members:</h4>
                <div className="flex flex-wrap gap-2">
                  {finalProject.members.map((member, i) => (
                    <Badge key={i} variant="outline" className="text-sm px-3 py-1">
                      {member}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Project Files:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleDownload(finalProject.blenderFile, "gaza-project.blend")}
                    className="w-full bg-gradient-to-r from-secondary to-primary hover:from-secondary/90 hover:to-primary/90 text-white"
                  >
                    <Package className="mr-2 h-5 w-5" />
                    Download Blender File
                  </Button>
                  <Button
                    onClick={() => handleDownload(finalProject.rapport, "gaza-rapport.pdf")}
                    className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Download Rapport
                  </Button>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Button
                    onClick={() => handleDownload(finalProject.images[0], "gaza-image.png")}
                    variant="outline"
                    className="w-full"
                  >
                    <FileImage className="mr-2 h-5 w-5" />
                    Download Images
                  </Button>
                  <Button
                    onClick={() => handleDownload(finalProject.videos[0], "gaza-video.mp4")}
                    variant="outline"
                    className="w-full"
                  >
                    <FileVideo className="mr-2 h-5 w-5" />
                    Download Videos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
