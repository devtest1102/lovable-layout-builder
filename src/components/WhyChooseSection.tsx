import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const reasons = [
  { title: "Professional AI tools", description: "Create a custom AI assistant that connects to WhatsApp, Instagram, Messenger, Telegram, WebChat widget, SMS and voice calls." },
  { title: "Multi-Omnichannel", description: "Add multiple instances of the same channel in one account and use them together in the same automation!" },
  { title: "Multiple integrations", description: "Integrates with Dify.ai, Cal.com, Make.com, ActiveCampaign, Microsoft Text-to-Speech, ElevenLabs, Webhooks, ChatGPT and APIs!" },
  { title: "AI Products", description: "Give your clients the ability to manage and update AI data on their own, no tech skills needed." },
  { title: "Workspaces", description: "Create and manage your clients accounts with easy from a single screen with specific permissions." },
  { title: "Double White Label", description: "Customize logos, domains & colors for each client. They'll think it's a custom system built just for them!" },
  { title: "Collaboration", description: "Create departments, assign chats & collaborate seamlessly - all within the platform!" },
  { title: "Chatbots", description: "Design intelligent Chatbots that can text, speak, listen, and even see. No coding required." },
  { title: "Voicebots", description: "Design intelligent Voicebots that make and receive calls around the clock with human-like conversation." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-large">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Why you should choose ReplyAgent?
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="flex gap-4 p-4 rounded-xl transition-colors hover:bg-white hover:shadow-md"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.3, type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              </motion.div>
              <div>
                <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
