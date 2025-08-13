import { motion } from "framer-motion";
import { 
  Cloud, 
  BarChart3, 
  Satellite, 
  Settings, 
  Shield, 
  QrCode,
  ShoppingCart,
  Factory,
  Database,
  Cpu,
  GraduationCap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import nazarbayevLogo from "@assets/image_1755070509295.png";

export default function MemberCompanies() {
  const companies = [
    {
      name: "Wintel",
      icon: Cloud,
      description: "Комплексные IT-решения, облачные технологии, инфраструктурные сервисы и кибербезопасность"
    },
    {
      name: "Win X",
      icon: BarChart3,
      description: "Передовые решения для анализа данных, оптимизации процессов и систем управления производством"
    },
    {
      name: "Turan Telematika",
      icon: Satellite,
      description: "Телематические системы, мониторинг транспорта и оборудования для повышения операционной эффективности"
    },
    {
      name: "Core24",
      icon: Settings,
      description: "Специализированные программные продукты для управления активами, производственного планирования и диспетчеризации"
    },
    {
      name: "CyberX",
      icon: Shield,
      description: "Кибербезопасность промышленных систем и защита критически важной инфраструктуры"
    },
    {
      name: "QR Systems",
      icon: QrCode,
      description: "Инновационные решения для автоматизации учета, логистики и управления цепочками поставок"
    },
    {
      name: "Mitwork",
      icon: ShoppingCart,
      description: "Платформа управления закупками, специализирующаяся на горнодобывающей индустрии"
    },
    {
      name: "МЭК-Астана",
      icon: Factory,
      description: "Крупная инжиниринговая компания с глубокой экспертизой в проектировании и модернизации промышленных объектов"
    },
    {
      name: "Akashi Data Center",
      icon: Database,
      description: "Современные услуги по хранению, обработке и управлению большими данными с надежной инфраструктурой"
    },
    {
      name: "Redline Digital",
      icon: Cpu,
      description: "Передовые решения по электронному оборудованию для шахт: сенсоры, системы связи и автоматизации"
    },
    {
      name: "Nazarbayev University",
      icon: GraduationCap,
      description: "Ведущий исследовательский университет Казахстана, партнер в области научных исследований и подготовки кадров для цифровой трансформации промышленности",
      logo: nazarbayevLogo,
      isSpecial: true
    }
  ];

  return (
    <section id="members" className="py-20 bg-mining-gray industrial-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="members-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Компании-Участники
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ведущие компании, каждая из которых вносит свой уникальный вклад в цифровую трансформацию
          </p>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full mt-6" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => {
            const IconComponent = company.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: "var(--mining-orange)" }}
                data-testid={`company-${index}`}
              >
                <Card className="glass-morphism p-6 rounded-xl hover:scale-105 hover:border-mining-orange transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {company.isSpecial && company.logo ? (
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 bg-white p-1">
                          <img 
                            src={company.logo} 
                            alt={company.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 mining-gradient rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="text-black" size={24} />
                        </div>
                      )}
                      <h3 className="text-xl font-bold gradient-text">
                        {company.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {company.description}
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
