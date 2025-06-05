import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nature-green via-sunshine-yellow to-rose-pink">
      <div className="absolute inset-0 folklore-pattern opacity-30"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 animate-gentle-float">
        <div className="w-16 h-16 bg-lavender-purple rounded-full opacity-60"></div>
      </div>
      <div
        className="absolute bottom-32 right-16 animate-gentle-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-12 h-12 bg-warm-peach rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">Теплица</span>
            <div className="font-accent text-4xl md:text-6xl text-muted-foreground mt-2">
              где цветы обретают душу
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Не просто букеты, а эмоциональные истории, которые будут радовать
            вас круглый год. Подписка на счастье с доставкой прямо в сердце.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg gentle-shadow"
            >
              <Icon name="Heart" className="mr-2" />
              Начать цветочную историю
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary/5"
            >
              <Icon name="Play" className="mr-2" />
              Посмотреть магию
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 gentle-shadow max-w-2xl mx-auto">
            <div className="font-accent text-2xl text-primary mb-2">
              🌸 Особое предложение
            </div>
            <p className="text-lg text-foreground">
              Первый месяц подписки —{" "}
              <span className="font-semibold text-primary">всего 990₽</span>
              <br />
              <span className="text-sm text-muted-foreground">
                вместо 2490₽. Потому что красота должна быть доступной
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
