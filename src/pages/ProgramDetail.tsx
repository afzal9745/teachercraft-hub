
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Laptop, Users, Award, DollarSign, Building, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Program data
const programsData = {
  "design-thinking": {
    title: "Design Thinking for Educators",
    description: "Master the design thinking process to create innovative solutions for classroom challenges and student-centered learning experiences.",
    duration: "2 days (16 hours)",
    mode: ["In-person workshop", "Live virtual training"],
    outcomes: [
      "Apply design thinking methodology to solve educational challenges",
      "Create user-centered learning experiences for students",
      "Implement prototyping and testing techniques in classroom projects",
      "Foster a culture of innovation and creative problem-solving"
    ],
    whyTake: "Design thinking transforms how you approach problems in education. This methodology helps you create solutions that truly address student needs and improves learning outcomes through iterative testing and refinement.",
    fee: "₹15,000 per participant",
    institutionalDiscount: "Yes, 15% discount for groups of 5 or more from the same institution",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1740"
  },
  "engaging-classrooms": {
    title: "Creating Engaging Classrooms",
    description: "Transform your classroom with modern technology integration and engagement techniques that capture student attention and improve learning outcomes.",
    duration: "3 days (24 hours)",
    mode: ["In-person workshop", "Live virtual training", "Self-paced online course"],
    outcomes: [
      "Design interactive lesson plans using digital tools",
      "Implement gamification strategies to increase student engagement",
      "Create multimedia learning materials that appeal to diverse learning styles",
      "Measure and analyze student engagement with assessment tools"
    ],
    whyTake: "In the digital age, traditional teaching methods often fail to capture student attention. This program equips you with proven strategies to create classroom experiences that excite and motivate students while enhancing learning outcomes.",
    fee: "₹18,000 per participant",
    institutionalDiscount: "Yes, 20% discount for groups of 8 or more from the same institution",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1742"
  },
  "ai-teaching": {
    title: "Teaching Strategies with AI",
    description: "Learn how to leverage AI tools to enhance learning outcomes, streamline administrative tasks, and prepare students for an AI-powered future.",
    duration: "2 days (16 hours)",
    mode: ["Live virtual training", "Self-paced online course with mentorship"],
    outcomes: [
      "Integrate AI tools into your teaching practice ethically and effectively",
      "Create personalized learning experiences using AI-driven analytics",
      "Automate routine tasks to focus more on teaching and student interaction",
      "Prepare students with AI literacy skills for future careers"
    ],
    whyTake: "AI is transforming education at an unprecedented pace. This program provides practical knowledge on how to harness AI tools to enhance your teaching while maintaining the human connection that makes great education possible.",
    fee: "₹16,500 per participant",
    institutionalDiscount: "Yes, 15% discount for groups of 6 or more from the same institution",
    image: "https://images.unsplash.com/photo-1600456899121-68eda5705257?auto=format&fit=crop&q=80&w=1740"
  },
  "innovation-ambassador": {
    title: "School Innovation Ambassador",
    description: "Get guided preparation for the MoEd Government of India's School Innovation Ambassador program with mentorship and practical exercises.",
    duration: "5 days (40 hours)",
    mode: ["Blended learning (3 days in-person + 2 days virtual)"],
    outcomes: [
      "Master the curriculum requirements for the School Innovation Ambassador program",
      "Develop leadership skills to drive innovation in educational institutions",
      "Create and implement innovation policies for schools",
      "Design sustainable innovation ecosystems within educational environments"
    ],
    whyTake: "The Government of India's School Innovation Ambassador program is a prestigious certification that positions you as an innovation leader in education. Our preparation program significantly increases your chances of success and provides networking opportunities with like-minded educators.",
    fee: "₹25,000 per participant",
    institutionalDiscount: "Yes, 25% discount for groups of 4 or more from the same institution",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1740"
  },
  "google-certified": {
    title: "Google Certified Educator",
    description: "Comprehensive preparation for Google's Level 1 and Level 2 Educator certifications, including hands-on practice with Google Workspace tools.",
    duration: "4 days (32 hours)",
    mode: ["Live virtual training", "Self-paced online course with live support"],
    outcomes: [
      "Master all competencies required for Google Level 1 and Level 2 certifications",
      "Implement Google Workspace tools effectively in educational contexts",
      "Create collaborative learning environments using Google's ecosystem",
      "Design and share innovative Google-based lesson plans and activities"
    ],
    whyTake: "Google Certified Educator credentials are internationally recognized and demonstrate your proficiency with digital tools that are increasingly standard in modern education. Our program has a 95% pass rate for participants who complete all modules.",
    fee: "₹20,000 per participant",
    institutionalDiscount: "Yes, 20% discount for groups of 5 or more from the same institution",
    image: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?auto=format&fit=crop&q=80&w=1740"
  },
  "microsoft-educator": {
    title: "Microsoft Educator",
    description: "Expert training to help you become a Microsoft Certified Educator and leverage Microsoft tools to enhance teaching and learning.",
    duration: "4 days (32 hours)",
    mode: ["In-person workshop", "Live virtual training"],
    outcomes: [
      "Achieve Microsoft Certified Educator status with confidence",
      "Implement Microsoft 365 tools effectively in educational settings",
      "Create inclusive classroom experiences using Microsoft accessibility features",
      "Develop advanced skills in Teams, OneNote, and other Microsoft educational tools"
    ],
    whyTake: "Microsoft tools are among the most widely used in educational institutions worldwide. This certification demonstrates your ability to leverage these tools to create modern, collaborative learning environments that prepare students for the workplace.",
    fee: "₹19,500 per participant",
    institutionalDiscount: "Yes, 18% discount for groups of 6 or more from the same institution",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1740"
  },
  "apple-teacher": {
    title: "Apple Teacher Program",
    description: "Specialized training to help educators integrate Apple technology in the classroom and achieve Apple Teacher recognition.",
    duration: "3 days (24 hours)",
    mode: ["In-person workshop", "Live virtual training"],
    outcomes: [
      "Master core competencies required for Apple Teacher recognition",
      "Create engaging learning materials using iPad, Mac, and Apple apps",
      "Implement Apple's Everyone Can Create and Everyone Can Code curricula",
      "Design inclusive learning experiences using Apple's accessibility features"
    ],
    whyTake: "Apple's ecosystem offers powerful tools for creativity and innovation in education. This program helps you leverage these tools to their full potential while earning recognition as an Apple Teacher.",
    fee: "₹21,000 per participant",
    institutionalDiscount: "Yes, 15% discount for groups of 5 or more from the same institution",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1740"
  },
  "adobe-creative": {
    title: "Adobe Creative Educator",
    description: "Learn to integrate digital creativity into your teaching with Adobe's educational tools and become an Adobe Creative Educator.",
    duration: "3 days (24 hours)",
    mode: ["Live virtual training", "Self-paced online course with mentorship"],
    outcomes: [
      "Achieve Adobe Creative Educator Level 1 and Level 2 status",
      "Create compelling visual learning materials using Adobe Express and Creative Cloud",
      "Implement digital media projects that develop students' creative skills",
      "Design assessment strategies for creative digital work"
    ],
    whyTake: "Digital creativity is an essential skill for future careers. The Adobe Creative Educator program helps you foster these skills in your students while developing your own creative teaching practice.",
    fee: "₹18,500 per participant",
    institutionalDiscount: "Yes, 15% discount for groups of 6 or more from the same institution",
    image: "https://images.unsplash.com/photo-1574027632969-83a09c87f50c?auto=format&fit=crop&q=80&w=1740"
  }
};

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? programsData[slug as keyof typeof programsData] : null;
  
  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 pt-24">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
            <p className="mb-6">The program you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900"
            >
              <ArrowLeft size={18} />
              <span>Back to All Programs</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section 
        className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(239, 246, 255, 0.95), rgba(255, 255, 255, 0.97)), url(${program.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4">
          <Link to="/programs" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 mb-6">
            <ArrowLeft size={18} />
            <span>Back to All Programs</span>
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="heading-1 mb-4 text-gray-900">
              {program.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {program.description}
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock size={20} className="text-blue-600" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Laptop size={20} className="text-blue-600" />
                <span>{program.mode.join(", ")}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <DollarSign size={20} className="text-blue-600" />
                <span>{program.fee}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Details */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8 bg-gray-100 p-1">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="outcomes">Learning Outcomes</TabsTrigger>
                <TabsTrigger value="why">Why Take This Course</TabsTrigger>
                <TabsTrigger value="fee">Fees & Discounts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Program Overview</CardTitle>
                    <CardDescription>Everything you need to know about the {program.title} program</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Clock size={18} className="text-blue-600" />
                        Duration
                      </h3>
                      <p>{program.duration}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Laptop size={18} className="text-blue-600" />
                        Training Modes
                      </h3>
                      <ul className="list-disc list-inside space-y-1 pl-1">
                        {program.mode.map((mode, index) => (
                          <li key={index}>{mode}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <BookOpen size={18} className="text-blue-600" />
                        Program Description
                      </h3>
                      <p>{program.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="outcomes" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Expected Learning Outcomes</CardTitle>
                    <CardDescription>What you'll be able to do after completing this program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                          <Award size={18} className="text-blue-600" />
                          Upon completion, you will be able to:
                        </h3>
                        <ul className="space-y-3">
                          {program.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="bg-blue-100 text-blue-700 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                {index + 1}
                              </span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="why" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Why You Should Take This Program</CardTitle>
                    <CardDescription>The benefits and unique value of this training</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-6 bg-blue-50 border border-blue-100 rounded-lg">
                      <p className="text-gray-800 italic">{program.whyTake}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fee" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Fees & Discounts</CardTitle>
                    <CardDescription>Investment information and available discounts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <DollarSign size={18} className="text-blue-600" />
                        Program Fee
                      </h3>
                      <p className="text-xl font-bold">{program.fee}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                        <Building size={18} className="text-blue-600" />
                        Institutional Discount
                      </h3>
                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <p className="text-green-800">{program.institutionalDiscount}</p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Link
                        to="/booking"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Register for This Program
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;
