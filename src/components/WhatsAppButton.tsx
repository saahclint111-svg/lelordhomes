import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "Hi Le Lörd Homes, I've visited your website and I'd like to enquire about your property services.",
}: WhatsAppButtonProps) {
  if (!whatsappNumber) return null;

  const href = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1fb855] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={26} aria-hidden="true" />
      </motion.a>
    </AnimatePresence>
  );
}
