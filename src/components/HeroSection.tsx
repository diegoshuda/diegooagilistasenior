import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-portfolio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Product Owner & Scrum Master Sênior
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transformando 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Ideias</span> em
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Produtos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              8+ anos liderando equipes ágeis, otimizando produtos e entregando valor através de metodologias Scrum e práticas de Product Management.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-sm font-medium">15+ Produtos Lançados</span>
            </div>
            <div className="flex items-center gap-2 bg-card p-3 rounded-lg shadow-sm">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">50+ Sprints Lideradas</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Product Owner Portfolio Dashboard" 
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;