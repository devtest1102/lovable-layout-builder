import { motion } from "framer-motion";
import instagramChat from "@/assets/instagram-chat.png";
import whatsappChat from "@/assets/whatsapp-chat.png";
import telegramChat from "@/assets/telegram-chat.png";

const benefits = [
  {
    badge: "Increase lead generation",
    title: "The fastest lead generation method in the market",
    description:
      "Just by receiving the first message, ReplyAgent can collect the legal consent, full name, avatar image and phone number of the contact. No buggy old school forms. Your clients contact list will thank you later!",
    image: instagramChat,
  },
  {
    badge: "Faster responses",
    title: "AI-powered instant replies to every message, 24/7 on autopilot!",
    description:
      "Be lightning-quick to respond to every lead, no matter which messaging channel they choose. It's the lightning-fast way to win customers faster than ever and never drop a potential lead!",
    image: whatsappChat,
  },
  {
    badge: "Increase customer satisfaction",
    title: "Skyrocket customer satisfaction while cutting costs",
    description:
      "Don't want to dig into your pockets for new hires? No worries! Automate those customer requests and provide fast responses to your customers questions, while keeping everyone happy and on budget.",
    image: telegramChat,
  },
  {
    badge: "Increase in sales conversion",
    title: "Increase your conversion rate by up to 89%",
    description:
      "Why complicate things? Our hybrid chatbot lets customers shop, order, and set up meetings effortlessly, all through their favorite messaging app!",
    image: whatsappChat,
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-large space-y-32">
        {benefits.map((benefit, index) => {
          const isReversed = index % 2 === 1;
          
          return (
            <div
              key={index}
              className={`flex flex-col ${
                isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              <motion.div
                initial={{ opacity: 0, x: isReversed ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <motion.span 
                  className="badge-green mb-4 inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {benefit.badge}
                </motion.span>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mt-4 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {benefit.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {benefit.description}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isReversed ? -100 : 100, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex-1"
              >
                <motion.img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSection;
