import { useState, useRef, useEffect } from 'react';

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const skillDetailRef = useRef(null);

  // Organized skills data by categories
  const skillsData = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        {
          id: 'react',
          name: 'React',
          description: 'Popular JavaScript library for building user interfaces with component-based architecture.',
          usage: 'Creating modern, responsive web applications with reusable components and state management.',
          projects: ['BaseCart Frontend', 'Personal Portfolio', 'Component Libraries'],
          level: 'Intermediate'
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          description: 'Dynamic programming language essential for web development and interactive user interfaces.',
          usage: 'Frontend development, DOM manipulation, and creating interactive web applications.',
          projects: ['BaseCart E-commerce Platform', 'Portfolio Website', 'Interactive UI Components'],
          level: 'Intermediate'
        },
        {
          id: 'html',
          name: 'HTML',
          description: 'Standard markup language for creating web pages and web applications.',
          usage: 'Structuring web content, semantic markup, and creating accessible web interfaces.',
          projects: ['All Web Projects', 'Email Templates', 'Documentation Pages'],
          level: 'Advanced'
        },
        {
          id: 'css',
          name: 'CSS',
          description: 'Style sheet language used for describing the presentation of HTML documents.',
          usage: 'Styling web interfaces, responsive design, animations, and modern layout techniques.',
          projects: ['Portfolio Styling', 'Component Design Systems', 'Responsive Layouts'],
          level: 'Intermediate'
        }
      ]
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        {
          id: 'python',
          name: 'Python',
          description: 'A versatile, high-level programming language known for its simplicity and readability.',
          usage: 'Backend development, API creation, data processing, and automation scripts in my current internship at ADRS Technosoft.',
          projects: ['Education ERP System', 'REST API Development', 'Data Processing Scripts'],
          level: 'Advanced'
        },
        {
          id: 'django',
          name: 'Django',
          description: 'High-level Python web framework that encourages rapid development and clean design.',
          usage: 'Building robust backend systems, REST APIs, and web applications with built-in admin interface.',
          projects: ['BaseCart Backend', 'API Development', 'Database Management Systems'],
          level: 'Intermediate'
        },
        {
          id: 'rest-apis',
          name: 'REST APIs',
          description: 'Architectural style for designing networked applications using HTTP methods.',
          usage: 'Creating scalable web services, data exchange between frontend and backend systems.',
          projects: ['OTP Authentication APIs', 'GST Validation Services', 'User Management APIs'],
          level: 'Intermediate'
        },
        {
          id: 'frappe',
          name: 'Frappe',
          description: 'Full-stack web application framework built on Python, used for rapid application development.',
          usage: 'ERP system development, custom business applications, and workflow automation.',
          projects: ['Education ERP Module', 'Student Lifecycle Management', 'Automated Workflows'],
          level: 'Beginner'
        }
      ]
    },
    database: {
      title: 'Database',
      icon: '🗄️',
      skills: [
        {
          id: 'mysql',
          name: 'MySQL',
          description: 'Reliable relational database management system widely used in web applications.',
          usage: 'Data storage, complex queries, database design, and integration with backend applications.',
          projects: ['ERP System Database', 'E-commerce Data Management', 'User Authentication Systems'],
          level: 'Intermediate'
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
          description: 'NoSQL document database that provides high performance and flexible data modeling.',
          usage: 'Storing unstructured data, rapid prototyping, and applications requiring flexible schemas.',
          projects: ['Document Storage Systems', 'Content Management', 'Real-time Applications'],
          level: 'Beginner'
        },
        {
          id: 'sqlite',
          name: 'SQLite',
          description: 'Lightweight, serverless database engine perfect for development and small applications.',
          usage: 'Local data storage, development databases, and embedded applications.',
          projects: ['BaseCart Development Database', 'Local Data Storage', 'Prototyping'],
          level: 'Intermediate'
        }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        {
          id: 'git',
          name: 'Git',
          description: 'Distributed version control system for tracking changes in source code during development.',
          usage: 'Code versioning, collaboration, branch management, and project history tracking.',
          projects: ['All Development Projects', 'Team Collaboration', 'Code Reviews'],
          level: 'Intermediate'
        },
        {
          id: 'docker',
          name: 'Docker',
          description: 'Platform for developing, shipping, and running applications using containerization.',
          usage: 'Application deployment, environment consistency, and development workflow optimization.',
          projects: ['Development Environment Setup', 'Application Containerization'],
          level: 'Beginner'
        },
        {
          id: 'linux',
          name: 'Linux',
          description: 'Open-source operating system widely used in server environments and development.',
          usage: 'Server management, command-line operations, and development environment setup.',
          projects: ['Server Configuration', 'Development Environment', 'System Administration'],
          level: 'Intermediate'
        },
        {
          id: 'erpnext',
          name: 'ERPNext',
          description: 'Open-source Enterprise Resource Planning software built on the Frappe framework.',
          usage: 'Business process management, custom module development, and system integration.',
          projects: ['Student ID Card Generation', 'Educational Institution Management', 'Custom Print Formats'],
          level: 'Beginner'
        }
      ]
    },
    languages: {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        {
          id: 'cpp',
          name: 'C++',
          description: 'General-purpose programming language with object-oriented and low-level features.',
          usage: 'Academic projects, algorithm implementation, and system programming concepts.',
          projects: ['Data Structures Implementation', 'Algorithm Challenges', 'Academic Assignments'],
          level: 'Intermediate'
        },
        {
          id: 'java',
          name: 'Java',
          description: 'Object-oriented programming language known for platform independence and enterprise applications.',
          usage: 'Academic coursework, object-oriented programming concepts, and algorithm implementation.',
          projects: ['OOP Assignments', 'Algorithm Implementation', 'Academic Projects'],
          level: 'Beginner'
        }
      ]
    },
    concepts: {
      title: 'Core Concepts',
      icon: '📚',
      skills: [
        {
          id: 'oop',
          name: 'OOP',
          description: 'Object-Oriented Programming paradigm focusing on objects, classes, and inheritance.',
          usage: 'Code organization, reusability, and maintainable software architecture design.',
          projects: ['All Programming Projects', 'Software Design', 'Code Architecture'],
          level: 'Intermediate'
        },
        {
          id: 'dsa',
          name: 'DSA',
          description: 'Data Structures and Algorithms - fundamental concepts for efficient problem solving.',
          usage: 'Optimizing code performance, solving complex problems, and technical interview preparation.',
          projects: ['Algorithm Challenges', 'Performance Optimization', 'Problem Solving'],
          level: 'Intermediate'
        },
        {
          id: 'dbms',
          name: 'DBMS',
          description: 'Database Management Systems - principles of data storage, retrieval, and management.',
          usage: 'Database design, query optimization, and understanding data relationships.',
          projects: ['Database Design', 'Query Optimization', 'Data Modeling'],
          level: 'Intermediate'
        }
      ]
    }
  };

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSkillClick = (skill) => {
    // Add visual feedback for the clicked skill
    const clickedButton = document.querySelector(`[data-skill-id="${skill.id}"]`);
    if (clickedButton) {
      clickedButton.classList.add('selecting');
      setTimeout(() => {
        clickedButton.classList.remove('selecting');
        clickedButton.classList.add('newly-selected');
        setTimeout(() => {
          clickedButton.classList.remove('newly-selected');
        }, 600);
      }, 100);
    }

    // Set the selected skill
    const wasAlreadySelected = selectedSkill?.id === skill.id;
    setSelectedSkill(wasAlreadySelected ? null : skill);
    
    // Smooth scroll to description panel (only if selecting a new skill)
    if (!wasAlreadySelected && skill && skillDetailRef.current) {
      // Small delay to ensure state update and DOM changes
      setTimeout(() => {
        const element = skillDetailRef.current;
        const navbarHeight = 80; // Account for fixed navbar
        const offset = isMobile ? 30 : 50; // Additional offset for better positioning
        
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight - offset;

        // Check if the element is already reasonably in view
        const elementRect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isReasonablyInView = elementRect.top >= navbarHeight + 20 && 
                                   elementRect.top <= viewportHeight * 0.7;
        
        // Only scroll if not already reasonably in view
        if (!isReasonablyInView) {
          // Add smooth scroll with easing
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced': return 'text-emerald-400 bg-emerald-500/20';
      case 'Intermediate': return 'text-cyan-400 bg-cyan-500/20';
      case 'Beginner': return 'text-amber-400 bg-amber-500/20';
      default: return 'text-slate-400 bg-slate-500/20';
    }
  };

  // Get total skills count
  const getTotalSkills = () => {
    return Object.values(skillsData).reduce((total, category) => total + category.skills.length, 0);
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
          <div className={`${isMobile ? 'flex flex-col gap-8' : 'grid grid-cols-4 gap-8'}`}>
            
            {/* Skills Categories Grid */}
            <div className={`${isMobile ? 'order-1' : 'col-span-3'}`}>
              <div className="skills-grid-container">
                {Object.entries(skillsData).map(([categoryKey, category]) => (
                  <div key={categoryKey} className="category-card bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6">
                    {/* Category Header */}
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                        <span className="text-xs text-slate-400">
                          {category.skills.length} skills
                        </span>
                      </div>
                    </div>
                    
                    {/* Skills Grid for Category */}
                    <div className="skill-grid">
                      {category.skills.map((skill) => (
                        <button
                          key={skill.id}
                          data-skill-id={skill.id}
                          onClick={() => handleSkillClick(skill)}
                          className={`
                            skill-button skill-transition p-3 rounded-lg text-left border-2 text-sm
                            ${selectedSkill?.id === skill.id 
                              ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400 shadow-lg shadow-cyan-500/10' 
                              : 'bg-slate-700/60 border-slate-600/40 text-slate-400 hover:bg-slate-700/80 hover:border-slate-600/60 hover:text-slate-200'
                            }
                          `}
                        >
                          <div className="font-medium leading-tight mb-1">
                            {skill.name}
                          </div>
                          <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: Expandable Detail Below Grid */}
              {isMobile && selectedSkill && (
                <div 
                  ref={skillDetailRef}
                  className="skill-detail-panel mt-8 p-6 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-cyan-400/40 animate-fadeIn"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white">{selectedSkill.name}</h4>
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

            {/* Desktop: Fixed Detail Panel */}
            {!isMobile && (
              <div className="skill-detail-panel order-2" ref={skillDetailRef}>
                <div className="detail-panel-sticky">
                  {selectedSkill ? (
                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 animate-slideIn">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h4 className="text-xl font-semibold text-white">{selectedSkill.name}</h4>
                          <p className="text-slate-400 text-sm mt-1">
                            {Object.entries(skillsData).find(([, category]) => 
                              category.skills.some(skill => skill.id === selectedSkill.id)
                            )?.[1]?.title}
                          </p>
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getLevelColor(selectedSkill.level)}`}>
                          {selectedSkill.level}
                        </span>
                      </div>
                      
                      <div className="space-y-5">
                        <div>
                          <h5 className="font-semibold text-slate-300 mb-2 flex items-center text-sm">
                            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Description
                          </h5>
                          <p className="text-slate-400 leading-relaxed text-sm">{selectedSkill.description}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-slate-300 mb-2 flex items-center text-sm">
                            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            How I Use It
                          </h5>
                          <p className="text-slate-400 leading-relaxed text-sm">{selectedSkill.usage}</p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-slate-300 mb-2 flex items-center text-sm">
                            <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Related Projects
                          </h5>
                          <div className="space-y-1.5">
                            {selectedSkill.projects.map((project, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                                <span className="text-slate-400 text-sm">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 text-center">
                      <div className="text-4xl mb-3">🎯</div>
                      <h4 className="text-lg font-semibold text-white mb-2">Select a Skill</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        Click on any skill from the categories to see detailed information.
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
              <div className="text-2xl font-bold text-cyan-400">{getTotalSkills()}</div>
              <div className="text-sm text-slate-400">Technologies</div>
            </div>
            <div className="w-px h-8 bg-slate-600/50"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{Object.keys(skillsData).length}</div>
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