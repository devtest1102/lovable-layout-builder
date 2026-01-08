import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
    reverse: false,
  },
  {
    badge: "Faster responses",
    title: "AI-powered instant replies to every message, 24/7 on autopilot!",
    description:
      "Be lightning-quick to respond to every lead, no matter which messaging channel they choose. It's the lightning-fast way to win customers faster than ever and never drop a potential lead!",
    image: whatsappChat,
    reverse: true,
  },
  {
    badge: "Increase customer satisfaction",
    title: "Skyrocket customer satisfaction while cutting costs",
    description:
      "Don't want to dig into your pockets for new hires? No worries! Automate those customer requests and provide fast responses to your customers questions, while keeping everyone happy and on budget.",
    image: telegramChat,
    reverse: false,
  },
  {
    badge: "Increase in sales conversion",
    title: "Increase your conversion rate by up to 89%",
    description:
      "Why complicate things? Our hybrid chatbot lets customers shop, order, and set up meetings effortlessly, all through their favorite messaging app!",
    image: whatsappChat,
    reverse: true,
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-large space-y-24">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} benefit={benefit} index={index} />
        ))}
      </div>
    </section>
  );
};

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        benefit.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-20`}
    >
      <motion.div
        initial={{ opacity: 0, x: benefit.reverse ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <span className="badge-green mb-4">{benefit.badge}</span>
        <h3 className="text-3xl md:text-4xl font-bold mt-4 mb-6">{benefit.title}</h3>
        <p className="text-muted-foreground text-lg">{benefit.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: benefit.reverse ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1"
      >
        <img
          src={benefit.image}
          alt={benefit.title}
          className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default BenefitsSection;
