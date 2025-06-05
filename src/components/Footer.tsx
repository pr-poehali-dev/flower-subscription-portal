const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-normal text-foreground mb-4">
              Теплица
            </h3>
            <p className="text-muted-foreground font-light max-w-md">
              Цветочная студия, где каждый букет создаётся с особым вниманием к
              деталям и эмоциям.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-normal text-foreground mb-4">
              Каталог
            </h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Букеты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Подписка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Композиции
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-normal text-foreground mb-4">
              Контакты
            </h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Связаться
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  О нас
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-12">
          <p className="text-muted-foreground text-sm font-light">
            © 2024 Теплица. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
