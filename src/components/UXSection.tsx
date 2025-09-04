import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Lightbulb, Search, Smartphone } from "lucide-react";

const UXSection = () => {
  const personas = [
    {
      name: "Ana Silva",
      role: "Gerente de Vendas",
      age: "32 anos",
      goals: ["Aumentar conversão", "Otimizar processos", "Analisar performance"],
      painPoints: ["Relatórios complexos", "Interface confusa", "Dados dispersos"],
      tools: ["Salesforce", "Excel", "Google Analytics"]
    },
    {
      name: "Carlos Pereira",
      role: "Desenvolvedor",
      age: "28 anos", 
      goals: ["Deploy automatizado", "Debugging eficiente", "Colaboração ágil"],
      painPoints: ["Ambiente instável", "Documentação defasada", "Code review lento"],
      tools: ["VS Code", "Git", "Docker"]
    }
  ];

  const discoveryActivities = [
    {
      activity: "User Research",
      method: "Entrevistas 1:1",
      participants: 12,
      insights: "Usuários preferem dashboards personalizáveis",
      impact: "High"
    },
    {
      activity: "Usability Testing",
      method: "Testes A/B",
      participants: 200,
      insights: "Nova navegação aumentou conversão em 23%",
      impact: "High"
    },
    {
      activity: "Data Analysis",
      method: "Heatmaps & Analytics",
      participants: 1500,
      insights: "80% dos usuários não encontram feature de export",
      impact: "Medium"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-yellow-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">UX Research & Discovery</h2>
          <p className="text-muted-foreground">Personas, pesquisa de usuários e insights de descoberta</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Personas */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">User Personas</h3>
            {personas.map((persona, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{persona.name}</CardTitle>
                      <p className="text-muted-foreground">{persona.role} • {persona.age}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4" />
                      Objetivos
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {persona.goals.map((goal, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Pain Points</h4>
                    <ul className="space-y-1">
                      {persona.painPoints.map((pain, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Ferramentas
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {persona.tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Discovery Activities */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Discovery Activities</h3>
            <div className="space-y-4">
              {discoveryActivities.map((activity, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Search className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{activity.activity}</CardTitle>
                      </div>
                      <Badge className={getImpactColor(activity.impact)}>{activity.impact}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Método:</span>
                      <Badge variant="outline">{activity.method}</Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Participantes:</span>
                      <span className="text-sm text-primary font-medium">{activity.participants}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Key Insight:</span>
                      <p className="text-sm text-muted-foreground italic bg-muted/50 p-2 rounded">
                        "{activity.insights}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Summary Card */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-2xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Satisfação do Usuário</p>
                    <p className="text-xs text-muted-foreground">Baseado em 47 pesquisas realizadas</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UXSection;