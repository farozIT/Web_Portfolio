import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Sample portfolio items - replace with your actual projects
const portfolioItems = [
  {
    id: 1,
    title: 'Video Editing Project',
    description: 'Professional video editing project showcasing advanced editing techniques and visual effects.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Video Editing', 'After Effects', 'Premiere Pro'],
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Visual Design Work',
    description: 'Creative visual design project featuring modern graphics and brand identity design.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Design Visual', 'Photoshop', 'Illustrator'],
    github: '#',
    demo: '#',
  },
  {
    id: 3,
    title: 'Game Development',
    description: 'Interactive game development project with engaging gameplay and stunning visuals.',
    image: 'https://via.placeholder.com/600x400',
    tags: ['Game', 'Unity', 'C#'],
    github: '#',
    demo: '#',
  },
  
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get unique tags from all projects
  const allTags = ['All', ...new Set(portfolioItems.flatMap(item => item.tags))];
  
  // Filter projects based on active filter
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.tags.includes(activeFilter));

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on any project to learn more about it.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>
        
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {item.github && (
                    <a 
                      href={item.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {item.demo && (
                    <a 
                      href={item.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We couldn't find any projects matching your filter. Try a different one!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
