import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      year: "2025",
      company: "Adseleto",
      role: "Product Owner Sênior e Agile Coach",
      description: "Liderança de produto e mentoring de equipes ágeis",
      highlights: ["Implementação OKRs", "Coaching Agile", "Product Strategy"],
      location: "São Paulo",
      current: true
    },
    {
      year: "2024",
      company: "KodeGênius", 
      role: "Product Owner Sênior e Scrum Master",
      description: "Desenvolvimento de produtos fintech e liderança de squads",
      highlights: ["Fintech Products", "Squad Leadership", "API Strategy"],
      location: "Remote"
    },
    {
      year: "2023-2024",
      company: "Zoom Educação",
      role: "Product Owner Sênior",
      description: "Produtos educacionais e plataformas de aprendizagem",
      highlights: ["EdTech Platform", "User Research", "Product Analytics"],
      location: "São Paulo"
    },
    {
      year: "2023",
      company: "Digistarts • Banco Mercedes-Benz",
      role: "Product Owner e Scrum Master", 
      description: "Produtos bancários digitais e transformação ágil",
      highlights: ["Digital Banking", "Regulatory Compliance", "Customer Journey"],
      location: "São Paulo"
    },
    {
      year: "2021-2022",
      company: "RSI/Keeggo • Banco Santander",
      role: "Product Owner Scrum Master Sênior",
      description: "Soluções bancárias corporativas e gestão de portfolio",
      highlights: ["Corporate Banking", "Portfolio Management", "Team Scaling"],
      location: "São Paulo"
    },
    {
      year: "2018-2020",
      company: "IT Universe",
      role: "Product Owner Pleno e Scrum Master",
      description: "Produtos B2B e metodologias ágeis",
      highlights: ["B2B Solutions", "Process Optimization", "Agile Transformation"],
      location: "São Paulo"
    },
    {
      year: "2016-2018",
      company: "HP Hewlett-Packard",
      role: "Product Owner e Scrum Master",
      description: "Produtos enterprise e infraestrutura de TI",
      highlights: ["Enterprise Products", "IT Infrastructure", "Global Teams"],
      location: "Porto Alegre"
    }
  ];

  const stats = [
    { label: "Anos de Experiência", value: "8+" },
    { label: "Produtos Lançados", value: "15+" },
    { label: "Equipes Lideradas", value: "12+" },
    { label: "Sprints Executadas", value: "200+" }
  ];

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
          <p className="text-muted-foreground">Trajetória como Product Owner e Scrum Master Sênior</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className={`hover:shadow-md transition-all duration-300 ${exp.current ? 'border-primary shadow-lg' : ''}`}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl">{exp.company}</CardTitle>
                      {exp.current && <Badge className="bg-accent text-accent-foreground">Atual</Badge>}
                    </div>
                    <p className="text-lg font-medium text-primary">{exp.role}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Principais Conquistas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold mb-2">Interessado em colaborar?</h3>
            <p className="text-muted-foreground mb-4">
              Vamos conversar sobre como posso agregar valor ao seu produto e equipe
            </p>
            <div className="flex justify-center gap-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                LinkedIn
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                Email
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;