import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Search, 
  Thermometer,
  Eye,
  Activity
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import robotImage from "@assets/image_1755069128744.png";
import conveyorImage from "@assets/image_1755069138987.png";
import scannerImage from "@assets/image_1755069151056.png";

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
      image: robotImage,
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
      image: conveyorImage,
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
      image: scannerImage,
      company: "Turan Telematika",
      status: "В разработке"
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
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-80 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      
                      {/* Project Content */}
                      <div className="p-8">
                        <div className="flex items-center mb-4">
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
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-mining-orange">Ключевые возможности:</h4>
                          {project.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-start"
                            >
                              <div className="w-2 h-2 mining-gradient rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
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