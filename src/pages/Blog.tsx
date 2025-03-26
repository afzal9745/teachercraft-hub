
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlogCard } from '@/components/BlogCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Education in 2024',
    excerpt: 'Explore the latest AI tools and strategies that are transforming classrooms globally...',
    date: 'June 15, 2024',
    author: 'Dr. Ravi Kumar',
    category: 'AI in Education',
    slug: 'ai-revolutionizing-education',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1740',
    featured: true,
  },
  {
    id: 2,
    title: 'Design Thinking: A Teacher\'s Guide to Innovative Problem Solving',
    excerpt: 'Learn how to implement design thinking methodology in your classroom to foster creativity...',
    date: 'June 10, 2024',
    author: 'Priya Sharma',
    category: 'Teaching Strategies',
    slug: 'design-thinking-teachers-guide',
    imageUrl: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&q=80&w=1747',
    featured: false,
  },
  {
    id: 3,
    title: 'CPD Certification: Why It Matters for Modern Educators',
    excerpt: 'Understand the importance of accredited CPD programs for professional growth and career...',
    date: 'June 5, 2024',
    author: 'Anish Thomas',
    category: 'Professional Development',
    slug: 'cpd-certification-importance',
    imageUrl: 'https://images.unsplash.com/photo-1605711285791-0219e80e43a3?auto=format&fit=crop&q=80&w=1769',
    featured: false,
  },
  {
    id: 4,
    title: 'Integrating Google Workspace in Your Teaching Practice',
    excerpt: 'A comprehensive guide to making the most of Google tools to enhance collaboration and...',
    date: 'May 28, 2024',
    author: 'Meera Nair',
    category: 'EdTech',
    slug: 'google-workspace-teaching-practice',
    imageUrl: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?auto=format&fit=crop&q=80&w=1740',
    featured: false,
  },
  {
    id: 5,
    title: 'The Future of Hybrid Learning: Trends and Best Practices',
    excerpt: 'Discover emerging trends in hybrid education and practical strategies to create engaging...',
    date: 'May 20, 2024',
    author: 'Dr. Ravi Kumar',
    category: 'Teaching Strategies',
    slug: 'future-hybrid-learning',
    imageUrl: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1770',
    featured: false,
  },
  {
    id: 6,
    title: 'Becoming a School Innovation Ambassador: Your Step-by-Step Guide',
    excerpt: 'A comprehensive roadmap to help educators become certified School Innovation Ambassadors...',
    date: 'May 15, 2024',
    author: 'Priya Sharma',
    category: 'Innovation',
    slug: 'school-innovation-ambassador-guide',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1770',
    featured: false,
  },
  {
    id: 7,
    title: 'Creating Inclusive Digital Classrooms for All Learners',
    excerpt: 'Discover practical strategies to make your digital learning environment accessible and...',
    date: 'May 10, 2024',
    author: 'Anish Thomas',
    category: 'Inclusive Education',
    slug: 'inclusive-digital-classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80&w=1770',
    featured: false,
  },
  {
    id: 8,
    title: 'Leveraging Gamification for Student Engagement',
    excerpt: 'Learn how to use game elements in your lesson plans to boost student motivation and...',
    date: 'May 5, 2024',
    author: 'Meera Nair',
    category: 'EdTech',
    slug: 'gamification-student-engagement',
    imageUrl: 'https://images.unsplash.com/photo-1511377747391-07ace07f4f35?auto=format&fit=crop&q=80&w=1770',
    featured: false,
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Filter blog posts based on search
  const filteredPosts = blogPosts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Generate pagination numbers
  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            onClick={() => handlePageChange(i)} 
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Simple Header */}
      <section className="bg-white py-16 text-center border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">TechinTeach Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, strategies, and inspiration for modern educators worldwide
          </p>
        </div>
      </section>
      
      {/* Search Bar */}
      <div className="bg-white border-b py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // Reset to first page on search
              }}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Blog Posts - Single Column */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Featured Post (if available and on first page) */}
          {currentPage === 1 && filteredPosts.some(post => post.featured) && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
              {filteredPosts
                .filter(post => post.featured)
                .slice(0, 1)
                .map(post => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span className="text-violet-600 font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      <a 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
                      >
                        Read full article
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          )}
          
          {/* Regular Posts */}
          <div className="space-y-8">
            {currentPosts.filter(post => !post.featured || currentPage !== 1).map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-w-16 aspect-h-9 h-48">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="text-violet-600">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <a 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 font-medium text-violet-700 hover:text-violet-900 transition-colors"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500">
                Try adjusting your search to find what you're looking for
              </p>
            </div>
          )}
          
          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <Pagination className="mt-12">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)}
                    />
                  </PaginationItem>
                )}
                
                {renderPaginationItems()}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
