import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-large">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Why you should choose ReplyAgent?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="flex gap-4"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
