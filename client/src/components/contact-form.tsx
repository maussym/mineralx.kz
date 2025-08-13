import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  companyName: z.string().min(1, "Название компании обязательно"),
  contactPerson: z.string().min(1, "Контактное лицо обязательно"),
  email: z.string().email("Некорректный email адрес"),
  phone: z.string().min(1, "Телефон обязателен"),
  businessArea: z.string().min(1, "Выберите область деятельности"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      businessArea: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // In a real application, this would send data to a backend service
      console.log("Form submission:", data);
      
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке заявки. Попробуйте еще раз.",
        variant: "destructive",
      });
    }
  };

  const businessAreas = [
    "IT-решения и цифровизация",
    "Горнодобывающая промышленность",
    "Металлургия",
    "Инжиниринг и консалтинг",
    "Автоматизация и робототехника",
    "Аналитика данных и ИИ",
    "Кибербезопасность",
    "Другое",
  ];

  return (
    <section id="contact" className="py-20 bg-mining-gray industrial-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="contact-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Присоединяйтесь к MineralX
          </h2>
          <p className="text-xl text-gray-300">
            Станьте частью будущего горнодобывающей и металлургической промышленности
          </p>
          <div className="w-24 h-1 mining-gradient mx-auto rounded-full mt-6" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-testid="contact-form"
        >
          <Card className="glass-morphism p-8 rounded-2xl">
            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">
                            Название компании
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="ООО 'Название компании'"
                              className="bg-mining-light border-gray-600 text-white placeholder-gray-400 focus:border-mining-orange"
                              data-testid="input-company-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPerson"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">
                            Контактное лицо
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Иван Иванов"
                              className="bg-mining-light border-gray-600 text-white placeholder-gray-400 focus:border-mining-orange"
                              data-testid="input-contact-person"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Kuat@telematika.kz"
                              className="bg-mining-light border-gray-600 text-white placeholder-gray-400 focus:border-mining-orange"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-gray-300">
                            Телефон
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+7 (771) 022-88-88"
                              className="bg-mining-light border-gray-600 text-white placeholder-gray-400 focus:border-mining-orange"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="businessArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Область деятельности
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger 
                              className="bg-mining-light border-gray-600 text-white focus:border-mining-orange"
                              data-testid="select-business-area"
                            >
                              <SelectValue placeholder="Выберите область деятельности" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-mining-light border-gray-600">
                            {businessAreas.map((area) => (
                              <SelectItem key={area} value={area} className="text-white hover:bg-mining-gray">
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">
                          Сообщение
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Расскажите о вашей компании и интересе к участию в ассоциации MineralX..."
                            className="bg-mining-light border-gray-600 text-white placeholder-gray-400 focus:border-mining-orange resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="mining-gradient px-8 py-4 rounded-lg font-semibold text-black hover:scale-105 transition-transform duration-300 animate-pulse-glow"
                      data-testid="button-submit-form"
                    >
                      <Send className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-400 text-center">
                    Нажимая кнопку "Отправить заявку", вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
