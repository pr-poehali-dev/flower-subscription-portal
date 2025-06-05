import { Card, CardContent } from "@/components/ui/card";

const FlowerGallery = () => {
  const bouquets = [
    {
      name: "Миниатюрное издание",
      description: "Букет из 11-25 стеблей",
      image:
        "https://cdn.poehali.dev/files/4026e864-7be6-4170-9c68-35f63d4fa8bc.png",
      category: "small",
    },
    {
      name: "Стандартный формат",
      description: "Букет из 25-43 стеблей",
      image:
        "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&h=600&fit=crop",
      category: "medium",
    },
    {
      name: "Сказка",
      description: "Букет более чем из 45 стеблей",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&h=600&fit=crop",
      category: "large",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-heading text-5xl font-normal text-foreground mb-4">
            Букеты
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bouquets.map((bouquet, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-50">
                <img
                  src={bouquet.image}
                  alt={bouquet.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-normal text-foreground mb-2">
                  {bouquet.name}
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  {bouquet.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowerGallery;
