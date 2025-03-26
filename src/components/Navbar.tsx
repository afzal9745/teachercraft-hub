
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <span className="font-display text-xl md:text-2xl font-bold text-tech-700">
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
                      ? 'text-blue-700'
                      : 'text-gray-600 hover:text-blue-600'
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
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-md"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <button 
                className="rounded-md p-2 text-gray-700 md:hidden" 
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b">
                  <Link 
                    to="/" 
                    className="flex items-center gap-2 transition-opacity hover:opacity-80"
                  >
                    <span className="font-display text-xl font-bold text-tech-700">
                      Tech<span className="text-tech-500">in</span>Teach
                    </span>
                  </Link>
                </div>
                <div className="flex-1 overflow-auto py-6 px-4">
                  <ul className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <li key={link.path}>
                        <Link 
                          to={link.path}
                          className={`block py-2 text-base font-medium ${
                            location.pathname === link.path
                              ? 'text-blue-700'
                              : 'text-gray-600'
                          }`}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-t mt-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe size={18} className="text-gray-500" />
                    <LanguageSelector />
                  </div>
                  <Link 
                    to="/booking" 
                    className="block w-full rounded-full bg-blue-600 px-5 py-2.5 text-center text-base font-medium text-white transition-all hover:bg-blue-700"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  );
};
