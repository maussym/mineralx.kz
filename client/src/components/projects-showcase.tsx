import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Search, 
  Thermometer,
  Eye,
  Activity,
  MapPin
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function ProjectsShowcase() {
  const projects = [
    {
      icon: Shield,
      title: "Взрывозащищенный робот для мониторинга",
      subtitle: "Производственные зоны повышенной опасности",
      description: "Интеллектуальный контроль опасных зон, пунктов сбора легковоспламеняющихся, взрывоопасных, токсичных веществ, химических предприятий и подземных помещений.",
      features: [
        "Инфракрасное измерение температуры оборудования",
        "Обнаружение утечек вещества",
        "Мониторинг загазованности и запыленности",
        "Система рельсов для автономного перемещения 24/7"
      ],
      company: "Turan Telematika",
      status: "Активный"
    },
    {
      icon: Thermometer,
      title: "Тепловизионная система предотвращения",
      subtitle: "Порыва конвейерной ленты",
      description: "Революционная технология с эффективностью выше существующих решений (20-30%). Предотвращает миллионные убытки от простоев производства.",
      features: [
        "Непрерывное тепловизионное сканирование",
        "Программно-аппаратный комплекс",
        "Подтвержденная эффективность в реальных условиях",
        "Неприхотливость в эксплуатации"
      ],
      company: "Turan Telematika",
      status: "Внедрен"
    },
    {
      icon: Search,
      title: "Сканер для бесконтактной оценки",
      subtitle: "Состояния футеровки и наполняемости сталь-ковшей",
      description: "Замена ручной инспекции (99% случаев) автоматизированным решением. Устранение простоев и убытков от неэффективного контроля.",
      features: [
        "Непрерывное сканирование каждые 8 секунд",
        "Online измерение состояния футеровки",
        "Технологии лидара и машинного зрения",
        "Портативная подвесная конструкция"
      ],
      company: "Turan Telematika",
      status: "В разработке"
    },
    {
      icon: MapPin,
      title: "Автоматизированная маркшейдерская съемка",
      subtitle: "Шахтных пространств с роботизированным комплексом MAPK-1",
      description: "Решение для горнодобывающих предприятий при нехватке маркшейдеров. Автоматизация маркшейдерской съемки с использованием технологии объемных твердых точек лазерного сканирования.",
      features: [
        "Лазерное сканирование для повышения безопасности в опасных зонах",
        "Повышение информативности маркшейдерской съемки",
        "Привязка к действующей системе координат заказчика",
        "Получение данных в стандартных форматах (.bin, .txt, .las, .dxf и др.)",
        "Более точный расчет объемов и сопоставление план-факт",
        "3D-визуализация и оперативное измерение параметров"
      ],
      company: "Turan Telematika",
      status: "Активный"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "text-green-400 bg-green-400/20";
      case "В разработке":
        return "text-yellow-400 bg-yellow-400/20";
      case "Внедрен":
        return "text-blue-400 bg-blue-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black to-mining-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="projects-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Наши Проекты
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Реализованные и текущие проекты цифровой трансформации в горнодобывающей отрасли
          </p>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full mt-6" />
        </motion.div>
        
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                data-testid={`project-${index}`}
              >
                <Card className="glass-morphism rounded-2xl overflow-hidden hover:scale-102 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-16 h-16 mining-gradient rounded-xl flex items-center justify-center mr-4">
                            <IconComponent className="text-black" size={32} />
                          </div>
                          <div>
                            <p className="text-mining-orange text-sm font-medium mb-1">{project.company}</p>
                            <h3 className="text-2xl font-bold gradient-text">
                              {project.title}
                            </h3>
                            <p className="text-mining-gold text-lg font-medium">
                              {project.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-mining-orange">
                          {index === 3 ? "Преимущества технологии:" : "Ключевые возможности:"}
                        </h4>
                        {project.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 mining-gradient rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}

                        {index === 3 && (
                          <div className="mt-6 p-4 bg-mining-orange/10 rounded-lg border border-mining-orange/20">
                            <h5 className="text-mining-orange font-semibold mb-2">MAPK-1 Преимущества:</h5>
                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                              <div>• Более точный расчет объемов</div>
                              <div>• Сопоставление плана и факта</div>
                              <div>• Определение отклонений</div>
                              <div>• Расчет объема переотбойки</div>
                              <div>• Оперативное измерение</div>
                              <div>• 3D-визуализация</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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