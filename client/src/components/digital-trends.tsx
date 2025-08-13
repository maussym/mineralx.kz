import { motion } from "framer-motion";
import { Bot, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DigitalTrends() {
  const trendFeatures = [
    {
      trend: "automation",
      features: [
        "Бесперебойная работа 24/7",
        "Оптимизация логистики",
        "Минимизация рисков безопасности",
        "Снижение отходов и энергопотребления"
      ]
    },
    {
      trend: "ai",
      features: [
        "Предиктивное обслуживание",
        "Оптимизация в реальном времени",
        "Прогнозирование рисков",
        "Экологическая оптимизация"
      ]
    }
  ];

  return (
    <section id="trends" className="py-20 bg-mining-gray industrial-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="trends-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Цифровые Тренды
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Две ключевые тенденции будут формировать ландшафт горнодобывающей промышленности в ближайшие 5 лет
          </p>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full mt-6" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Trend 1: Automation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            data-testid="automation-trend"
          >
            <Card className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 mining-gradient rounded-full flex items-center justify-center mr-4">
                    <Bot className="text-black" size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">Автономные Системы</h3>
                    <p className="text-gray-400">Сквозная автоматизация</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  От беспилотных карьерных самосвалов и буровых установок до роботизированных 
                  складских операций и автоматизированных линий переработки.
                </p>
                
                <div className="space-y-4">
                  {trendFeatures[0].features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-testid={`automation-feature-${index}`}
                    >
                      <div className="w-3 h-3 mining-gradient rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Trend 2: AI & Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            data-testid="ai-trend"
          >
            <Card className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 mining-gradient rounded-full flex items-center justify-center mr-4">
                    <Brain className="text-black" size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">ИИ и Аналитика</h3>
                    <p className="text-gray-400">Продвинутый анализ данных</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Сбор и анализ огромных массивов данных для реализации предиктивного обслуживания, 
                  оптимизации процессов и улучшения геологоразведки.
                </p>
                
                <div className="space-y-4">
                  {trendFeatures[1].features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-testid={`ai-feature-${index}`}
                    >
                      <div className="w-3 h-3 mining-gradient rounded-full mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
