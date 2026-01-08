import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import liveChatDashboard from "@/assets/live-chat-dashboard.png";
import crmPipeline from "@/assets/crm-pipeline.png";
import smartFlow from "@/assets/smart-flow.png";
import whiteLabel from "@/assets/white-label.png";

const products = [
  {
    badge: "Live Chat",
    title: "Every conversation, from all channels, in one Inbox",
    description:
      "An Inbox for Live Chatting is included with every account right out of the box. Find the sweet spot between letting chatbots do their thing and keeping that human touch alive by automating the chat distribution between your departments or agents. 😄",
    image: liveChatDashboard,
    id: "live-chat",
  },
  {
    badge: "CRM",
    title: "Automated Sales Pipelines",
    description:
      "Fully automated Pipelines and Customer Relationship Management is included with every account right out of the box. This means you can effortlessly handle your sales, contacts, and customer support hassle-free! 🚀",
    image: crmPipeline,
    id: "crm",
  },
  {
    badge: "Automation",
    title: "Smart Flow builder",
    description:
      "Build personalized, automated chats, responses, actions, and even add some fancy conditional logic – all in a snap. It's like a magic wand for saving time, boosting customer happiness, and ramping up those sales. 🚀📱😄",
    image: smartFlow,
    id: "automation",
  },
  {
    badge: "White Label",
    title: "Double White Label!",
    description:
      "The only platform with exclusive Double White Label! Choose to customize your agency's branding across all Workspaces or tailor each account independently with its own logo, colors, and domain. You have complete control to create a fully personalized experience!",
    image: whiteLabel,
    id: "white-label",
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-large space-y-32">
        {products.map((product, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={index}
              id={product.id}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {product.badge}
                </motion.span>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mt-4 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-lg mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {product.description}
                </motion.p>
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <Heart className="w-4 h-4 fill-primary" />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isReversed ? -100 : 100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="flex-1"
              >
                <motion.img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.03, y: -10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductsSection;
