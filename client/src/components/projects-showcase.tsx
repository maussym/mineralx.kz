import { motion } from "framer-motion";
import { 
  Zap, 
  Factory, 
  Monitor, 
  Wrench,
  Building,
  Truck
} from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function ProjectsShowcase() {
  // Placeholder structure for projects - will be populated with real data
  const projects = [
    {
      icon: Zap,
      title: "Цифровизация Производства",
      description: "Внедрение современных систем управления производственными процессами",
      status: "В разработке",
      technologies: ["IoT", "AI", "Cloud Computing"]
    },
    {
      icon: Factory,
      title: "Автоматизация Горнодобычи",
      description: "Комплексная автоматизация горнодобывающих операций",
      status: "Активный",
      technologies: ["Робототехника", "Машинное обучение", "Сенсоры"]
    },
    {
      icon: Monitor,
      title: "Система Мониторинга",
      description: "Платформа для мониторинга оборудования в реальном времени",
      status: "Завершен",
      technologies: ["Телематика", "Big Data", "Dashboard"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "text-green-400 bg-green-400/20";
      case "В разработке":
        return "text-yellow-400 bg-yellow-400/20";
      case "Завершен":
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                data-testid={`project-${index}`}
              >
                <Card className="glass-morphism p-6 rounded-xl hover:scale-105 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 mining-gradient rounded-lg flex items-center justify-center">
                        <IconComponent className="text-black" size={24} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 gradient-text">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-mining-orange/20 text-mining-orange rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
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