
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Laptop, 
  BookOpen, 
  Award, 
  School, 
  Globe, 
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProgramCard } from '@/components/ProgramCard';
import { Testimonial } from '@/components/Testimonial';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Training programs data
  const trainingPrograms = [
    {
      title: "Design Thinking for Educators",
      description: "Master the design thinking process to create innovative solutions for classroom challenges.",
      icon: <Brain size={24} />,
      slug: "design-thinking"
    },
    {
      title: "Creating Engaging Classrooms",
      description: "Transform your classroom with modern technology integration and engagement techniques.",
      icon: <Laptop size={24} />,
      slug: "engaging-classrooms",
      featured: true
    },
    {
      title: "Teaching Strategies with AI",
      description: "Learn how to leverage AI tools to enhance learning outcomes and streamline tasks.",
      icon: <BookOpen size={24} />,
      slug: "ai-teaching"
    },
    {
      title: "School Innovation Ambassador",
      description: "Get guided preparation for the MoEd Government of India's School Innovation Ambassador program.",
      icon: <Award size={24} />,
      slug: "innovation-ambassador"
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The Design Thinking workshop transformed our teaching approach. Now our lessons are more student-centered and creative.",
      author: "Priya Sharma",
      role: "Vice Principal",
      school: "Delhi Public School",
      rating: 5
    },
    {
      quote: "The AI training session was eye-opening. Our teachers are now confidently integrating AI tools to enhance student learning.",
      author: "Rajesh Kumar",
      role: "Technology Coordinator",
      school: "Kendriya Vidyalaya",
      rating: 5
    },
    {
      quote: "Thanks to TechinTeach, I'm now a Google Certified Educator. The training was comprehensive and extremely practical.",
      author: "Ananya Patel",
      role: "English Teacher",
      school: "St. Mary's High School",
      rating: 4
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Programs Section */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)} 
        className="section-padding bg-gray-50 opacity-0"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4 text-gray-900">
              Specialized Training Programs for Modern Educators
            </h2>
            <p className="text-lg text-gray-600">
              Our training sessions are designed to equip educators with the skills and knowledge needed to excel in today's evolving educational landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 staggered-animation">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="opacity-0 animate-zoom-in">
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-tech-600 hover:text-tech-700 font-medium"
            >
              View all training programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section 
        ref={(el) => (sectionsRef.current[1] = el)} 
        className="section-padding bg-white opacity-0"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4 text-gray-900">
              Why Educators Choose Our Training
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by schools and educators across the globe for our expert-led, practical, and transformative training experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-6 transition-transform hover:scale-[1.02]">
              <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-700">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Standards</h3>
              <p className="text-gray-600">
                Our training programs align with international educational standards and frameworks, ensuring quality and relevance.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:scale-[1.02]">
              <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-700">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Trainers</h3>
              <p className="text-gray-600">
                Learn from certified professionals with extensive classroom experience and technical expertise.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 transition-transform hover:scale-[1.02]">
              <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-tech-100 text-tech-700">
                <School size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Approach</h3>
              <p className="text-gray-600">
                Training sessions tailored to your institution's specific needs, objectives, and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section 
        ref={(el) => (sectionsRef.current[2] = el)} 
        className="section-padding bg-gradient-to-b from-white to-gray-50 opacity-0"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4 text-gray-900">
              What Educators Say About Us
            </h2>
            <p className="text-lg text-gray-600">
              Hear from teachers and school administrators who have experienced our training programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 staggered-animation">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="opacity-0 animate-slide-in-right">
                <Testimonial {...testimonial} />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-tech-600 hover:text-tech-700 font-medium"
            >
              Read more testimonials
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        ref={(el) => (sectionsRef.current[3] = el)} 
        className="section-padding bg-tech-700 opacity-0"
      >
        <div className="container mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-tech-800 to-tech-700 p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-tech-500/10 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-tech-600/10 transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="heading-2 mb-4 text-white">
                Ready to Transform Your Teaching?
              </h2>
              <p className="text-tech-100 text-lg max-w-2xl mx-auto mb-8">
                Book a custom training session for your school or join one of our upcoming online programs to elevate your teaching skills.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white text-tech-700 px-8 py-3 font-medium transition-all hover:bg-gray-100"
                >
                  Book a Training
                  <Calendar size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-tech-600 text-white px-8 py-3 font-medium transition-all hover:bg-tech-500"
                >
                  Contact Us
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section 
        ref={(el) => (sectionsRef.current[4] = el)} 
        className="section-padding bg-white opacity-0"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-2 mb-4 text-gray-900">
              Get Globally Recognized Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Our preparation programs help educators achieve prestigious educational certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 flex items-center gap-4 transition-all hover:shadow-md">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-tech-100 text-tech-700 flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Google Certified Educator</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive training for Level 1 & Level 2 Google Educator certification exams.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex items-center gap-4 transition-all hover:shadow-md">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-tech-100 text-tech-700 flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Microsoft Educator</h3>
                <p className="text-sm text-gray-600">
                  Expert guidance for Microsoft Certified Educator program and Microsoft Innovative Educator.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex items-center gap-4 transition-all hover:shadow-md">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-tech-100 text-tech-700 flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Apple Teacher</h3>
                <p className="text-sm text-gray-600">
                  Specialized training to help educators integrate Apple technology in the classroom.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 flex items-center gap-4 transition-all hover:shadow-md">
              <div className="h-14 w-14 flex items-center justify-center rounded-full bg-tech-100 text-tech-700 flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Adobe Creative Educator</h3>
                <p className="text-sm text-gray-600">
                  Learn to integrate digital creativity into your teaching with Adobe's educational tools.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/programs/certifications"
              className="inline-flex items-center gap-2 text-tech-600 hover:text-tech-700 font-medium"
            >
              Learn more about certification programs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
