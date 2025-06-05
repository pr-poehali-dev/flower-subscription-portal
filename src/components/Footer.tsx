import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-primary/10 to-transparent py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Теплица
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Магазин, где цветы обретают душу, а подписчики — регулярную порцию
              счастья. Превращаем обычные дни в сказочные с 2024 года.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Icon name="Instagram" size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Icon name="Facebook" size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Icon name="MessageCircle" size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Подписка
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Подарочные карты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Корпоративным клиентам
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-4">
              Поддержка
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Часто задаваемые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Доставка и возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Уход за цветами
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Теплица. Все права защищены магией цветов.
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
