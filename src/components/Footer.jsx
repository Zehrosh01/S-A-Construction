import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { socialLinks, contactInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Construction<span className="text-primary-400">Pro</span>
            </h3>
            <p className="text-earth-400 mb-6">
              Building dreams into reality with over 10 years of excellence in residential construction across Maharashtra.
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-earth-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-earth-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-earth-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-earth-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-earth-400 hover:text-primary-400 transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-earth-400 hover:text-primary-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-earth-400 hover:text-primary-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-earth-400 hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-earth-400">
              <li>Residential Construction</li>
              <li>Renovation & Remodeling</li>
              <li>Interior Design</li>
              <li>Planning & Design</li>
              <li>Project Management</li>
              <li>Consultancy Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhone className="text-primary-400 mt-1" />
                <div>
                  <a href={`tel:${contactInfo.phone}`} className="text-earth-400 hover:text-primary-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <FaPhone className="text-primary-400 mt-1" />
                <div>
                  <a href={`tel:${contactInfo.phone1}`} className="text-earth-400 hover:text-primary-400 transition-colors">
                    {contactInfo.phone1}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-primary-400 mt-1" />
                <div>
                  <a href={`mailto:${contactInfo.email}`} className="text-earth-400 hover:text-primary-400 transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1" />
                <div className="text-earth-400">
                  {contactInfo.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-earth-400 text-sm">
            © {new Date().getFullYear()} ConstructionPro. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-earth-400">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
