import { useEffect, useRef, useState } from 'react';
import { 
  Brain, 
  Laptop, 
  BookOpen, 
  Award, 
  Globe, 
  Users,
  School,
  Lightbulb,
  Shield,
  Heart,
  LayoutGrid,
  LineChart,
  FileText,
  BarChart,
  Smile,
  Code,
  Gamepad2,
  Presentation,
  Search
} from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { ProgramCard } from '@/components/ProgramCard';
import { Footer } from '@/components/Footer';
import { Input } from '@/components/ui/input';

const Programs = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
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
    {
      title: "Digital Citizenship and Cyber Safety",
      description: "Equipping teachers to model and teach responsible and safe online behavior, from digital footprints to cyberbullying response.",
      icon: <Shield size={24} />,
      slug: "digital-citizenship",
      featured: true
    },
    {
      title: "Inclusive Education and Technology",
      description: "Using technology to cater to diverse learning needs and create equitable learning environments through assistive technologies and UDL principles.",
      icon: <Heart size={24} />,
      slug: "inclusive-education"
    },
    {
      title: "Blended Learning Strategies",
      description: "Effectively combining face-to-face and online learning for enhanced flexibility and engagement through various blended learning models.",
      icon: <LayoutGrid size={24} />,
      slug: "blended-learning"
    },
    {
      title: "Assessment Tools and Techniques",
      description: "Leveraging technology for more efficient, effective, and insightful assessment through digital tools and platforms.",
      icon: <LineChart size={24} />,
      slug: "assessment-tools" 
    },
    {
      title: "Creating Engaging Online Content",
      description: "Designing dynamic and interactive digital learning materials that capture student interest using multimedia and instructional design principles.",
      icon: <FileText size={24} />,
      slug: "online-content"
    },
    {
      title: "Data-Driven Instruction",
      description: "Using student data collected through technology to inform teaching practices, improve differentiation, and track progress.",
      icon: <BarChart size={24} />,
      slug: "data-driven"
    },
    {
      title: "Teacher Wellness and Stress Management",
      description: "Helping teachers manage workload and well-being in a technology-rich environment through digital organization and mindfulness practices.",
      icon: <Smile size={24} />,
      slug: "teacher-wellness"
    },
    {
      title: "Coding and Computational Thinking",
      description: "Introducing foundational concepts of coding and computational thinking applicable across subjects, aligning with NEP guidelines.",
      icon: <Code size={24} />,
      slug: "computational-thinking"
    },
    {
      title: "Gamification in Education",
      description: "Using game elements and mechanics to increase student motivation, engagement, and participation in the classroom.",
      icon: <Gamepad2 size={24} />,
      slug: "gamification"
    },
    {
      title: "Presentation Skills for Educators",
      description: "Equipping educators with techniques to deliver engaging, confident, and memorable presentations that capture audience attention.",
      icon: <Presentation size={24} />,
      slug: "presentation-skills",
      featured: true
    }
  ];

  // Category filters
  const categories = [
    { name: "All Programs", value: "all" },
    { name: "Educational Innovation", value: "innovation" },
    { name: "Technology Integration", value: "technology" },
    { name: "Certification Preparation", value: "certification" },
    { name: "Teacher Development", value: "development" },
  ];

  // Filter programs based on search query and active category
  const filteredPrograms = trainingPrograms.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         program.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'all') {
      return matchesSearch;
    }
    
    const categoryKeywords = {
      'innovation': ['innovation', 'design', 'creative', 'thinking'],
      'technology': ['technology', 'digital', 'online', 'tools', 'tech'],
      'certification': ['certified', 'certification', 'ambassador', 'recognition'],
      'development': ['skills', 'wellness', 'development', 'presentation'],
    };
    
    const keywords = categoryKeywords[activeCategory as keyof typeof categoryKeywords] || [];
    const matchesCategory = keywords.some(keyword => 
      program.description.toLowerCase().includes(keyword)
    );
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />
      
      {/* Header - Updated with subtle blue gradient */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
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
          {/* Search Input */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          <div className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    category.value === activeCategory
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No programs found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 staggered-animation">
              {filteredPrograms.map((program, index) => (
                <div key={index} className="opacity-0 animate-zoom-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProgramCard {...program} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Bundle Discount Section - New */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white border border-blue-100 p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Award size={28} className="text-blue-700" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Bundle Discount Available</h2>
              <p className="text-gray-600 mb-6">
                Get a <span className="font-bold text-blue-700">30% discount</span> when you register for 3 or more training programs. Build your professional skills more affordably with our bundle packages.
              </p>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Contact Us for Bundle Details
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Customized Training Section - Updated with subtle blue */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <School size={28} className="text-blue-700" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Need a Customized Training Program?</h2>
              <p className="text-gray-600 mb-6">
                We can design a tailored training program specifically for your institution's needs, objectives, and educational context.
              </p>
              
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
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
