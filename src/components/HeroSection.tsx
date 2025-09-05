import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-portfolio.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              Product Owner & Scrum Master Sênior
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Transformando 
              <span className="text-blue-600"> Ideias</span> em
              <span className="text-green-600"> Produtos</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              8+ anos liderando equipes ágeis, otimizando produtos e entregando valor através de metodologias Scrum e práticas de Product Management.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm font-medium text-gray-900">15+ Produtos Lançados</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm border">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm font-medium text-gray-900">50+ Sprints Lideradas</span>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl shadow-2xl flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm">Portfolio Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;