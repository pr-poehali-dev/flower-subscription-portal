import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-7xl md:text-8xl font-normal text-foreground mb-8 tracking-tight">
            Теплица
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Цветы с характером для особенных моментов
          </p>

          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-white px-8 py-3 text-base font-normal"
          >
            Смотреть букеты
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
