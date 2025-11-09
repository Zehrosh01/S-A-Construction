import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { portfolio } from '../data/mockData';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolio.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolio.length) % portfolio.length);
  };

  return (
    <section id="portfolio" className="bg-earth-900 text-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">Our Portfolio</h2>
          <p className="section-subtitle text-earth-300">
            Explore our recently completed projects across Maharashtra
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[400px]">
                <img
                  src={portfolio[currentIndex].image}
                  alt={portfolio[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl font-bold mb-4">
                    {portfolio[currentIndex].title}
                  </h3>
                  <p className="text-xl text-earth-300 mb-6">
                    {portfolio[currentIndex].description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-earth-300">
                    <FaMapMarkerAlt className="text-primary-400 text-xl" />
                    <span>{portfolio[currentIndex].location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-earth-300">
                    <FaClock className="text-primary-400 text-xl" />
                    <span>Completed in {portfolio[currentIndex].duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <span className="text-earth-400">
                    {currentIndex + 1} / {portfolio.length}
                  </span>
                  <div className="flex-1 h-1 bg-earth-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-500 transition-all duration-300"
                      style={{ width: `${((currentIndex + 1) / portfolio.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-earth-900 p-4 rounded-full shadow-xl hover:bg-primary-600 hover:text-white transition-colors duration-300"
            aria-label="Previous project"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-earth-900 p-4 rounded-full shadow-xl hover:bg-primary-600 hover:text-white transition-colors duration-300"
            aria-label="Next project"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-2 mt-12">
          {portfolio.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 w-8'
                  : 'bg-earth-700 hover:bg-earth-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
