import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Rocket } from 'lucide-react';
import ProjectModal from '../components/ProjectModal';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Python', level: 75 },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleWhatsAppRedirect = () => {
    const message = "Hi! I'm interested in discussing a potential project collaboration with you.";
    const whatsappUrl = `https://wa.me/6285122194911?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with real-time inventory management and payment processing.',
      fullDescription: 'A comprehensive e-commerce platform built with modern web technologies. This project features a complete shopping experience including product browsing, cart management, secure payment processing, and real-time inventory tracking. The platform includes both customer-facing and admin interfaces.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'JWT'],
      link: '#',
      github: '#',
      challenges: ['Real-time inventory synchronization', 'Secure payment integration', 'Scalable architecture'],
      solutions: ['Implemented WebSocket for live updates', 'Integrated Stripe with PCI compliance', 'Used microservices architecture']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface and team features.',
      fullDescription: 'A powerful task management application designed for teams to collaborate effectively. Features include drag-and-drop task organization, real-time updates, team member assignment, deadline tracking, and comprehensive analytics dashboard.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io', 'Prisma', 'Tailwind'],
      link: '#',
      github: '#',
      challenges: ['Real-time collaboration', 'Complex state management', 'Performance optimization'],
      solutions: ['Socket.io for instant updates', 'Redux for state management', 'Implemented virtual scrolling']
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation platform using machine learning models.',
      fullDescription: 'An innovative content generation platform that leverages advanced AI models to create high-quality written content. Users can generate blog posts, social media content, marketing copy, and more with customizable tone and style preferences.',
      tech: ['Python', 'FastAPI', 'React', 'OpenAI', 'Redis', 'Celery'],
      link: '#',
      github: '#',
      challenges: ['AI model integration', 'Content quality control', 'Scalable processing'],
      solutions: ['OpenAI API integration', 'Content filtering algorithms', 'Queue-based processing system']
    }
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-dark-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold glow-text animate-glow">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-glow-blue transition-colors">Home</a>
              <a href="#about" className="hover:text-glow-blue transition-colors">About</a>
              <a href="#projects" className="hover:text-glow-blue transition-colors">Projects</a>
              <a href="#contact" className="hover:text-glow-blue transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-glow-blue/10 via-glow-purple/10 to-glow-pink/10 opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="glow-text animate-glow">Your Name</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-Stack Developer crafting beautiful digital experiences with modern technologies
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-glow-blue to-glow-purple px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-glow-blue/25 transition-all duration-300"
              >
                View Projects
              </button>
              <button className="border border-glow-blue text-glow-blue px-8 py-3 rounded-lg font-semibold hover:bg-glow-blue hover:text-dark-900 transition-all duration-300">
                Download CV
              </button>
            </div>
            <div className="animate-float">
              <ChevronDown className="w-8 h-8 text-glow-blue mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate developer with expertise in creating scalable applications and user-friendly interfaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. 
                I specialize in React, TypeScript, and modern web technologies.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the internet, 
                and has evolved into a career focused on creating seamless user experiences.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-glow-blue to-glow-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">Frontend</h3>
                  <p className="text-sm text-gray-400">React, Vue, Angular</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-glow-purple to-glow-pink rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">Design</h3>
                  <p className="text-sm text-gray-400">UI/UX, Figma</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-glow-pink to-glow-blue rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">Backend</h3>
                  <p className="text-sm text-gray-400">Node.js, Python</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-glow-blue to-glow-purple h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="glow-card group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => handleProjectClick(project)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-glow-blue transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github} 
                        className="text-gray-400 hover:text-glow-blue transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a 
                        href={project.link} 
                        className="text-gray-400 hover:text-glow-blue transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-dark-700 text-xs rounded-full border border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-glow-blue text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to view details →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 glow-text">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="#" 
              className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center border border-dark-700 hover:border-glow-blue hover:shadow-lg hover:shadow-glow-blue/25 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center border border-dark-700 hover:border-glow-blue hover:shadow-lg hover:shadow-glow-blue/25 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center border border-dark-700 hover:border-glow-blue hover:shadow-lg hover:shadow-glow-blue/25 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <div className="max-w-md mx-auto">
            <button 
              onClick={handleWhatsAppRedirect}
              className="w-full bg-gradient-to-r from-glow-blue to-glow-purple py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-glow-blue/25 transition-all duration-300"
            >
              Send Message via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-dark-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}