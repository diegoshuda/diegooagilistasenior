import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Flag, CheckCircle } from "lucide-react";

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      status: "Completed",
      initiatives: [
        { name: "Mobile App MVP", progress: 100, type: "Epic" },
        { name: "User Authentication", progress: 100, type: "Feature" },
        { name: "Basic Dashboard", progress: 100, type: "Feature" }
      ]
    },
    {
      quarter: "Q2 2024", 
      status: "In Progress",
      initiatives: [
        { name: "Advanced Analytics", progress: 75, type: "Epic" },
        { name: "Push Notifications", progress: 90, type: "Feature" },
        { name: "Social Integration", progress: 60, type: "Feature" }
      ]
    },
    {
      quarter: "Q3 2024",
      status: "Planned",
      initiatives: [
        { name: "AI Recommendations", progress: 20, type: "Epic" },
        { name: "Team Collaboration", progress: 10, type: "Feature" },
        { name: "API v2.0", progress: 0, type: "Technical" }
      ]
    },
    {
      quarter: "Q4 2024",
      status: "Planned", 
      initiatives: [
        { name: "Enterprise Features", progress: 0, type: "Epic" },
        { name: "Advanced Security", progress: 0, type: "Technical" },
        { name: "Global Expansion", progress: 0, type: "Business" }
      ]
    }
  ];

  const planningArtifacts = [
    {
      title: "Sprint Planning",
      description: "Cerimônia de 4h para definir Sprint Goal e selecionar backlog items",
      frequency: "A cada 2 semanas",
      participants: "Dev Team + PO + SM",
      deliverable: "Sprint Backlog definido"
    },
    {
      title: "Release Planning",
      description: "Sessão trimestral para alinhar roadmap com objetivos de negócio",
      frequency: "Trimestral",
      participants: "Stakeholders + Time",
      deliverable: "Release Plan atualizado"
    },
    {
      title: "Backlog Refinement",
      description: "Sessões semanais para estimar e detalhar user stories",
      frequency: "Semanal",
      participants: "Dev Team + PO",
      deliverable: "Backlog priorizado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-accent text-accent-foreground";
      case "In Progress": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Epic": return "bg-purple-500 text-white";
      case "Feature": return "bg-primary text-primary-foreground";
      case "Technical": return "bg-yellow-500 text-white";
      case "Business": return "bg-emerald-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Planejamento & Roadmap</h2>
          <p className="text-muted-foreground">Visão estratégica e planejamento de releases</p>
        </div>

        {/* Roadmap Timeline */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6">Product Roadmap 2024</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((quarter, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{quarter.quarter}</CardTitle>
                    <Badge className={getStatusColor(quarter.status)}>{quarter.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quarter.initiatives.map((initiative, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{initiative.name}</span>
                        <Badge className={getTypeColor(initiative.type)} variant="secondary">
                          {initiative.type}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${initiative.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{initiative.progress}% completo</span>
                        {initiative.progress === 100 && <CheckCircle className="h-3 w-3 text-accent" />}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Planning Artifacts */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Artefatos de Planejamento</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {planningArtifacts.map((artifact, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {artifact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{artifact.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium">Frequência:</span>
                      <Badge variant="outline" className="text-xs">{artifact.frequency}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium">Participantes:</span>
                      <span className="text-xs text-muted-foreground">{artifact.participants}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-xs font-medium">Entregável:</span>
                      <div className="flex items-center gap-2">
                        <Target className="h-3 w-3 text-accent" />
                        <span className="text-xs text-muted-foreground">{artifact.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;