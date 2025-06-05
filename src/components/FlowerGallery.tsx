import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FlowerGallery = () => {
  const flowers = [
    {
      name: "Пионы 'Розовая мечта'",
      image:
        "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400&h=300&fit=crop",
      story:
        "Говорят, что пионы приносят счастье в дом. А мы знаем точно — они приносят улыбки!",
      mood: "Романтика и нежность",
      season: "Май - Июнь",
    },
    {
      name: "Тюльпаны 'Весенний бал'",
      image:
        "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=300&fit=crop",
      story:
        "Эти тюльпаны танцуют даже в вазе. Секрет в особом сорте из голландских садов.",
      mood: "Радость и обновление",
      season: "Март - Май",
    },
    {
      name: "Розы 'Царская особа'",
      image:
        "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop",
      story:
        "Розы с характером королевы — гордые, красивые и чуточку капризные.",
      mood: "Страсть и элегантность",
      season: "Круглый год",
    },
    {
      name: "Лаванда 'Прованская грёза'",
      image:
        "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&h=300&fit=crop",
      story:
        "Аромат детства и бабушкиного сада. Лаванда умеет превращать дом в spa-салон.",
      mood: "Спокойствие и уют",
      season: "Июнь - Август",
    },
    {
      name: "Подсолнухи 'Солнечный день'",
      image:
        "https://images.unsplash.com/photo-1597848212624-e5dc83de017d?w=400&h=300&fit=crop",
      story:
        "Эти солнышки следят за вами взглядом и дарят позитив даже в пасмурную погоду.",
      mood: "Оптимизм и энергия",
      season: "Июль - Сентябрь",
    },
    {
      name: "Лилии 'Белая магия'",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      story:
        "Величественные лилии знают толк в красоте. Они как аристократки цветочного мира.",
      mood: "Изысканность и чистота",
      season: "Июнь - Сентябрь",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-warm-peach/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-primary font-accent">звёздные</span>{" "}
            персонажи
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Познакомьтесь с нашими цветочными героями. У каждого свой характер,
            своя история и особый дар дарить эмоции.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flowers.map((flower, index) => (
            <Card
              key={index}
              className="border-0 gentle-shadow hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary">
                  {flower.season}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {flower.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 italic font-accent">
                  "{flower.story}"
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Icon
                      name="Heart"
                      size={14}
                      className="mr-1 text-primary"
                    />
                    <span>{flower.mood}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary text-primary hover:bg-primary/5"
                >
                  <Icon name="BookOpen" className="mr-2" size={14} />
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nature-green to-sunshine-yellow rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="font-accent text-3xl text-primary mb-4">
              🌿 Секрет нашей теплицы
            </div>
            <p className="font-heading text-xl md:text-2xl text-foreground mb-6">
              Мы не просто выращиваем цветы — мы воспитываем их характеры!
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Каждое растение получает персональный уход, классическую музыку и
              ежедневные комплименты. Результат? Цветы с особенной аурой!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Icon name="Camera" className="mr-2" />
              Виртуальная экскурсия по теплице
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlowerGallery;
