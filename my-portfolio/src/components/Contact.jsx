import { useState, useEffect } from 'react';

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="contact" className="section-padding bg-slate-800">
      <div className="container">
        {/* Section header */}
        <div className={`text-center ${isMobile ? 'mb-12' : 'mb-16'}`}>
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold text-white mb-6`}>
            Let's Connect
          </h2>
          <p className={`${isMobile ? 'text-lg px-4' : 'text-xl'} text-slate-300 max-w-2xl mx-auto leading-relaxed`}>
            Open to internship opportunities and collaborations in backend development and ERP systems.
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : isTablet ? 'grid-cols-1 gap-12' : 'lg:grid-cols-2 gap-16'} items-start max-w-6xl mx-auto`}>
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className={`contact-info-card ${isMobile ? 'p-5' : ''}`}>
              <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-6`}>Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className={`text-slate-300 font-medium ${isMobile ? 'text-sm' : ''}`}>Currently seeking internship opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className={`text-slate-300 font-medium ${isMobile ? 'text-sm' : ''}`}>Available for backend development projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className={`text-slate-300 font-medium ${isMobile ? 'text-sm' : ''}`}>Open to ERP system collaborations</span>
                </div>
              </div>

              {/* Primary Contact */}
              <div className={`bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl ${isMobile ? 'p-4' : 'p-6'} mb-6`}>
                <div className="flex items-center space-x-4">
                  <div className={`bg-cyan-400 text-slate-900 ${isMobile ? 'p-2.5' : 'p-3'} rounded-xl`}>
                    <svg className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-white ${isMobile ? 'text-base' : 'text-lg'}`}>Email Me</h4>
                    <a 
                      href="mailto:ayushkachhi52@gmail.com"
                      className={`text-cyan-400 hover:text-cyan-300 font-medium transition-colors ${isMobile ? 'text-sm' : ''}`}
                    >
                      ayushkachhi52@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a 
                href="tel:+919575079392"
                className={`contact-method-card group ${isMobile ? 'p-4' : ''}`}
              >
                <div className={`contact-icon ${isMobile ? 'p-2.5' : ''}`}>
                  <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-white ${isMobile ? 'text-sm' : ''}`}>Phone</h4>
                  <p className={`text-slate-400 group-hover:text-slate-300 transition-colors ${isMobile ? 'text-sm' : ''}`}>+91 9575079392</p>
                </div>
              </a>

              <div className={`contact-method-card ${isMobile ? 'p-4' : ''}`}>
                <div className={`contact-icon ${isMobile ? 'p-2.5' : ''}`}>
                  <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-white ${isMobile ? 'text-sm' : ''}`}>Location</h4>
                  <p className={`text-slate-400 ${isMobile ? 'text-sm' : ''}`}>Jabalpur, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`font-semibold text-white mb-4 ${isMobile ? 'text-sm' : ''}`}>Connect With Me</h4>
              <div className={`flex ${isMobile ? 'space-x-3' : 'space-x-4'}`}>
                <a 
                  href="https://linkedin.com/in/ayush-kachhi-741204273" 
                  className={`btn-social ${isMobile ? 'min-w-[44px] min-h-[44px] p-2.5' : ''}`}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Ayushhk14" 
                  className={`btn-social ${isMobile ? 'min-w-[44px] min-h-[44px] p-2.5' : ''}`}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-card ${isMobile ? 'p-5' : ''}`}>
            <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white mb-6`}>Send a Message</h3>
            <form className="space-y-6">
              <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'sm:grid-cols-2 gap-6'}`}>
                <div>
                  <label className={`form-label ${isMobile ? 'text-sm' : ''}`}>Name</label>
                  <input 
                    type="text" 
                    className={`form-input ${isMobile ? 'text-base' : ''}`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`form-label ${isMobile ? 'text-sm' : ''}`}>Email</label>
                  <input 
                    type="email" 
                    className={`form-input ${isMobile ? 'text-base' : ''}`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`form-label ${isMobile ? 'text-sm' : ''}`}>Subject</label>
                <input 
                  type="text" 
                  className={`form-input ${isMobile ? 'text-base' : ''}`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`form-label ${isMobile ? 'text-sm' : ''}`}>Message</label>
                <textarea 
                  rows={isMobile ? "4" : "5"}
                  className={`form-input resize-none ${isMobile ? 'text-base' : ''}`}
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn-primary w-full ${isMobile ? 'py-3' : ''}`}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className={`${isMobile ? 'mt-16 pt-6' : 'mt-20 pt-8'} border-t border-slate-700/60 text-center`}>
          <p className={`text-slate-400 mb-2 ${isMobile ? 'text-sm' : ''}`}>
            © 2026 Ayush Kachhi. Built with React and CSS.
          </p>
          <p className={`text-slate-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>
            Engineering Analyst Intern | Python Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;