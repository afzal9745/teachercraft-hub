
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  slug: string;
  featured?: boolean;
}

export const ProgramCard = ({ 
  title, 
  description, 
  icon, 
  slug, 
  featured = false 
}: ProgramCardProps) => {
  return (
    <div 
      className={`relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-md ${
        featured 
          ? 'border-2 border-tech-500 bg-gradient-to-br from-tech-50 to-white' 
          : 'border border-gray-100 bg-white'
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-tech-500 text-white text-xs font-bold uppercase py-1 px-3 transform rotate-45 translate-x-4 -translate-y-1">
            Popular
          </div>
        </div>
      )}
      
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-tech-100 text-tech-700">
        {icon}
      </div>
      
      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h3>
      
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      
      <Link 
        to={`/programs/${slug}`} 
        className="group inline-flex items-center gap-1 text-sm font-medium text-tech-600 hover:text-tech-700"
      >
        Learn more
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};
