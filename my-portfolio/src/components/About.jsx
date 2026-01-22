function About() {
  return (
    <section id="about" className="section-padding bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Engineering student focused on backend development and ERP systems
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Computer Science Engineer
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                I'm a Computer Science Engineering student at Shriram Institute of Science and Technology, 
                Jabalpur, graduating in 2026 with a CGPA of 8.03. Currently working as an Python Development 
                Intern at ADRS Techno, where I develop backend APIs and support ERP systems.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My experience includes Python backend development, REST API creation, ERPNext/Frappe 
                framework, and database management. I focus on building reliable, scalable solutions 
                for business applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 p-6 rounded-2xl text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-cyan-400 mb-2">2026</div>
                <div className="text-slate-300 font-medium text-sm">Expected Graduation</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-6 rounded-2xl text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
                <div className="text-slate-300 font-medium text-sm">Projects Completed</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8">What I Do</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl text-cyan-400 group-hover:from-cyan-500/30 group-hover:to-cyan-600/30 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Backend Development</h4>
                    <p className="text-slate-400 text-sm">Building REST APIs, database integration, and server-side applications using Python and Django</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl text-blue-400 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">ERP Systems</h4>
                    <p className="text-slate-400 text-sm">Working with ERPNext/Frappe framework for business process automation and system integration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 rounded-xl text-indigo-400 group-hover:from-indigo-500/30 group-hover:to-indigo-600/30 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Database Management</h4>
                    <p className="text-slate-400 text-sm">Experience with MySQL, MongoDB, and database design for efficient data storage and retrieval</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
