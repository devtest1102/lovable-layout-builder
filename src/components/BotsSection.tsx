import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import chatbotInterface from "@/assets/chatbot-interface.png";
import voicebotInterface from "@/assets/voicebot-interface.png";

const chatbotFeatures = [
  "WhatsApp, Instagram, Messenger, Telegram, Webchat and SMS!",
  "Chatbots with Auto-Listen: Instantly Understanding Audio!",
  "Chatbots with Automatic image recognition!",
  "Human-Like Responses with Natural Pauses!",
  "Effortless Transcription: Convert Text to Speech!",
  "AI That Can Send and Display Images Automatically!",
];

const voicebotFeatures = [
  "Design AI voice assistants powered by OpenAI's Realtime API for instant conversations.",
  "Call Recording: Capture and archive every conversation.",
  "Call Transfer: Seamlessly route calls to the right agents.",
  "Call Transcription: Convert calls into accurate transcripts.",
  "Functions: Execute live HTTP requests in real time.",
  "AI-Powered Summaries: Transform calls into smart recaps.",
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const BotsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-large space-y-32">
        {/* Chatbots */}
        <motion.div 
          id="chatbots" 
          className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-primary-foreground"
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Chatbots
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                The 4th Generation of Chatbots
              </motion.h3>
              <motion.p 
                className="text-primary-foreground/80 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Stop struggling with HUGE chatbots on other platforms. Switch to ReplyAgent and build with ease! 🚀
              </motion.p>
              <motion.ul 
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {chatbotFeatures.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.a 
                href="#" 
                className="inline-flex items-center gap-2 mt-8 font-semibold hover:gap-3 transition-all"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                whileHover={{ x: 5 }}
              >
                Learn More <Heart className="w-4 h-4 fill-current" />
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              <motion.img 
                src={chatbotInterface} 
                alt="Chatbot Interface" 
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Voicebots */}
        <motion.div 
          id="voicebots" 
          className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-primary-foreground"
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Voicebots
              </motion.span>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Make & Receive Calls with AI
              </motion.h3>
              <motion.p 
                className="text-primary-foreground/80 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Imagine a tireless 24/7 secretary. Our Voicebots never clock out, following your scripts flawlessly.
              </motion.p>
              <motion.ul 
                className="space-y-3"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {voicebotFeatures.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    variants={listItemVariants}
                  >
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -80, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-1"
            >
              <motion.img 
                src={voicebotInterface} 
                alt="Voicebot Interface" 
                className="rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BotsSection;
