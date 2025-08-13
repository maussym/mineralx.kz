import { motion } from "framer-motion";
import { 
  Rocket, 
  Network, 
  Medal, 
  Trophy, 
  Puzzle 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Benefits() {
  const benefits = [
    {
      icon: Rocket,
      title: "Передовые Технологии",
      description: "Доступ к инновационным технологиям и решениям от ведущих компаний отрасли"
    },
    {
      icon: Network,
      title: "Деловые Связи",
      description: "Расширение деловых связей и создание новых стратегических партнерств"
    },
    {
      icon: Medal,
      title: "Отраслевые Стандарты",
      description: "Участие в формировании отраслевых стандартов и лучших практик"
    },
    {
      icon: Trophy,
      title: "Конкурентоспособность",
      description: "Повышение конкурентоспособности и рыночной стоимости компании"
    },
    {
      icon: Puzzle,
      title: "Совместные Решения",
      description: "Совместное решение сложных отраслевых задач и вызовов"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-mining-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="benefits-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Преимущества Участия
          </h2>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                data-testid={`benefit-${index}`}
              >
                <Card className="glass-morphism p-8 rounded-xl hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 mining-gradient rounded-full flex items-center justify-center mb-6 mx-auto">
                      <IconComponent className="text-black" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
