import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-mining-dark to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="mission-vision-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Миссия и Видение
          </h2>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            data-testid="mission-card"
          >
            <Card className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 mining-gradient rounded-full flex items-center justify-center mr-4">
                    <Target className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Миссия</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Содействие всесторонней цифровизации горнодобывающей и металлургической 
                  промышленности посредством коллаборации, обмена знаниями, разработки передовых 
                  решений и внедрения лучших практик, обеспечивая устойчивое развитие и инновационный рост.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            data-testid="vision-card"
          >
            <Card className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 mining-gradient rounded-full flex items-center justify-center mr-4">
                    <Eye className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">Видение</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Стать ведущей платформой, которая объединяет экспертизу и ресурсы для создания 
                  экосистемы цифровых инноваций, способствующей становлению горнодобывающей и 
                  металлургической промышленности как высокотехнологичной, безопасной и экологически 
                  ответственной отрасли будущего.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
