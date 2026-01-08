import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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

const BotsSection = () => {
  const chatRef = useRef(null);
  const voiceRef = useRef(null);
  const chatInView = useInView(chatRef, { once: true, margin: "-100px" });
  const voiceInView = useInView(voiceRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container-large space-y-32">
        {/* Chatbots */}
        <div ref={chatRef} id="chatbots" className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={chatInView ? { opacity: 1, x: 0 } : {}}
              className="flex-1 text-primary-foreground"
            >
              <span className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                Chatbots
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">The 4th Generation of Chatbots</h3>
              <p className="text-primary-foreground/80 mb-8">
                Stop struggling with HUGE chatbots on other platforms. Switch to ReplyAgent and build with ease! 🚀
              </p>
              <ul className="space-y-3">
                {chatbotFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 mt-8 font-semibold hover:gap-3 transition-all">
                Learn More <Heart className="w-4 h-4 fill-current" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={chatInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <img src={chatbotInterface} alt="Chatbot Interface" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>

        {/* Voicebots */}
        <div ref={voiceRef} id="voicebots" className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={voiceInView ? { opacity: 1, x: 0 } : {}}
              className="flex-1 text-primary-foreground"
            >
              <span className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                Voicebots
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Make & Receive Calls with AI</h3>
              <p className="text-primary-foreground/80 mb-8">
                Imagine a tireless 24/7 secretary. Our Voicebots never clock out, following your scripts flawlessly.
              </p>
              <ul className="space-y-3">
                {voicebotFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={voiceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <img src={voicebotInterface} alt="Voicebot Interface" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotsSection;
