import { MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="localizacao" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Nossa Localização
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos toda Belo Horizonte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120616.72882713394!2d-44.06650992634936!3d-19.91068162494169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20MG!5e0!3m2!1spt-BR!2sbr!4v1647887213684!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização BH Caçamba"
            />
          </div>

          {/* Coverage Area */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    Área de Atendimento
                  </h3>
                  <p className="text-muted-foreground">
                    Belo Horizonte - MG
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <h3 className="text-xl font-bold mb-4 text-card-foreground">
                Regiões Atendidas em BH
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Centro",
                  "Pampulha",
                  "Savassi",
                  "Barreiro",
                  "Venda Nova",
                  "Norte",
                  "Oeste",
                  "Leste",
                  "Noroeste",
                  "Nordeste",
                ].map((region, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {region}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
              <p className="text-card-foreground">
                <span className="font-bold">Atendimento em Belo Horizonte!</span>
                <br />
                <span className="text-sm text-muted-foreground">
                  Consulte disponibilidade para sua região através dos nossos canais de contato.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
