import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: "📧",
    title: "We Integrate Seamlessly with the World's Most Popular Messaging Platforms!",
    description:
      "Integrate WhatsApp, Messenger, Instagram, Telegram, Webchat and Twilio to unlock your clients' potential to reach global sales, connecting with billions of people who use these messaging channels every day!",
  },
  {
    icon: "📈",
    title: "We're the Ultimate Powerhouse CRM for Sales, Marketing & Support.",
    description:
      "On our platform, you can create the most advanced Sales, Marketing, and Support automations, seamlessly integrating with any other platform. This gives you the power to offer any type of automation service to your clients!",
  },
  {
    icon: "🧠",
    title: "Can't Choose Between Chatbots or Voicebots? Get Both!",
    description:
      "The demand for Chat and Voice AI agents is exploding worldwide, and with us, you can build the most advanced Voice and Chat AI agents in just a few clicks! Unlike our competition, where you'll waste months figuring it out, we make automation fast, easy, and powerful, under a single platform.",
  },
];

const FeaturesIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" id="overview">
      <div className="container-large" ref={ref}>
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary font-semibold mb-4"
          >
            Exploding in Demand!
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            AI Assistants go far beyond simple Chatbots.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto"
          >
            They speak to your customers via <strong>Text</strong> or <strong>Voice</strong>, schedule appointments, recover abandoned carts, answer questions, qualify leads and much more. Everything you need to engage, support, and convert more, automatically and intelligently.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesIntro;
