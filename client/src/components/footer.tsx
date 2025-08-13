import { motion } from "framer-motion";
import { Mountain, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-mining-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
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
                  href="mailto:info@mineralx.kz" 
                  className="hover:text-mining-orange transition-colors"
                  data-testid="link-email"
                >
                  info@mineralx.kz
                </a>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 text-mining-orange" size={16} />
                <a 
                  href="tel:+77771234567" 
                  className="hover:text-mining-orange transition-colors"
                  data-testid="link-phone"
                >
                  +7 (777) 123-45-67
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 text-mining-orange" size={16} />
                <span data-testid="text-location">Алматы, Казахстан</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="footer-social"
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text">Следите за нами</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-mining-light rounded-full flex items-center justify-center hover:bg-mining-orange hover:text-black transition-all duration-300"
                data-testid="link-linkedin"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-mining-light rounded-full flex items-center justify-center hover:bg-mining-orange hover:text-black transition-all duration-300"
                data-testid="link-telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-mining-light rounded-full flex items-center justify-center hover:bg-mining-orange hover:text-black transition-all duration-300"
                data-testid="link-youtube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
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
            © 2024 MineralX - Digital Mining & Metallurgy. Все права защищены.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
