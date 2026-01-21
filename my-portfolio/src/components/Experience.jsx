function Experience() {
  const experiences = [
    {
      title: "Bachelor of Technology",
      subtitle: "Computer Science & Engineering",
      organization: "Shriram Institute of Science and Technology",
      location: "Jabalpur, Madhya Pradesh",
      period: "2022 - 2026",
      type: "education",
      description: "Relevant coursework: Data Structures, Algorithms, Database Systems, Operating Systems, Object-Oriented Programming",
      highlights: [
        "CGPA: 8.03/10.0",
        "Focus on backend development and database systems",
        "Active participation in technical workshops"
      ]
    },
    {
      title: "Engineering Analyst Intern",
      subtitle: "Python Developer",
      organization: "ADRS Technosoft Pvt. Ltd.",
      location: "Remote",
      period: "Dec 2025 - Present",
      type: "work",
      description: "Backend API development using Python, REST API development for OTP authentication, onboarding workflows, GST validation, and ERPNext/Frappe backend support",
      highlights: [
        "Developed REST APIs for authentication and validation systems",
        "Worked with ERPNext/Frappe framework for ERP solutions",
        "Collaborated with cross-functional teams on production systems",
        "Implemented API validation and structured error handling"
      ]
    },
    {
      title: "Class XII",
      subtitle: "Science Stream",
      organization: "Meridian Senior Secondary School",
      location: "Jabalpur, Madhya Pradesh",
      period: "2021 - 2022",
      type: "education",
      description: "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry",
      highlights: [
        "Percentage: 70%",
        "Strong foundation in Mathematics and Science",
        "Developed interest in computer programming"
      ]
    }
  ];

  const certifications = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco",
      date: "2024",
      credentialId: "CISCO-PE1-2024"
    },
    {
      title: "Python Essentials 2",
      issuer: "Cisco",
      date: "2024",
      credentialId: "CISCO-PE2-2024"
    },
    {
      title: "CCNA Module 1",
      issuer: "Cisco",
      date: "2024",
      credentialId: "CISCO-CCNA1-2024"
    },
    {
      title: "Data Visualization using Power BI",
      issuer: "Be10x",
      date: "2024",
      credentialId: "BE10X-POWERBI-2024"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        );
      case 'work':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
          </svg>
        );
      case 'research':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="section-padding bg-slate-900">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            My academic journey and professional experience in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-8">Experience & Education</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-24 bg-slate-700"></div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="bg-cyan-400 text-slate-900 p-3 rounded-full flex-shrink-0">
                      {getIcon(exp.type)}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-slate-800 rounded-xl p-6 border border-slate-700">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                          <p className="text-cyan-400 font-medium">{exp.subtitle}</p>
                          <p className="text-slate-400 text-sm">{exp.organization} • {exp.location}</p>
                        </div>
                        <span className="text-sm text-slate-400 bg-slate-700 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-slate-300 mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-slate-400 text-sm flex items-start space-x-2">
                            <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:border-cyan-400/50 transition-colors">
                  <div className="flex items-start space-x-3">
                    <div className="bg-cyan-400/20 text-cyan-400 p-2 rounded-lg flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                      <p className="text-slate-400 text-xs">{cert.issuer}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-slate-500">{cert.date}</span>
                        <span className="text-xs text-cyan-400">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;