import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container-large">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-gray-800">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Started for FREE</h3>
          <p className="text-gray-400 mb-6">No credit card required.</p>
          <Button size="lg" className="rounded-full px-8">Try it FREE!</Button>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">R</span>
              </div>
              <span className="font-bold text-xl text-white">REPLYAGENT</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Channels</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Messenger</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#crm" className="hover:text-white transition-colors">CRM</a></li>
              <li><a href="#white-label" className="hover:text-white transition-colors">White Label</a></li>
              <li><a href="#automation" className="hover:text-white transition-colors">Smart Flows</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          © 2025 ReplyAgent. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
