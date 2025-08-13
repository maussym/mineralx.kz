import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, Lightbulb, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Partnership() {
  const partnershipAreas = [
    {
      icon: BookOpen,
      title: "Научные исследования",
      description: "Совместные исследовательские проекты в области цифровизации горной промышленности"
    },
    {
      icon: Users,
      title: "Подготовка кадров",
      description: "Образовательные программы и стажировки для специалистов горнодобывающей отрасли"
    },
    {
      icon: Lightbulb,
      title: "Инновационные решения",
      description: "Разработка передовых технологий для модернизации производственных процессов"
    },
    {
      icon: Target,
      title: "Консалтинг",
      description: "Экспертная поддержка и консультации по вопросам цифровой трансформации"
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="partnership-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Стратегическое Сотрудничество
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Наша ассоциация гордится партнерством с ведущими образовательными учреждениями
          </p>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Main Partnership Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
          data-testid="main-partnership"
        >
          <Card className="glass-morphism rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* University Info */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-2">
                      Nazarbayev University
                    </h3>
                    <p className="text-mining-orange font-semibold">
                      Стратегический партнер
                    </p>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Ведущий исследовательский университет Казахстана, который играет ключевую роль 
                    в подготовке высококвалифицированных специалистов и проведении научных исследований 
                    для цифровой трансформации горнодобывающей и металлургической промышленности.
                  </p>

                  <div className="flex items-center text-mining-orange">
                    <Award className="mr-2" size={20} />
                    <span className="font-semibold">Аккредитован международными организациями</span>
                  </div>
                </div>

                {/* Partnership Areas */}
                <div className="bg-mining-dark p-8 lg:p-12">
                  <h4 className="text-2xl font-bold text-mining-orange mb-8">
                    Области сотрудничества
                  </h4>
                  
                  <div className="space-y-6">
                    {partnershipAreas.map((area, index) => {
                      const IconComponent = area.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                          data-testid={`partnership-area-${index}`}
                        >
                          <div className="w-10 h-10 mining-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <IconComponent className="text-black" size={20} />
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold text-white mb-2">
                              {area.title}
                            </h5>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {area.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
          data-testid="partnership-benefits"
        >
          <h4 className="text-2xl font-bold gradient-text mb-8">
            Преимущества партнерства
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-morphism p-6 rounded-xl">
              <div className="w-12 h-12 mining-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-black" size={24} />
              </div>
              <h5 className="text-lg font-semibold text-mining-orange mb-3">
                Академическая экспертиза
              </h5>
              <p className="text-gray-300 text-sm">
                Доступ к передовым научным разработкам и экспертизе ведущих ученых
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-xl">
              <div className="w-12 h-12 mining-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-black" size={24} />
              </div>
              <h5 className="text-lg font-semibold text-mining-orange mb-3">
                Талантливые кадры
              </h5>
              <p className="text-gray-300 text-sm">
                Подготовка и привлечение квалифицированных специалистов для отрасли
              </p>
            </div>

            <div className="glass-morphism p-6 rounded-xl">
              <div className="w-12 h-12 mining-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="text-black" size={24} />
              </div>
              <h5 className="text-lg font-semibold text-mining-orange mb-3">
                Инновационный потенциал
              </h5>
              <p className="text-gray-300 text-sm">
                Совместная разработка инновационных решений для индустрии 4.0
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}