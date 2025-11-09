// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaWhatsapp } from 'react-icons/fa';
// import { socialLinks } from '../data/mockData';

// const WhatsAppButton = () => {
//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent('Hi! I would like to know more about your construction services.');
//     window.open(`https://wa.me/${socialLinks.whatsapp}?text=${message}`, '_blank');
//   };

//   return (
//     <motion.button
//       onClick={handleWhatsAppClick}
//       className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-50 group"
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       aria-label="Contact us on WhatsApp"
//     >
//       <FaWhatsapp className="text-3xl" />
//       <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-earth-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//         Chat on WhatsApp
//       </span>
      
//       {/* Pulse Animation */}
//       <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
//     </motion.button>
//   );
// };

// export default WhatsAppButton;
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { socialLinks } from '../data/mockData';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to know more about your construction services.');
    window.open(`https://wa.me/${socialLinks.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors z-[9999] group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      
      {/* Tooltip - Hidden on Mobile, Visible on Desktop */}
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-earth-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-sm">
        Chat on WhatsApp
      </span>
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </motion.button>
  );
};

export default WhatsAppButton;
