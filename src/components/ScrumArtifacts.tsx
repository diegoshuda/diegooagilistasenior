import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Users, Target } from "lucide-react";

const ScrumArtifacts = () => {
  const retrospectiveItems = [
    { type: "Start", item: "Pair programming nas tasks mais complexas", votes: 8 },
    { type: "Stop", item: "Reuniões longas sem agenda definida", votes: 12 },
    { type: "Continue", item: "Daily stand-ups de 10min sharp", votes: 15 }
  ];

  const impediments = [
    { id: "IMP-01", title: "Dependência externa API", days: 3, status: "Escalado", priority: "High" },
    { id: "IMP-02", title: "Ambiente de DEV instável", days: 1, status: "Resolvido", priority: "Medium" },
    { id: "IMP-03", title: "Falta especificação UX", days: 5, status: "Pendente", priority: "High" }
  ];

  const teamHealth = [
    { metric: "Colaboração", score: 4.2, change: "+0.3" },
    { metric: "Autonomia", score: 3.8, change: "+0.1" },
    { metric: "Propósito", score: 4.5, change: "+0.2" },
    { metric: "Diversão", score: 3.9, change: "-0.1" }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Start": return "bg-accent text-accent-foreground";
      case "Stop": return "bg-destructive text-destructive-foreground";
      case "Continue": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Resolvido": return "bg-accent text-accent-foreground";
      case "Escalado": return "bg-yellow-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Artefatos Scrum & Team Health</h2>
          <p className="text-muted-foreground">Retrospectiva, impedimentos e saúde do time</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Retrospective */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Sprint Retrospective
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {retrospectiveItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Badge className={getTypeColor(item.type)}>{item.type}</Badge>
                    <span className="font-medium">{item.item}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-medium">{item.votes}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  Sprint 20 • 35 votos totais • 3 action items definidos
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impediments */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Impediments Log
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {impediments.map((impediment) => (
                <div key={impediment.id} className="space-y-2 p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{impediment.id}</Badge>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(impediment.status)}>{impediment.status}</Badge>
                      <Badge variant={impediment.priority === "High" ? "destructive" : "secondary"}>
                        {impediment.priority}
                      </Badge>
                    </div>
                  </div>
                  <p className="font-medium">{impediment.title}</p>
                  <p className="text-sm text-muted-foreground">{impediment.days} dias em aberto</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Team Health */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              Team Health Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamHealth.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="relative w-20 h-20 mx-auto">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-muted"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeDasharray={`${metric.score * 20}, 100`}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{metric.score}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">{metric.metric}</p>
                    <p className={`text-sm ${metric.change.includes('+') ? 'text-accent' : 'text-muted-foreground'}`}>
                      {metric.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ScrumArtifacts;