
import { useEffect, useRef } from 'react';
import { 
  Brain, 
  Laptop, 
  BookOpen, 
  Award, 
  Globe, 
  Users,
  School,
  Lightbulb
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { ProgramCard } from '@/components/ProgramCard';
import { Footer } from '@/components/Footer';

const Programs = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Training programs data
  const trainingPrograms = [
    {
      title: "Design Thinking for Educators",
      description: "Master the design thinking process to create innovative solutions for classroom challenges and student-centered learning experiences.",
      icon: <Brain size={24} />,
      slug: "design-thinking"
    },
    {
      title: "Creating Engaging Classrooms",
      description: "Transform your classroom with modern technology integration and engagement techniques that capture student attention and improve learning outcomes.",
      icon: <Laptop size={24} />,
      slug: "engaging-classrooms",
      featured: true
    },
    {
      title: "Teaching Strategies with AI",
      description: "Learn how to leverage AI tools to enhance learning outcomes, streamline administrative tasks, and prepare students for an AI-powered future.",
      icon: <BookOpen size={24} />,
      slug: "ai-teaching"
    },
    {
      title: "School Innovation Ambassador",
      description: "Get guided preparation for the MoEd Government of India's School Innovation Ambassador program with mentorship and practical exercises.",
      icon: <Award size={24} />,
      slug: "innovation-ambassador"
    },
    {
      title: "Google Certified Educator",
      description: "Comprehensive preparation for Google's Level 1 and Level 2 Educator certifications, including hands-on practice with Google Workspace tools.",
      icon: <Globe size={24} />,
      slug: "google-certified"
    },
    {
      title: "Microsoft Educator",
      description: "Expert training to help you become a Microsoft Certified Educator and leverage Microsoft tools to enhance teaching and learning.",
      icon: <Laptop size={24} />,
      slug: "microsoft-educator" 
    },
    {
      title: "Apple Teacher Program",
      description: "Specialized training to help educators integrate Apple technology in the classroom and achieve Apple Teacher recognition.",
      icon: <Laptop size={24} />,
      slug: "apple-teacher"
    },
    {
      title: "Adobe Creative Educator",
      description: "Learn to integrate digital creativity into your teaching with Adobe's educational tools and become an Adobe Creative Educator.",
      icon: <Lightbulb size={24} />,
      slug: "adobe-creative"
    },
  ];

  // Category filters
  const categories = [
    { name: "All Programs", value: "all" },
    { name: "Educational Innovation", value: "innovation" },
    { name: "Technology Integration", value: "technology" },
    { name: "Certification Preparation", value: "certification" },
  ];

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-tech-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-gray-900">
              Our Training Programs
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our specialized training programs designed to empower educators with innovative teaching methods and technology integration skills.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category.value === 'all'
                      ? 'bg-tech-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 staggered-animation">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="opacity-0 animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProgramCard {...program} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Customized Training Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-tech-50 border border-tech-100 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-tech-100">
                <School size={28} className="text-tech-700" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Need a Customized Training Program?</h2>
              <p className="text-gray-600 mb-6">
                We can design a tailored training program specifically for your institution's needs, objectives, and educational context.
              </p>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-tech-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-tech-700"
              >
                Contact Us to Discuss
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Programs;
