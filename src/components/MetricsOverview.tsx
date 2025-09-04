import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const MetricsOverview = () => {
  const metrics = [
    {
      title: "Velocity Média",
      value: "42",
      unit: "story points",
      icon: Zap,
      trend: "+12%",
      color: "chart-primary"
    },
    {
      title: "Team Health",
      value: "4.2",
      unit: "/5.0",
      icon: Users,
      trend: "+8%",
      color: "chart-secondary"
    },
    {
      title: "Sprint Goal",
      value: "87%",
      unit: "success rate",
      icon: Target,
      trend: "+15%",
      color: "chart-accent"
    },
    {
      title: "Lead Time",
      value: "3.2",
      unit: "dias",
      icon: TrendingUp,
      trend: "-23%",
      color: "chart-muted"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">KPIs & Métricas de Performance</h2>
          <p className="text-muted-foreground">Dados consolidados das últimas 10 sprints</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <metric.icon className={`h-8 w-8 text-${metric.color}`} />
                  <div className={`text-sm font-medium text-${metric.color} bg-${metric.color}/10 px-2 py-1 rounded-full`}>
                    {metric.trend}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{metric.value}</h3>
                  <p className="text-sm text-muted-foreground">{metric.unit}</p>
                  <CardTitle className="text-sm">{metric.title}</CardTitle>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsOverview;