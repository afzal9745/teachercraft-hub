
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Globe } from 'lucide-react';

export const Hero = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const certifications = [
    "Google Certified Trainer",
    "Microsoft Educator",
    "Apple Teacher",
    "Adobe Creative Educator"
  ];

  return (
    <div className="relative pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-tech-100/50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="max-w-5xl mx-auto">
          {/* Hero Content */}
          <div 
            ref={(el) => (elementsRef.current[0] = el)} 
            className="text-center opacity-0"
          >
            <div className="inline-flex items-center rounded-full bg-tech-50 px-3 py-1 text-sm font-medium text-tech-700 mb-6 border border-tech-100">
              <Award size={16} className="mr-2" />
              Empower Your Teaching Journey
            </div>
            
            <h1 className="heading-1 text-gray-900 mb-6">
              Global Teacher Training for the <span className="text-tech-600">Digital Age</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-8">
              Specialized training programs for educators worldwide, designed to transform teaching methods with cutting-edge techniques and technology integration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                to="/booking"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-tech-600 px-8 py-3 font-medium text-white transition-all hover:bg-tech-700 hover:shadow-lg"
              >
                Book a Training Session
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/programs"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-tech-700 transition-all hover:bg-gray-50 border border-tech-200"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Credentials */}
          <div 
            ref={(el) => (elementsRef.current[1] = el)} 
            className="flex flex-wrap justify-center items-center gap-4 mb-16 opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-100"
              >
                <CheckCircle size={16} className="text-tech-600" />
                <span className="text-sm font-medium text-gray-800">{cert}</span>
              </div>
            ))}
          </div>

          {/* Global Reach */}
          <div 
            ref={(el) => (elementsRef.current[2] = el)} 
            className="relative rounded-2xl bg-white p-6 shadow-sm border border-gray-100 text-center opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex justify-center mb-4">
              <Globe className="h-10 w-10 text-tech-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Global Reach, Local Impact</h3>
            <p className="text-gray-600">
              Based in India, serving educators worldwide with online and in-person training sessions aligned with global educational standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
