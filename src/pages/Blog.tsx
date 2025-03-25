
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Education in 2024',
    excerpt: 'Explore the latest AI tools and strategies that are transforming classrooms globally and enhancing student learning experiences.',
    date: 'June 15, 2024',
    author: 'Dr. Ravi Kumar',
    category: 'AI in Education',
    slug: 'ai-revolutionizing-education',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1740',
  },
  {
    id: 2,
    title: 'Design Thinking: A Teacher\'s Guide to Innovative Problem Solving',
    excerpt: 'Learn how to implement design thinking methodology in your classroom to foster creativity and critical thinking skills.',
    date: 'June 10, 2024',
    author: 'Priya Sharma',
    category: 'Teaching Strategies',
    slug: 'design-thinking-teachers-guide',
    imageUrl: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&q=80&w=1747',
  },
  {
    id: 3,
    title: 'CPD Certification: Why It Matters for Modern Educators',
    excerpt: 'Understand the importance of accredited CPD programs for professional growth and career advancement in the education sector.',
    date: 'June 5, 2024',
    author: 'Anish Thomas',
    category: 'Professional Development',
    slug: 'cpd-certification-importance',
    imageUrl: 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?auto=format&fit=crop&q=80&w=1769',
  },
  {
    id: 4,
    title: 'Integrating Google Workspace in Your Teaching Practice',
    excerpt: 'A comprehensive guide to making the most of Google tools to enhance collaboration and productivity in your classroom.',
    date: 'May 28, 2024',
    author: 'Meera Nair',
    category: 'EdTech',
    slug: 'google-workspace-teaching-practice',
    imageUrl: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?auto=format&fit=crop&q=80&w=1740',
  },
  {
    id: 5,
    title: 'The Future of Hybrid Learning: Trends and Best Practices',
    excerpt: 'Discover emerging trends in hybrid education and practical strategies to create engaging learning experiences both online and in-person.',
    date: 'May 20, 2024',
    author: 'Dr. Ravi Kumar',
    category: 'Teaching Strategies',
    slug: 'future-hybrid-learning',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1770',
  },
  {
    id: 6,
    title: 'Becoming a School Innovation Ambassador: Your Step-by-Step Guide',
    excerpt: 'A comprehensive roadmap to help educators become certified School Innovation Ambassadors through the MoEd Government of India program.',
    date: 'May 15, 2024',
    author: 'Priya Sharma',
    category: 'Innovation',
    slug: 'school-innovation-ambassador-guide',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1770',
  },
];

// Categories for filtering
const categories = ['All', 'AI in Education', 'Teaching Strategies', 'EdTech', 'Professional Development', 'Innovation'];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header - Updated with lighter, more subtle colors */}
      <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20 text-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-4">TechinTeach Blog</h1>
            <p className="text-lg md:text-xl opacity-90">
              Insights, strategies, and inspiration for modern educators worldwide
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-8 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full md:w-auto order-2 md:order-1">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-violet-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full md:w-64 order-1 md:order-2">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredPosts.length} of {blogPosts.length} articles
        </p>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
