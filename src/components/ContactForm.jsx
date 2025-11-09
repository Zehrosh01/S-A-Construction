// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
// import { contactInfo } from '../data/mockData';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitMessage('Thank you! We will contact you within 24 hours.');
//       setFormData({ name: '', phone: '', email: '', message: '' });

//       setTimeout(() => setSubmitMessage(''), 5000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="bg-white">
//       <div className="section-container">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="section-title">Get Your Free Quote</h2>
//           <p className="section-subtitle">
//             Share your project details and we'll get back to you within 24 hours
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div>
//               <h3 className="font-display text-2xl font-bold text-earth-900 mb-6">
//                 Get in Touch
//               </h3>
//               <p className="text-earth-600 text-lg mb-8">
//                 Ready to start your dream home project? Contact us today for a free consultation and detailed quotation.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="bg-primary-100 text-primary-600 p-4 rounded-lg">
//                   <FaPhone className="text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-earth-900 mb-1">Phone</h4>
//                   <a href={`tel:${contactInfo.phone}`} className="text-earth-600 hover:text-primary-600 transition-colors">
//                     {contactInfo.phone}
//                   </a>
//                   <p className="text-sm text-earth-500 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary-100 text-primary-600 p-4 rounded-lg">
//                   <FaEnvelope className="text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-earth-900 mb-1">Email</h4>
//                   <a href={`mailto:${contactInfo.email}`} className="text-earth-600 hover:text-primary-600 transition-colors">
//                     {contactInfo.email}
//                   </a>
//                   <p className="text-sm text-earth-500 mt-1">We'll respond within 24 hours</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="bg-primary-100 text-primary-600 p-4 rounded-lg">
//                   <FaMapMarkerAlt className="text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-earth-900 mb-1">Office</h4>
//                   <p className="text-earth-600">{contactInfo.address}</p>
//                   <p className="text-sm text-earth-500 mt-1">Visit us for in-person consultation</p>
//                 </div>
//               </div>
//             </div>

//             {/* Newsletter Signup */}
//             <div className="bg-gradient-to-br from-primary-50 to-earth-50 p-6 rounded-xl">
//               <h4 className="font-display text-lg font-bold text-earth-900 mb-2">
//                 Subscribe to Our Newsletter
//               </h4>
//               <p className="text-earth-600 text-sm mb-4">
//                 Get construction tips, design ideas, and special offers
//               </p>
//               <div className="flex gap-2">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
//                 />
//                 <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <form onSubmit={handleSubmit} className="bg-earth-50 p-8 rounded-2xl shadow-lg">
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-earth-700 font-medium mb-2">
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
//                     placeholder="Enter your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-earth-700 font-medium mb-2">
//                     Phone Number *
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
//                     placeholder="+91 98765 43210"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-earth-700 font-medium mb-2">
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-earth-700 font-medium mb-2">
//                     Project Details *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
//                     placeholder="Tell us about your construction project (plot size, type of home, budget, timeline, etc.)"
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full btn-primary text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   {isSubmitting ? (
//                     'Sending...'
//                   ) : (
//                     <>
//                       <FaPaperPlane />
//                       Request a Callback
//                     </>
//                   )}
//                 </button>

//                 {submitMessage && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
//                   >
//                     {submitMessage}
//                   </motion.div>
//                 )}

//                 <p className="text-sm text-earth-500 text-center">
//                   By submitting, you agree to our privacy policy
//                 </p>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;








import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { contactInfo } from '../data/mockData';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    phone: '',
    from_email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.service_tzuzies,
        import.meta.env.template_m0nvoyv,
        {
          from_name: formData.from_name,
          phone: formData.phone,
          from_email: formData.from_email,
          message: formData.message,
          to_email: contactInfo.email // Owner's email
        },
        import.meta.env.yqBKo-I3sLXUlwx6T
      );

      console.log('Email sent successfully:', result.text);
      
      // Success message
      setSubmitMessage('Thank you! We will contact you within 24 hours.');
      setIsError(false);
      
      // Clear form
      setFormData({ 
        from_name: '', 
        phone: '', 
        from_email: '', 
        message: '' 
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
      
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitMessage('Oops! Something went wrong. Please try again or call us directly.');
      setIsError(true);
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get Your Free Quote</h2>
          <p className="section-subtitle">
            Share your project details and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-earth-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-earth-600 text-lg mb-8">
                Ready to start your dream home project? Contact us today for a free consultation and detailed quotation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-lg">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-earth-600 hover:text-primary-600 transition-colors">
                    {contactInfo.phone}
                  </a>
                  <p className="text-sm text-earth-500 mt-1">Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-lg">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-earth-600 hover:text-primary-600 transition-colors">
                    {contactInfo.email}
                  </a>
                  <p className="text-sm text-earth-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 text-primary-600 p-4 rounded-lg">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-earth-900 mb-1">Office</h4>
                  <p className="text-earth-600">{contactInfo.address}</p>
                  <p className="text-sm text-earth-500 mt-1">Visit us for in-person consultation</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary-50 to-earth-50 p-6 rounded-xl">
              <h4 className="font-display text-lg font-bold text-earth-900 mb-2">
                Subscribe to Our Newsletter
              </h4>
              <p className="text-earth-600 text-sm mb-4">
                Get construction tips, design ideas, and special offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-earth-50 p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="from_name" className="block text-earth-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-earth-700 font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-earth-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-earth-700 font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-earth-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                    placeholder="Tell us about your construction project (plot size, type of home, budget, timeline, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane />
                      Request a Callback
                    </>
                  )}
                </button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${
                      isError 
                        ? 'bg-red-100 border-red-400 text-red-700' 
                        : 'bg-green-100 border-green-400 text-green-700'
                    } border px-4 py-3 rounded-lg`}
                  >
                    {submitMessage}
                  </motion.div>
                )}

                <p className="text-sm text-earth-500 text-center">
                  By submitting, you agree to our privacy policy
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

