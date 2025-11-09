import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/mockData';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Building trust through quality, transparency, and commitment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex gap-4 p-6 rounded-lg hover:bg-earth-50 transition-colors duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 text-4xl">{item.icon}</div>
              <div>
                <h3 className="font-display text-lg font-bold text-earth-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-earth-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-earth-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
              200+
            </div>
            <div className="text-earth-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
              10+
            </div>
            <div className="text-earth-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
              95%
            </div>
            <div className="text-earth-600 font-medium">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
              100%
            </div>
            <div className="text-earth-600 font-medium">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
