function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Your University Name",
      location: "City, State",
      duration: "2022 - 2026",
      status: "Expected Graduation",
      gpa: "8.5/10.0",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning",
        "Active member of Computer Science Society and Coding Club",
        "Participated in multiple hackathons and coding competitions"
      ]
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Science (PCM + Computer Science)",
      institution: "Your School Name", 
      location: "City, State",
      duration: "2020 - 2022",
      status: "Completed",
      gpa: "92%",
      highlights: [
        "Mathematics, Physics, Chemistry with Computer Science",
        "School Topper in Computer Science",
        "Led the school's tech team for annual fest"
      ]
    }
  ];

  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Online Platform",
      date: "2024",
      color: "indigo"
    },
    {
      title: "Machine Learning Specialization", 
      provider: "Coursera",
      date: "2024",
      color: "emerald"
    },
    {
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "2023",
      color: "violet"
    },
    {
      title: "React Developer Certification",
      provider: "Meta",
      date: "2023", 
      color: "cyan"
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning through certifications and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Academic Background</h3>
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== educationData.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-indigo-400 to-violet-400"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-violet-500 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl flex-1 hover:shadow-purple-500/10 transition-all duration-300 border border-gray-700">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">{edu.degree}</h4>
                          <p className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{edu.field}</p>
                        </div>
                        <span className={`text-xs font-semibold px-4 py-2 rounded-full ${
                          edu.status === 'Completed' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <div className="text-gray-300 mb-4">
                        <p className="font-semibold text-lg">{edu.institution}</p>
                        <p className="text-gray-400">{edu.location} • {edu.duration}</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-indigo-500/20 to-violet-500/20 p-4 rounded-2xl mb-6 border border-indigo-500/30">
                        <span className="text-gray-300 font-medium">GPA: </span>
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{edu.gpa}</span>
                      </div>
                      
                      <ul className="space-y-3">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-300 flex items-start space-x-3">
                            <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h3>
            <div className="grid gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                  <div className="flex items-center space-x-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      cert.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                      cert.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                      cert.color === 'violet' ? 'from-violet-500 to-violet-600' :
                      'from-cyan-500 to-cyan-600'
                    } flex items-center justify-center shadow-lg`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-gray-300">{cert.provider}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-gray-400">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">Academic Achievements</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-2xl border border-indigo-500/30">
                  <div className="text-3xl font-black text-indigo-400 mb-2">Top 10%</div>
                  <div className="text-gray-300 font-medium">Class Ranking</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl border border-emerald-500/30">
                  <div className="text-3xl font-black text-emerald-400 mb-2">5+</div>
                  <div className="text-gray-300 font-medium">Hackathons</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
