import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "30+ Anos",
      description: "De experiência no mercado",
    },
    {
      icon: Users,
      title: "500+ Clientes",
      description: "Satisfeitos em BH e região",
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Resposta em até 24 horas",
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Serviços licenciados e regulares",
    },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Quem Somos
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                A <span className="font-bold text-primary">BH Caçamba</span> é uma empresa consolidada
                no mercado de aluguel de caçambas e gerenciamento de resíduos em Belo Horizonte.
              </p>
              <p>
                Com <span className="font-bold text-foreground">mais de 30 anos de atuação</span>,
                construímos nossa reputação através da{" "}
                <span className="font-bold text-foreground">qualidade, pontualidade e confiabilidade</span>{" "}
                em cada serviço prestado.
              </p>
              <p>
                Atendemos desde pequenas reformas residenciais até grandes obras comerciais e industriais,
                sempre com o mesmo compromisso com a excelência e satisfação do cliente.
              </p>
              <p>
                Nossa equipe é treinada e qualificada para oferecer o melhor atendimento, garantindo
                soluções adequadas para cada necessidade específica dos nossos clientes.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">Missão</h3>
            <p className="text-muted-foreground">
              Oferecer soluções eficientes em gerenciamento de resíduos com qualidade e responsabilidade
              ambiental.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">Visão</h3>
            <p className="text-muted-foreground">
              Ser referência em BH no aluguel de caçambas e serviços de remoção de resíduos.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">Valores</h3>
            <p className="text-muted-foreground">
              Pontualidade, transparência, sustentabilidade e compromisso com nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
