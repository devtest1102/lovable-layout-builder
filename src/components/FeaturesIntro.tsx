import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const FeaturesIntro = () => {
  return (
    <section className="section-padding bg-background" id="overview">
      <div className="container-large">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-primary font-semibold mb-4">
            Exploding in Demand!
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            AI Assistants go far beyond simple Chatbots.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg mt-4 max-w-3xl mx-auto"
          >
            They speak to your customers via <strong>Text</strong> or <strong>Voice</strong>, schedule appointments, recover abandoned carts, answer questions, qualify leads and much more. Everything you need to engage, support, and convert more, automatically and intelligently.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6"
            >
              <motion.div 
                className="text-5xl mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesIntro;
