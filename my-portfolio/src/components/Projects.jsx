import { useState } from 'react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      title: "Education ERP System",
      description: "Custom education ERP module built with ERPNext/Frappe framework featuring student lifecycle management, workflow-based approval system, and automated user & role creation with Student ID Card generation.",
      image: "/api/placeholder/400/250",
      tech: ["ERPNext", "Frappe", "Python", "Jinja", "Print Format"],
      category: "ERP",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "BaseCart E-commerce Platform",
      description: "Modular e-commerce development platform with Django + React + REST APIs. Features config-driven architecture, modular backend for users, products, orders, and CMS with ENV-based configuration.",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            Academic and internship projects showcasing backend development and ERP systems
          </p>
          
          {/* Filter tabs */}
          <div className="flex justify-center space-x-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`card-hover bg-slate-900 rounded-xl overflow-hidden border border-slate-700 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-slate-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div className="p-6">
                {/* Project title and category */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-cyan-400 text-slate-900 py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-cyan-300 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 border border-slate-600 text-slate-300 py-2 px-4 rounded-lg text-sm font-medium text-center hover:border-slate-500 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Ayushhk14" 
            className="btn-secondary inline-flex items-center space-x-2"
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