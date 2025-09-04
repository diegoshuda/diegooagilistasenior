import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

const BurndownChart = () => {
  const burndownData = [
    { day: 'Dia 1', ideal: 80, real: 80 },
    { day: 'Dia 3', ideal: 70, real: 75 },
    { day: 'Dia 5', ideal: 60, real: 65 },
    { day: 'Dia 7', ideal: 50, real: 52 },
    { day: 'Dia 9', ideal: 40, real: 38 },
    { day: 'Dia 11', ideal: 30, real: 25 },
    { day: 'Dia 13', ideal: 20, real: 15 },
    { day: 'Dia 15', ideal: 10, real: 8 },
    { day: 'Dia 17', ideal: 0, real: 0 }
  ];

  const velocityData = [
    { sprint: 'Sprint 15', velocity: 38 },
    { sprint: 'Sprint 16', velocity: 42 },
    { sprint: 'Sprint 17', velocity: 45 },
    { sprint: 'Sprint 18', velocity: 41 },
    { sprint: 'Sprint 19', velocity: 47 },
    { sprint: 'Sprint 20', velocity: 44 }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Análise de Sprint & Velocity</h2>
          <p className="text-muted-foreground">Acompanhamento de burndown e velocity das últimas sprints</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Burndown Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                Sprint Burndown - Sprint 20
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={burndownData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="ideal" 
                      stroke="hsl(var(--chart-muted))" 
                      strokeDasharray="5 5"
                      name="Burndown Ideal"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="real" 
                      stroke="hsl(var(--chart-primary))" 
                      strokeWidth={3}
                      name="Burndown Real"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Velocity Chart */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                Velocity Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={velocityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sprint" />
                    <YAxis />
                    <Line 
                      type="monotone" 
                      dataKey="velocity" 
                      stroke="hsl(var(--chart-secondary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--chart-secondary))", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">Velocity média: 42 story points</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BurndownChart;