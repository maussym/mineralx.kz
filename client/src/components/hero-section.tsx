import { motion } from "framer-motion";
import { Rocket, ArrowDown, Cog, Factory, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center industrial-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-mining-dark to-mining-gray opacity-90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-testid="hero-content"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-title"
          >
            <span className="gradient-text">MineralX</span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-300">
              Цифровая Трансформация
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-gray-400">
              Горной Промышленности
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-testid="hero-description"
          >
            Объединяем лидеров цифровых технологий и промышленных гигантов для создания 
            будущего горнодобывающей и металлургической отраслей
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              className="mining-gradient px-8 py-4 rounded-lg font-semibold text-black hover:scale-105 transition-transform duration-300 animate-pulse-glow"
              data-testid="button-join-association"
            >
              <Rocket className="mr-2" size={20} />
              Присоединиться к Ассоциации
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("mission")}
              className="border-2 border-mining-orange px-8 py-4 rounded-lg font-semibold hover:bg-mining-orange hover:text-black transition-all duration-300"
              data-testid="button-learn-more"
            >
              <ArrowDown className="mr-2" size={20} />
              Узнать больше
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating mining icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10"
        >
          <Cog className="text-mining-orange opacity-20 text-4xl" size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20"
        >
          <Factory className="text-mining-gold opacity-20" size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20"
        >
          <Cpu className="text-mining-amber opacity-20" size={36} />
        </motion.div>
      </div>
    </section>
  );
}
