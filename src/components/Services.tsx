import { Truck, Tractor, Building2, Recycle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Locação de caçamba residencial",
      description:
        "Caçambas ideais para reformas residenciais, limpeza de quintais e pequenas obras. Diversos tamanhos disponíveis para atender sua necessidade.",
      features: ["Diversos tamanhos", "Entrega rápida", "Retirada no prazo"],
    },
    {
      icon: Building2,
      title: "Locação de caçamba comercial",
      description:
        "Soluções para empresas, construtoras e comércios. Caçambas de grande capacidade para obras e gerenciamento de resíduos corporativos.",
      features: ["Alta capacidade", "Atendimento corporativo", "Contratos flexíveis"],
    },
    {
      icon: Recycle,
      title: "Retirada de entulho",
      description:
        "Serviço completo de coleta e destinação adequada de entulhos de construção, reformas e demolições conforme normas ambientais.",
      features: ["Coleta programada", "Descarte legal", "Documentação completa"],
    },
    {
      icon: Truck,
      title: "Entrega rápida e agendada",
      description:
        "Sistema de entrega e retirada com hora marcada. Agilidade e pontualidade para não atrasar sua obra ou projeto.",
      features: ["Horário agendado", "Entrega pontual", "Disponibilidade imediata"],
    },
  ];

  return (
    <section id="servicos" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Soluções completas para gerenciamento de resíduos e locação de equipamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
