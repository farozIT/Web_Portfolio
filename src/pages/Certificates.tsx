import { motion } from 'framer-motion';
import { FiDownload, FiExternalLink } from 'react-icons/fi';

// Sample certificate data - replace with your actual certificates
const certificates = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    issuer: 'Coding Academy',
    date: 'June 2023',
    description: 'Completed an intensive web development bootcamp covering HTML, CSS, JavaScript, and React.',
    image: 'https://via.placeholder.com/400x280',
    downloadLink: '#',
    credentialLink: '#'
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    issuer: 'CodeMaster',
    date: 'April 2023',
    description: 'Mastered core JavaScript concepts including ES6+ features, asynchronous programming, and DOM manipulation.',
    image: 'https://via.placeholder.com/400x280',
    downloadLink: '#',
    credentialLink: '#'
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    issuer: 'Design Institute',
    date: 'February 2023',
    description: 'Learned modern responsive web design techniques using CSS Grid, Flexbox, and media queries.',
    image: 'https://via.placeholder.com/400x280',
    downloadLink: '#',
    credentialLink: '#'
  },
  // Add more certificates as needed
];

const Certificates = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the certificates I've earned throughout my learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  {cert.downloadLink && (
                    <a 
                      href={cert.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="Download Certificate"
                      download
                    >
                      <FiDownload size={20} />
                    </a>
                  )}
                  {cert.credentialLink && (
                    <a 
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-blue-100 transition-colors"
                      aria-label="View Credential"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">📜</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No certificates yet</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm currently working on earning new certificates. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
