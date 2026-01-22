import { useState, useEffect } from 'react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const projects = [
    {
      title: "Education ERP System",
      description: "Custom education ERP module built with ERPNext/Frappe framework featuring student lifecycle management and automated workflows.",
      image: "/api/placeholder/400/250",
      tech: ["ERPNext", "Frappe", "Python", "Jinja", "Print Format"],
      category: "ERP",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "BaseCart E-commerce Platform",
      description: "Modular e-commerce development platform with Django + React + REST APIs and config-driven architecture.",
      image: "/api/placeholder/400/250",
      tech: ["Django", "React", "REST APIs", "SQLite", "Python"],
      category: "Web",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    }
  ];

  const filters = ['All', 'Web', 'ERP'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-slate-800">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold text-white mb-4`}>
            Projects
          </h2>
          <p className={`${isMobile ? 'text-lg px-4' : 'text-xl'} text-slate-400 max-w-2xl mx-auto mb-8`}>
            Academic and internship projects showcasing backend development and ERP systems
          </p>
          
          {/* Filter tabs */}
          <div className={`flex ${isMobile ? 'justify-center flex-wrap gap-3' : 'justify-center space-x-4'}`}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`btn-filter ${
                  activeFilter === filter ? 'active' : ''
                } ${isMobile ? 'min-w-[80px]' : ''}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 gap-8'} max-w-5xl mx-auto`}>
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`project-card bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 transition-all duration-300 hover:border-slate-600/80 hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 ${isMobile ? 'p-6' : 'p-8'}`}
            >
              {/* Project header */}
              <div className={`flex items-start justify-between ${isMobile ? 'mb-4' : 'mb-6'}`}>
                <div className="flex-1">
                  <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-2 leading-tight`}>
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Description */}
              <p className={`text-slate-300 ${isMobile ? 'text-sm' : 'text-base'} leading-relaxed ${isMobile ? 'mb-4' : 'mb-6'}`}>
                {project.description}
              </p>
              
              {/* Tech stack */}
              <div className={`${isMobile ? 'mb-6' : 'mb-8'}`}>
                <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  Tech Stack
                </h4>
                <div className={`flex flex-wrap ${isMobile ? 'gap-1.5' : 'gap-2'}`}>
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`${isMobile ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'} bg-slate-800/80 text-slate-300 font-medium rounded-lg border border-slate-700/60 hover:border-slate-600/80 transition-colors`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className={`flex ${isMobile ? 'flex-col gap-3' : 'space-x-4'}`}>
                <a 
                  href={project.liveUrl}
                  className={`btn-project-primary flex items-center justify-center space-x-2 ${isMobile ? 'w-full' : ''}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>
                <a 
                  href={project.githubUrl}
                  className={`btn-project-secondary flex items-center justify-center space-x-2 ${isMobile ? 'w-full' : ''}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/Ayushhk14" 
            className={`btn-secondary inline-flex items-center space-x-2 ${isMobile ? 'w-full max-w-sm mx-auto' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View GitHub Profile</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;