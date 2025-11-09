import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 via-earth-900/70 to-earth-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Trusted Construction Partner Since 2013
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build Your Dream Home with{' '}
            <span className="text-primary-400">Trusted Experts</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-earth-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium residential construction services across Amravati and Maharashtra. 
            Quality craftsmanship, transparent pricing, on-time delivery.
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-primary-400 text-xl" />
              <span className="text-earth-100">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-primary-400 text-xl" />
              <span className="text-earth-100">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-primary-400 text-xl" />
              <span className="text-earth-100">200+ Happy Families</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button onClick={scrollToContact} className="btn-primary text-lg">
              Get a Free Quote
            </button>
            <a href="tel:+918551970098" className="btn-secondary text-lg flex items-center justify-center gap-2">
              <FaPhoneAlt />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        {/* <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
