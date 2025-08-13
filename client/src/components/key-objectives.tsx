import { motion } from "framer-motion";
import { 
  Lightbulb, 
  ArrowLeftRight, 
  Award, 
  Handshake, 
  TrendingUp, 
  Shield 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function KeyObjectives() {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Стимулирование Инноваций",
      description: "Поддержка исследований и разработок новых цифровых решений: ИИ, машинное обучение, IoT, большие данные и блокчейн"
    },
    {
      icon: ArrowLeftRight,
      title: "Обмен Знаниями",
      description: "Создание площадки для обмена передовым опытом, технологиями и проведение образовательных программ"
    },
    {
      icon: Award,
      title: "Стандартизация",
      description: "Разработка единых стандартов и лучших практик цифровизации для обеспечения совместимости решений"
    },
    {
      icon: Handshake,
      title: "Коллаборация",
      description: "Содействие созданию совместных проектов и стратегических партнерств между технологическими компаниями"
    },
    {
      icon: TrendingUp,
      title: "Привлечение Инвестиций",
      description: "Привлечение инвестиций в цифровые проекты и стартапы, направленные на развитие отрасли"
    },
    {
      icon: Shield,
      title: "Представительство",
      description: "Защита и продвижение интересов участников на государственном и международном уровнях"
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-black to-mining-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="objectives-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Ключевые Цели
          </h2>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((objective, index) => {
            const IconComponent = objective.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                data-testid={`objective-${index}`}
              >
                <Card className="glass-morphism p-6 rounded-xl hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 mining-gradient rounded-full flex items-center justify-center mb-4 mx-auto">
                      <IconComponent className="text-black" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 gradient-text">
                      {objective.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {objective.description}
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
