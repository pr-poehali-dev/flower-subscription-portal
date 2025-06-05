import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const features = [
    {
      icon: "Sparkles",
      title: "Магия в каждом букете",
      description:
        "Каждый цветок выбран с любовью и имеет свою неповторимую историю, которую мы расскажем вам",
    },
    {
      icon: "Calendar",
      title: "Подписка на радость",
      description:
        "Регулярные поставки свежих букетов, чтобы ваш дом всегда был наполнен ароматом счастья",
    },
    {
      icon: "BookOpen",
      title: "Истории цветов",
      description:
        "Узнайте удивительные факты о каждом растении — от древних легенд до современного ухода",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-nature-green/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            О нашей <span className="text-primary font-accent">сказочной</span>{" "}
            теплице
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Мы создали не просто магазин цветов, а место, где каждый букет — это
            маленькое чудо, рассказывающее свою уникальную историю. Как в старых
            добрых сказках, где каждый цветок имел волшебную силу.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 gentle-shadow bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                    <Icon
                      name={feature.icon as any}
                      size={28}
                      className="text-white"
                    />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-lavender-purple to-rose-pink rounded-3xl p-8 md:p-12 text-center">
          <div className="font-accent text-3xl text-primary mb-4">
            ✨ Философия Теплицы
          </div>
          <blockquote className="font-heading text-2xl md:text-3xl text-foreground italic mb-6 max-w-4xl mx-auto">
            "Цветы — это письма природы к человеческой душе. Мы просто помогаем
            доставить эту почту вовремя"
          </blockquote>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            В нашем мире, где всё стремится к цифровому, мы возвращаем магию
            живого. Каждый букет — это не товар, а эмоция, упакованная в
            лепестки и листья.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
