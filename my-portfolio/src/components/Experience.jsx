import { useState, useEffect } from 'react';

function Experience() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      title: "Engineering Analyst Intern",
      subtitle: "Python Developer",
      organization: "ADRS Technosoft Pvt. Ltd.",
      location: "Remote",
      period: "Dec 2025 - Present",
      type: "work",
      highlights: [
        "Developed REST APIs for authentication and validation systems",
        "Worked with ERPNext/Frappe framework for ERP solutions",
        "Collaborated with cross-functional teams on production systems",
        "Implemented API validation and structured error handling"
      ]
    }
  ];

  const education = [
    {
      title: "Bachelor of Technology",
      subtitle: "Computer Science & Engineering",
      organization: "Shriram Institute of Science and Technology",
      location: "Jabalpur, Madhya Pradesh",
      period: "2022 - 2026",
      grade: "CGPA: 8.03/10.0",
      highlights: [
        "Focus on backend development and database systems",
        "Relevant coursework: DSA, DBMS, OS, OOP",
        "Active participation in technical workshops"
      ]
    },
    {
      title: "Class XII",
      subtitle: "Science Stream",
      organization: "Meridian Senior Secondary School",
      location: "Jabalpur, Madhya Pradesh",
      period: "2021 - 2022",
      grade: "Percentage: 70%",
      highlights: [
        "Strong foundation in Mathematics and Science",
        "Developed interest in computer programming"
      ]
    },
    {
      title: "Class X",
      subtitle: "Secondary Education",
      organization: "Meridian Senior Secondary School",
      location: "Jabalpur, Madhya Pradesh",
      period: "2019 - 2020",
      grade: "Percentage: 76%",
      highlights: [
        "Solid academic foundation",
        "Excellence in Mathematics and Science"
      ]
    }
  ];

  const certifications = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      date: "2024",
      status: "Verified"
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco",
      date: "2024",
      status: "Verified"
    },
    {
      title: "CCNA Module 1",
      issuer: "Cisco",
      date: "2024",
      status: "Verified"
    },
    {
      title: "Data Visualization using Power BI",
      issuer: "Be10x",
      date: "2024",
      status: "Verified"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-900">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold text-white mb-6`}>
            Experience & Education
          </h2>
          <p className={`${isMobile ? 'text-lg px-4' : 'text-xl'} text-slate-300 max-w-2xl mx-auto leading-relaxed`}>
            My academic journey and professional experience in software development
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'lg:grid-cols-3 gap-12'} max-w-7xl mx-auto`}>
          {/* Experience & Education */}
          <div className={`${isMobile ? 'order-1' : 'lg:col-span-2'} space-y-12`}>
            
            {/* Experience Section */}
            <div>
              <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-8 flex items-center`}>
                <div className="w-1 h-8 bg-cyan-400 rounded-full mr-4"></div>
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className={`experience-card ${isMobile ? 'p-5' : ''}`}>
                    <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-start justify-between'} mb-4`}>
                      <div className="flex items-start space-x-4">
                        <div className="experience-icon work-icon">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white mb-1`}>{exp.title}</h4>
                          <p className="text-cyan-400 font-semibold mb-1">{exp.subtitle}</p>
                          <p className={`text-slate-400 ${isMobile ? 'text-sm' : 'text-sm'}`}>{exp.organization}</p>
                          <p className={`text-slate-500 ${isMobile ? 'text-sm' : 'text-sm'}`}>{exp.location}</p>
                        </div>
                      </div>
                      <span className={`experience-period ${isMobile ? 'self-start' : ''}`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className={`text-slate-300 ${isMobile ? 'text-sm' : 'text-sm'} leading-relaxed`}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-8 flex items-center`}>
                <div className="w-1 h-8 bg-cyan-400 rounded-full mr-4"></div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className={`experience-card ${isMobile ? 'p-5' : ''}`}>
                    <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-start justify-between'} mb-4`}>
                      <div className="flex items-start space-x-4">
                        <div className="experience-icon education-icon">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold text-white mb-1`}>{edu.title}</h4>
                          <p className="text-cyan-400 font-semibold mb-1">{edu.subtitle}</p>
                          <p className={`text-slate-400 ${isMobile ? 'text-sm' : 'text-sm'}`}>{edu.organization}</p>
                          <p className={`text-slate-500 ${isMobile ? 'text-sm mb-2' : 'text-sm mb-2'}`}>{edu.location}</p>
                          {edu.grade && (
                            <span className="inline-flex items-center px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
                              {edu.grade}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`experience-period ${isMobile ? 'self-start' : ''}`}>
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className={`text-slate-300 ${isMobile ? 'text-sm' : 'text-sm'} leading-relaxed`}>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`${isMobile ? 'order-2' : ''}`}>
            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-8 flex items-center`}>
              <div className="w-1 h-8 bg-cyan-400 rounded-full mr-4"></div>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className={`certification-card ${isMobile ? 'p-4' : ''}`}>
                  <div className="flex items-start space-x-3">
                    <div className="certification-icon">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-white ${isMobile ? 'text-sm' : 'text-sm'} mb-1`}>{cert.title}</h4>
                      <p className={`text-slate-400 ${isMobile ? 'text-sm' : 'text-sm'} mb-2`}>{cert.issuer}</p>
                      <div className="flex justify-between items-center">
                        <span className={`text-slate-500 ${isMobile ? 'text-xs' : 'text-xs'}`}>{cert.date}</span>
                        <span className="certification-status">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Stats */}
            <div className={`mt-8 bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-700/60 ${isMobile ? 'p-5' : 'p-6'}`}>
              <h4 className="font-bold text-white mb-4 text-center">Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-slate-400 ${isMobile ? 'text-sm' : 'text-sm'}`}>Experience</span>
                  <span className={`text-cyan-400 font-semibold ${isMobile ? 'text-sm' : 'text-sm'}`}>1+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-slate-400 ${isMobile ? 'text-sm' : 'text-sm'}`}>Education</span>
                  <span className={`text-cyan-400 font-semibold ${isMobile ? 'text-sm' : 'text-sm'}`}>B.Tech (Ongoing)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-slate-400 ${isMobile ? 'text-sm' : 'text-sm'}`}>Certifications</span>
                  <span className={`text-cyan-400 font-semibold ${isMobile ? 'text-sm' : 'text-sm'}`}>{certifications.length} Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;