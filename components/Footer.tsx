
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon, XIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-2">Devine Intervention Special Education</h3>
            <p className="text-gray-300 max-w-md mx-auto md:mx-0">
              Providing expert, compassionate support for children with special needs and their families across Nigeria.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-brand-teal transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
               <li>
                  <Link to="/privacy-policy" className="text-gray-300 hover:text-brand-teal transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-gray-300 hover:text-brand-teal transition-colors">
                    Terms of Service
                  </Link>
                </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-gray-300">
                <li className="flex items-center justify-center md:justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:contact@devineintervention.com" className="hover:text-brand-teal">Email Us</a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                    <WhatsAppIcon />
                    <a href="https://wa.me/2348120127783" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal">WhatsApp</a>
                </li>
            </ul>
             <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                    <a href="https://x.com/isionvana" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-teal transition-colors"><XIcon /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-teal transition-colors"><FacebookIcon /></a>
                    <a href="https://instagram.com/opeyemielumelu" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-teal transition-colors"><InstagramIcon /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-teal transition-colors"><LinkedInIcon /></a>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Devine intervention special education services. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;