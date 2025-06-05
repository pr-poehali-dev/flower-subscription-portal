import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SubscriptionPreview = () => {
  const plans = [
    {
      name: "Нежность",
      price: "1990₽",
      period: "в месяц",
      delivery: "Раз в 2 недели",
      description: "Для тех, кто ценит тонкую красоту",
      features: [
        "5-7 цветов в букете",
        "История каждого растения",
        "Советы по уходу",
        "Открытка с сюрпризом",
      ],
      accent: "bg-rose-pink",
      popular: false,
    },
    {
      name: "Радость",
      price: "2990₽",
      period: "в месяц",
      delivery: "Каждую неделю",
      description: "Для влюблённых в жизнь",
      features: [
        "8-12 цветов в букете",
        "Эксклюзивные сорта",
        "Аромотерапия",
        "Мини-подарки",
        "Приоритетная доставка",
      ],
      accent: "bg-sunshine-yellow",
      popular: true,
    },
    {
      name: "Волшебство",
      price: "4990₽",
      period: "в месяц",
      delivery: "2 раза в неделю",
      description: "Для ценителей прекрасного",
      features: [
        "15+ цветов премиум",
        "Дизайнерские композиции",
        "Персональные консультации",
        "Редкие растения",
        "VIP-обслуживание",
      ],
      accent: "bg-lavender-purple",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-nature-green/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Выберите свою{" "}
            <span className="text-primary font-accent">цветочную судьбу</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Три волшебных тарифа, каждый со своим характером. Как в сказке —
            выбирайте тот, что откликается сердцу.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 gentle-shadow hover:scale-105 transition-all duration-300 ${plan.popular ? "ring-2 ring-primary" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    ❤️ Самый популярный
                  </span>
                </div>
              )}

              <CardHeader className={`${plan.accent} rounded-t-lg`}>
                <CardTitle className="text-center">
                  <div className="font-accent text-2xl text-primary mb-2">
                    {plan.name}
                  </div>
                  <div className="font-heading text-3xl font-bold text-foreground">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">
                      /{plan.period}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {plan.delivery}
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-6">
                <p className="text-center text-muted-foreground mb-6 font-accent text-lg">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mr-3 flex-shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80 text-foreground"}`}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Выбрать {plan.name.toLowerCase()}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Не можете определиться? Мы поможем!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/5"
          >
            <Icon name="MessageCircle" className="mr-2" />
            Получить персональную консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPreview;
