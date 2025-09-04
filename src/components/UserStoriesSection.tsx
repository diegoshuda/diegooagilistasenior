import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Flag, Star } from "lucide-react";

const UserStoriesSection = () => {
  const userStories = [
    {
      id: "US-001",
      title: "Login Social",
      story: "Como usuário, eu quero fazer login com redes sociais para acessar rapidamente a plataforma",
      priority: "High",
      points: 8,
      acceptance: ["Integração com Google/Facebook", "Validação de token", "Redirecionamento automático"],
      status: "Done"
    },
    {
      id: "US-015",
      title: "Dashboard Personalizado",
      story: "Como gerente, eu quero personalizar meu dashboard para visualizar métricas relevantes",
      priority: "Medium",
      points: 13,
      acceptance: ["Widgets configuráveis", "Filtros por período", "Exportação de relatórios"],
      status: "In Progress"
    },
    {
      id: "US-023",
      title: "Notificações Push",
      story: "Como usuário ativo, eu quero receber notificações para não perder atualizações importantes",
      priority: "Low",
      points: 5,
      acceptance: ["Configuração de preferências", "Diferentes tipos de notificação", "Histórico"],
      status: "Backlog"
    }
  ];

  const backlogItems = [
    { epic: "Autenticação", stories: 12, completed: 10 },
    { epic: "Dashboard", stories: 8, completed: 6 },
    { epic: "Relatórios", stories: 15, completed: 12 },
    { epic: "Mobile App", stories: 20, completed: 5 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done": return "bg-accent text-accent-foreground";
      case "In Progress": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High": return <Flag className="h-4 w-4 text-destructive" />;
      case "Medium": return <Star className="h-4 w-4 text-yellow-500" />;
      default: return <User className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">User Stories & Product Backlog</h2>
          <p className="text-muted-foreground">Exemplos de estruturação e priorização do backlog</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Stories */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold mb-4">User Stories - Sprint Atual</h3>
            {userStories.map((story) => (
              <Card key={story.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{story.id}</Badge>
                      {getPriorityIcon(story.priority)}
                      <Badge className={getStatusColor(story.status)}>{story.status}</Badge>
                    </div>
                    <Badge variant="secondary">{story.points} pts</Badge>
                  </div>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 italic">"{story.story}"</p>
                  <div>
                    <h4 className="font-medium mb-2">Critérios de Aceitação:</h4>
                    <ul className="space-y-1">
                      {story.acceptance.map((criteria, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Product Backlog */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Product Backlog</h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Épicos & Progresso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {backlogItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.epic}</span>
                      <span className="text-sm text-muted-foreground">
                        {item.completed}/{item.stories}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(item.completed / item.stories) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 pt-4 border-t">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">67%</p>
                    <p className="text-sm text-muted-foreground">Backlog Concluído</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserStoriesSection;