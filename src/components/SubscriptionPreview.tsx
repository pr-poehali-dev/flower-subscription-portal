import { Card, CardContent } from "@/components/ui/card";

const SubscriptionPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-5xl font-normal text-foreground mb-8">
            Подписка
          </h2>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Регулярная доставка свежих букетов прямо к вашему порогу. Каждый
              букет — это новая история, рассказанная языком цветов.
            </p>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-light text-foreground mb-1">
                    1990₽
                  </div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground mb-1">
                    2-3
                  </div>
                  <div className="text-sm text-muted-foreground">букета</div>
                </div>
                <div>
                  <div className="text-2xl font-light text-foreground mb-1">
                    Еженедельно
                  </div>
                  <div className="text-sm text-muted-foreground">доставка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPreview;
