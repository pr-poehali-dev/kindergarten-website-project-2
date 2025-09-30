import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const methodologies = [
    {
      icon: "Blocks",
      title: "Игровая методика",
      description: "Обучение через игру помогает детям развивать воображение и социальные навыки"
    },
    {
      icon: "BookOpen",
      title: "Методика Монтессори",
      description: "Индивидуальный подход к каждому ребенку, развитие самостоятельности"
    },
    {
      icon: "Palette",
      title: "Творческое развитие",
      description: "Рисование, лепка, аппликации для развития мелкой моторики и креативности"
    },
    {
      icon: "Music",
      title: "Музыкальные занятия",
      description: "Развитие слуха, чувства ритма и эмоционального интеллекта"
    }
  ];

  const achievements = [
    { icon: "Trophy", text: "Победители городского конкурса рисунка 2024" },
    { icon: "Star", text: "15 детей подготовлено к школе с отличными результатами" },
    { icon: "Award", text: "Участие в театральных постановках для родителей" },
    { icon: "Heart", text: "100% положительных отзывов от родителей" }
  ];

  const gallery = [
    { url: "/img/28ce6887-7e38-4358-920a-dcfd244f2a1b.jpg", title: "Игровые занятия" },
    { url: "/img/d81b6ae8-758c-48c9-8af6-d4a4fb1df5e4.jpg", title: "Наша группа" },
    { url: "/img/28ce6887-7e38-4358-920a-dcfd244f2a1b.jpg", title: "Творчество детей" },
    { url: "/img/d81b6ae8-758c-48c9-8af6-d4a4fb1df5e4.jpg", title: "Праздники" }
  ];

  const infoForParents = [
    { title: "Режим дня", content: "7:30-8:00 Прием детей\n8:00-8:30 Завтрак\n8:30-10:00 Занятия\n10:00-12:00 Прогулка" },
    { title: "Что приносить в садик", content: "Сменная одежда, удобная обувь, расческа, носовые платки" },
    { title: "Подготовка к школе", content: "Занятия проводятся 3 раза в неделю, охватывают чтение, математику, письмо" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">🎨 Детский сад</div>
            <div className="hidden md:flex gap-6">
              {["home", "about", "methods", "achievements", "gallery", "info", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-all ${
                    activeSection === section ? "text-primary font-semibold" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "about" && "Обо мне"}
                  {section === "methods" && "Методики"}
                  {section === "achievements" && "Достижения"}
                  {section === "gallery" && "Фотогалерея"}
                  {section === "info" && "Родителям"}
                  {section === "contact" && "Контакты"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Развитие и воспитание
            <span className="block text-primary mt-2">с любовью и заботой</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Профессиональный подход к образованию и развитию каждого ребенка. 
            Создаем условия для гармоничного роста маленьких личностей.
          </p>
          <Button onClick={() => scrollToSection("contact")} size="lg" className="text-lg px-8">
            Связаться со мной
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Обо мне</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Меня зовут Елена Петрова, и я воспитатель с 12-летним стажем работы. 
                Моя страсть — помогать детям познавать мир через игру и творчество.
              </p>
              <p className="text-lg text-foreground/80 mb-4">
                Имею высшее педагогическое образование и регулярно повышаю квалификацию 
                на курсах современных методик дошкольного образования.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" size={24} />
                  <span className="font-semibold">12 лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="font-semibold">150+ выпускников</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">Высшая категория</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="/img/28ce6887-7e38-4358-920a-dcfd244f2a1b.jpg" 
                alt="Воспитатель с детьми" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4 bg-gradient-to-b from-accent/20 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Методики обучения и развития</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Использую современные и проверенные методики для всестороннего развития детей
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={method.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-foreground/70">{method.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Достижения воспитанников</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="p-6 flex items-start gap-4 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-secondary/20 p-3 rounded-xl shrink-0">
                  <Icon name={achievement.icon} className="text-secondary" size={28} />
                </div>
                <p className="text-lg text-foreground/80">{achievement.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Фото из жизни группы</h2>
          <p className="text-center text-foreground/70 mb-12">Моменты счастливого детства</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((photo, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl aspect-square animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Информация для родителей</h2>
          <div className="space-y-6">
            {infoForParents.map((info, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  {info.title}
                </h3>
                <p className="text-foreground/80 whitespace-pre-line">{info.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-accent/20 to-primary/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Контакты</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Буду рада ответить на ваши вопросы и помочь в развитии вашего ребенка
          </p>
          <Card className="p-8 space-y-6">
            <div className="flex items-center gap-4 justify-center">
              <Icon name="Phone" className="text-primary" size={24} />
              <span className="text-lg">+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Icon name="Mail" className="text-primary" size={24} />
              <span className="text-lg">elena.petrova@kindergarten.ru</span>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Icon name="MapPin" className="text-primary" size={24} />
              <span className="text-lg">Детский сад №15, группа "Солнышко"</span>
            </div>
            <Button size="lg" className="w-full mt-4">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать сообщение
            </Button>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-white/80">
            © 2024 Елена Петрова - Воспитатель детского сада. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;