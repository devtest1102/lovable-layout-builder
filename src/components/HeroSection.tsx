import { motion } from "framer-motion";
import whatsapp3d from "@/assets/whatsapp-3d.png";
import instagram3d from "@/assets/instagram-3d.png";
import chatgpt3d from "@/assets/chatgpt-3d.png";
import phone3d from "@/assets/phone-3d.png";
import chatBubble3d from "@/assets/chat-bubble-3d.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Floating Icons - Left Side */}
      <motion.div
        className="absolute left-0 top-1/4 w-32 md:w-48 -translate-x-1/4"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src={chatBubble3d} alt="Chat" className="w-full h-auto" />
      </motion.div>

      {/* Floating Icons - Right Side */}
      <motion.div
        className="absolute right-0 top-1/4 w-24 md:w-36 translate-x-1/4"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <img src={phone3d} alt="Phone" className="w-full h-auto" />
      </motion.div>

      <div className="container-large relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Double White Label CRM, Automation and AI Agents for the World's Favorite Messaging Apps
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Respond to <span className="font-bold text-foreground">Chats</span> and{" "}
            <span className="font-bold text-foreground">Calls</span>, all in one place. Manage{" "}
            <span className="font-bold text-foreground">CRM</span>,{" "}
            <span className="font-bold text-foreground">Live Chat</span>, and{" "}
            <span className="font-bold text-foreground">Pipelines</span> with our{" "}
            <span className="font-bold text-foreground">Smart Flows</span> to launch{" "}
            <span className="font-bold text-foreground">AI 4th Generation Chatbots</span> and{" "}
            <span className="font-bold text-foreground">AI Voicebots</span> under your own brand on the world's favorite messaging platforms.
          </motion.p>
        </div>

        {/* Floating Platform Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-4 md:gap-8 lg:gap-16 mt-8"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-24 md:w-32 lg:w-44"
          >
            <img src={whatsapp3d} alt="WhatsApp" className="w-full h-auto drop-shadow-xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="w-24 md:w-32 lg:w-44"
          >
            <img src={instagram3d} alt="Instagram" className="w-full h-auto drop-shadow-xl" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="w-24 md:w-32 lg:w-44"
          >
            <img src={chatgpt3d} alt="AI" className="w-full h-auto drop-shadow-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
