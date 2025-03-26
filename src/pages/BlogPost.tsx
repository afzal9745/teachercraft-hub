
import { useParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  // This is a placeholder - in a real app, you would fetch the blog post based on the slug
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Blog Post: {slug}
          </h1>
          <p className="text-gray-600">
            This is a placeholder for the blog post content. In a real application, 
            you would fetch and display the actual blog post content here.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
