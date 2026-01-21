import { useState } from 'react';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Comprehensive skills data with detailed explanations
  const skillsData = [
    {
      id: 'python',
      name: 'Python',
      category: 'Languages',
      description: 'A versatile, high-level programming language known for its simplicity and readability.',
      usage: 'Backend development, API creation, data processing, and automation scripts in my current internship at ADRS Technosoft.',
      projects: ['Education ERP System', 'REST API Development', 'Data Processing Scripts'],
      level: 'Advanced'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Languages',
      description: 'Dynamic programming language essential for web development and interactive user interfaces.',
      usage: 'Frontend development, DOM manipulation, and creating interactive web applications.',
      projects: ['BaseCart E-commerce Platform', 'Portfolio Website', 'Interactive UI Components'],
      level: 'Intermediate'
    },
    {
      id: 'react',
      name: 'React',
      category: 'Frontend',
      description: 'Popular JavaScript library for building user interfaces with component-based architecture.',
      usage: 'Creating modern, responsive web applications with reusable components and state management.',
      projects: ['BaseCart Frontend', 'Personal Portfolio', 'Component Libraries'],
      level: 'Intermediate'
    },
    {
      id: 'django',
      name: 'Django',
      category: 'Backend',
      description: 'High-level Python web framework that encourages rapid development and clean design.',
      usage: 'Building robust backend systems, REST APIs, and web applications with built-in admin interface.',
      projects: ['BaseCart Backend', 'API Development', 'Database Management Systems'],
      level: 'Intermediate'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      category: 'Database',
      description: 'Reliable relational database management system widely used in web applications.',
      usage: 'Data storage, complex queries, database design, and integration with backend applications.',
      projects: ['ERP System Database', 'E-commerce Data Management', 'User Authentication Systems'],
      level: 'Intermediate'
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'Database',
      description: 'NoSQL document database that provides high performance and flexible data modeling.',
      usage: 'Storing unstructured data, rapid prototyping, and applications requiring flexible schemas.',
      projects: ['Document Storage Systems', 'Content Management', 'Real-time Applications'],
      level: 'Beginner'
    },
    {
      id: 'rest-apis',
      name: 'REST APIs',
      category: 'Backend',
      description: 'Architectural style for designing networked applications using HTTP methods.',
      usage: 'Creating scalable web services, data exchange between frontend and backend systems.',
      projects: ['OTP Authentication APIs', 'GST Validation Services', 'User Management APIs'],
      level: 'Intermediate'
    },
    {
      id: 'frappe',
      name: 'Frappe',
      category: 'Framework',
      description: 'Full-stack web application framework built on Python, used for rapid application development.',
      usage: 'ERP system development, custom business applications, and workflow automation.',
      projects: ['Education ERP Module', 'Student Lifecycle Management', 'Automated Workflows'],
      level: 'Beginner'
    },
    {
      id: 'erpnext',
      name: 'ERPNext',
      category: 'ERP',
      description: 'Open-source Enterprise Resource Planning software built on the Frappe framework.',
      usage: 'Business process management, custom module development, and system integration.',
      projects: ['Student ID Card Generation', 'Educational Institution Management', 'Custom Print Formats'],
      level: 'Beginner'
    },
    {
      id: 'html',
      name: 'HTML',
      category: 'Frontend',
      description: 'Standard markup language for creating web pages and web applications.',
      usage: 'Structuring web content, semantic markup, and creating accessible web interfaces.',
      projects: ['All Web Projects', 'Email Templates', 'Documentation Pages'],
      level: 'Advanced'
    },
    {
      id: 'css',
      name: 'CSS',
      category: 'Frontend',
      description: 'Style sheet language used for describing the presentation of HTML documents.',
      usage: 'Styling web interfaces, responsive design, animations, and modern layout techniques.',
      projects: ['Portfolio Styling', 'Component Design Systems', 'Responsive Layouts'],
      level: 'Intermediate'
    },
    {
      id: 'git',
      name: 'Git',
      category: 'Tools',
      description: 'Distributed version control system for tracking changes in source code during development.',
      usage: 'Code versioning, collaboration, branch management, and project history tracking.',
      projects: ['All Development Projects', 'Team Collaboration', 'Code Reviews'],
      level: 'Intermediate'
    },
    {
      id: 'docker',
      name: 'Docker',
      category: 'Tools',
      description: 'Platform for developing, shipping, and running applications using containerization.',
      usage: 'Application deployment, environment consistency, and development workflow optimization.',
      projects: ['Development Environment Setup', 'Application Containerization'],
      level: 'Beginner'
    },
    {
      id: 'linux',
      name: 'Linux',
      category: 'Tools',
      description: 'Open-source operating system widely used in server environments and development.',
      usage: 'Server management, command-line operations, and development environment setup.',
      projects: ['Server Configuration', 'Development Environment', 'System Administration'],
      level: 'Intermediate'
    },
    {
      id: 'cpp',
      name: 'C++',
      category: 'Languages',
      description: 'General-purpose programming language with object-oriented and low-level features.',
      usage: 'Academic projects, algorithm implementation, and system programming concepts.',
      projects: ['Data Structures Implementation', 'Algorithm Challenges', 'Academic Assignments'],
      level: 'Intermediate'
    },
    {
      id: 'java',
      name: 'Java',
      category: 'Languages',
      description: 'Object-oriented programming language known for platform independence and enterprise applications.',
      usage: 'Academic coursework, object-oriented programming concepts, and algorithm implementation.',
      projects: ['OOP Assignments', 'Algorithm Implementation', 'Academic Projects'],
      level: 'Beginner'
    },
    {
      id: 'sqlite',
      name: 'SQLite',
      category: 'Database',
      description: 'Lightweight, serverless database engine perfect for development and small applications.',
      usage: 'Local data storage, development databases, and embedded applications.',
      projects: ['BaseCart Development Database', 'Local Data Storage', 'Prototyping'],
      level: 'Intermediate'
    },
    {
      id: 'oop',
      name: 'OOP',
      category: 'Concepts',
      description: 'Object-Oriented Programming paradigm focusing on objects, classes, and inheritance.',
      usage: 'Code organization, reusability, and maintainable software architecture design.',
      projects: ['All Programming Projects', 'Software Design', 'Code Architecture'],
      level: 'Intermediate'
    },
    {
      id: 'dsa',
      name: 'DSA',
      category: 'Concepts',
      description: 'Data Structures and Algorithms - fundamental concepts for efficient problem solving.',
      usage: 'Optimizing code performance, solving complex problems, and technical interview preparation.',
      projects: ['Algorithm Challenges', 'Performance Optimization', 'Problem Solving'],
      level: 'Intermediate'
    },
    {
      id: 'dbms',
      name: 'DBMS',
      category: 'Concepts',
      description: 'Database Management Systems - principles of data storage, retrieval, and management.',
      usage: 'Database design, query optimization, and understanding data relationships.',
      projects: ['Database Design', 'Query Optimization', 'Data Modeling'],
      level: 'Intermediate'
    }
  ];

  // Handle window resize for responsive behavior
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'text-emerald-400 bg-emerald-500/20';
      case 'Intermediate': return 'text-cyan-400 bg-cyan-500/20';
      case 'Beginner': return 'text-amber-400 bg-amber-500/20';
      default: return 'text-slate-400 bg-slate-500/20';
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Languages': '💻',
      'Frontend': '🎨',
      'Backend': '⚙️',
      'Database': '🗄️',
      'Framework': '🏗️',
      'ERP': '📊',
      'Tools': '🛠️',
      'Concepts': '📚'
    };
    return icons[category] || '📋';
  };

  return (
    <section id="skills" className="section-padding bg-slate-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Click on any skill to learn more about my experience and how I use it in projects
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto">
          <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-3 gap-12'} items-start`}>
            
            {/* Skills Grid Container */}
            <div className={`${isMobile ? 'order-1' : 'col-span-2'}`}>
              <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  <svg className="w-6 h-6 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Technical Skills
                </h3>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skillsData.map((skill) => (
                    <button
                      key={skill.id}
                      onClick={() => handleSkillClick(skill)}
                      className={`
                        p-4 rounded-xl text-left transition-all duration-300 border-2
                        ${selectedSkill?.id === skill.id 
                          ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400 shadow-lg shadow-cyan-500/10' 
                          : 'bg-slate-700/60 border-slate-600/40 text-slate-400 hover:bg-slate-700/80 hover:border-slate-600/60 hover:text-slate-200'
                        }
                        focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900
                      `}
                    >
                      <div className="font-medium text-sm leading-tight">
                        {skill.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {skill.category}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Mobile: Expandable Detail Below Grid */}
                {isMobile && selectedSkill && (
                  <div className="mt-8 p-6 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-cyan-400/40 animate-fadeIn">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{getCategoryIcon(selectedSkill.category)}</span>
                        <h4 className="text-xl font-semibold text-white">{selectedSkill.name}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(selectedSkill.level)}`}>
                        {selectedSkill.level}
                      </span>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div>
                        <h5 className="font-medium text-slate-300 mb-2">Description</h5>
                        <p className="text-slate-400 leading-relaxed">{selectedSkill.description}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-slate-300 mb-2">How I Use It</h5>
                        <p className="text-slate-400 leading-relaxed">{selectedSkill.usage}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-slate-300 mb-2">Projects</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedSkill.projects.map((project, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-700/70 text-slate-300 text-xs rounded-full border border-slate-600/40">
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop: Side Panel */}
            {!isMobile && (
              <div className="order-2">
                <div className="sticky top-24">
                  {selectedSkill ? (
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-8 animate-slideIn">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{getCategoryIcon(selectedSkill.category)}</span>
                          <div>
                            <h4 className="text-2xl font-semibold text-white">{selectedSkill.name}</h4>
                            <p className="text-slate-400 text-sm">{selectedSkill.category}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getLevelColor(selectedSkill.level)}`}>
                          {selectedSkill.level}
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h5 className="font-semibold text-slate-300 mb-3 flex items-center">
                            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Description
                          </h5>
                          <p className="text-slate-400 leading-relaxed">{selectedSkill.description}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-slate-300 mb-3 flex items-center">
                            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            How I Use It
                          </h5>
                          <p className="text-slate-400 leading-relaxed">{selectedSkill.usage}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-slate-300 mb-3 flex items-center">
                            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Related Projects
                          </h5>
                          <div className="space-y-2">
                            {selectedSkill.projects.map((project, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                                <span className="text-slate-400 text-sm">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <h4 className="text-xl font-semibold text-white mb-3">Select a Skill</h4>
                      <p className="text-slate-400 leading-relaxed">
                        Click on any skill from the grid to see detailed information about my experience and how I use it in projects.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{skillsData.length}</div>
              <div className="text-sm text-slate-400">Technologies</div>
            </div>
            <div className="w-px h-8 bg-slate-600/50"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">8</div>
              <div className="text-sm text-slate-400">Categories</div>
            </div>
            <div className="w-px h-8 bg-slate-600/50"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">2+</div>
              <div className="text-sm text-slate-400">Years Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;