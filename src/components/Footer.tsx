
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Award } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 inline-block">
              <span className="font-display text-2xl font-bold text-tech-700">
                Tech<span className="text-tech-500">in</span>Teach
              </span>
            </Link>
            <p className="mb-6 text-gray-600">
              Global teacher training programs designed to empower educators with innovative techniques and technology integration.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <Award size={18} className="text-violet-600" />
              <p className="text-sm font-semibold text-gray-700">
                CPD Accredited Worldwide
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-violet-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Training Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/programs/design-thinking" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Design Thinking for Educators
                </Link>
              </li>
              <li>
                <Link to="/programs/engaging-classrooms" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Creating Engaging Classrooms
                </Link>
              </li>
              <li>
                <Link to="/programs/ai-teaching" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Teaching Strategies with AI
                </Link>
              </li>
              <li>
                <Link to="/programs/innovation-ambassador" className="text-gray-600 hover:text-violet-600 transition-colors">
                  School Innovation Ambassador
                </Link>
              </li>
              <li>
                <Link to="/programs/certifications" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Certification Programs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-violet-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Book a Training
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-violet-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-violet-600 flex-shrink-0" />
                <a href="mailto:contact@techinteach.com" className="text-gray-600 hover:text-violet-600 transition-colors">
                  contact@techinteach.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-violet-600 flex-shrink-0" />
                <a href="tel:+918756429310" className="text-gray-600 hover:text-violet-600 transition-colors">
                  +91 8756 429 310
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-violet-600 flex-shrink-0" />
                <span className="text-gray-600">
                  Kochi, Kerala, India
                </span>
              </li>
              <li className="pt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <LanguageSelector />
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} TechinTeach. All rights reserved. | CPD Accredited Training Provider
          </p>
        </div>
      </div>
    </footer>
  );
};
