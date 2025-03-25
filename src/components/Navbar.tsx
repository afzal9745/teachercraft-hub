
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Programs", path: "/programs" },
    { title: "AI Tools", path: "/ai-tools" },
    { title: "Blog", path: "/blog" },
    { title: "Book a Training", path: "/booking" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="font-display text-2xl font-bold text-tech-700">
            Tech<span className="text-tech-500">in</span>Teach
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`subtle-underline px-1 py-2 text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-violet-700'
                      : 'text-gray-600 hover:text-violet-600'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSelector />
          <Link 
            to="/booking" 
            className="rounded-full bg-violet-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-violet-700 hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="rounded-md p-2 text-gray-700 md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute w-full transform bg-white shadow-md transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  to={link.path}
                  className={`block py-2 text-base font-medium ${
                    location.pathname === link.path
                      ? 'text-violet-700'
                      : 'text-gray-600'
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-gray-500" />
                <LanguageSelector />
              </div>
            </li>
            <li>
              <Link 
                to="/booking" 
                className="mt-2 block w-full rounded-full bg-violet-600 px-5 py-2.5 text-center text-base font-medium text-white transition-all hover:bg-violet-700"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
