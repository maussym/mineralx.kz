import { motion } from "framer-motion";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-mining-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="footer-brand"
          >
            <div className="flex items-center space-x-3 mb-4">
              <Mountain className="text-mining-orange text-2xl" />
              <span className="text-2xl font-bold gradient-text">MineralX</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Цифровая трансформация горнодобывающей и металлургической промышленности
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="footer-contacts"
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Mail className="mr-2 text-mining-orange" size={16} />
                <a 
                  href="mailto:Kuat@telematika.kz" 
                  className="hover:text-mining-orange transition-colors"
                  data-testid="link-email"
                >
                  Kuat@telematika.kz
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-mining-orange" size={16} />
                <a 
                  href="tel:+77710228888" 
                  className="hover:text-mining-orange transition-colors"
                  data-testid="link-phone"
                >
                  +7 (771) 022-88-88
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 text-mining-orange" size={16} />
                <span data-testid="text-location">г. Астана, Казахстан</span>
              </p>
            </div>
          </motion.div>
          

        </div>
        
        <motion.div
          className="border-t border-mining-light mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          data-testid="footer-copyright"
        >
          <p className="text-gray-400">
            © 2025 MineralX - Digital Mining & Metallurgy. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
