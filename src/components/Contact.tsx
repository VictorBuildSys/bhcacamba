import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento.%0A%0ANome: ${formData.name}%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0AMensagem: ${formData.message}`;
    const whatsappNumber = "5531999588126";
    
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Mensagem enviada!",
      description: "Em breve entraremos em contato.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: ["(31) 3371-8126", "(31) 99581-8126"],
      action: "tel:33718126",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contato@bhcacamba.com.br"],
      action: "mailto:contato@bhcacamba.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua Juarez Teixeira Pinto, nº 267", "Bairro das Industrias - Belo Horizonte/MG"],
      action: null,
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
      action: null,
    },
  ];

  return (
    <section id="contato" className="section-padding bg-accent">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-accent-foreground">
            Entre em Contato
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Fale conosco e tire suas dúvidas. Estamos prontos para atender você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Fale Conosco</CardTitle>
              <CardDescription>Preencha o formulário e retornaremos em breve</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefone (WhatsApp)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Descreva sua necessidade (tipo de serviço, localização, prazo...)"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar pelo WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {info.action ? (
                            <a
                              href={info.action}
                              className="hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-3">Atendimento Rápido!</h3>
                <p className="mb-4">
                  Resposta em até 24 horas. Entre em contato agora e receba seu orçamento!
                </p>
                <a
                  href="https://wa.me/5531999588126"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg" className="w-full">
                    <Phone className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
