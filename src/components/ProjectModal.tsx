import { X, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  images?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const handleWhatsAppRedirect = (message: string) => {
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-dark-800 border border-dark-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto glow-card">
        {/* Modal Header */}
        <div className="sticky top-0 bg-dark-800 border-b border-dark-700 p-6 flex justify-between items-start rounded-t-xl">
          <div>
            <h2 className="text-2xl font-bold glow-text mb-2">{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-dark-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Project Image Placeholder */}
          <div className="bg-gradient-to-r from-glow-blue/20 via-glow-purple/20 to-glow-pink/20 rounded-lg h-64 flex items-center justify-center border border-dark-700">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400">Project Preview Image</p>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-xl font-semibold mb-3 glow-text">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-3 glow-text">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-dark-700 text-sm rounded-full border border-dark-600 hover:border-glow-blue transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Solutions</h3>
                <ul className="space-y-2">
                  {project.solutions?.map((solution, index) => (
                    <li key={index} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Project Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-dark-700">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-glow-blue to-glow-purple py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-glow-blue/25 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live Demo</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-glow-blue text-glow-blue py-3 px-6 rounded-lg font-semibold hover:bg-glow-blue hover:text-dark-900 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View Source Code</span>
            </a>
          </div>

          {/* Contact for Project */}
          <div className="bg-gradient-to-r from-glow-blue/10 via-glow-purple/10 to-glow-pink/10 rounded-lg p-6 border border-dark-700">
            <h3 className="text-lg font-semibold mb-2 glow-text">Interested in this project?</h3>
            <p className="text-gray-300 mb-4">
              Want to know more about this project or discuss something similar? Let's chat!
            </p>
            <button
              onClick={() => handleWhatsAppRedirect(`Hi! I'm interested in learning more about your ${project.title} project. Can we discuss it?`)}
              className="bg-gradient-to-r from-green-500 to-green-600 py-2 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}