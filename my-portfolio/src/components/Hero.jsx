import { useState, useEffect } from 'react';

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const roles = [
    'Python Developer Intern',
    'Python Developer',
    'Backend Developer',
    'Computer Science Student'
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let index = 0;
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (index < currentRoleText.length) {
          setDisplayedText(currentRoleText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentRole((prev) => (prev + 1) % roles.length);
            setDisplayedText('');
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [currentRole, isTyping]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-spacing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float bg-cyan-500"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 animate-float bg-blue-500" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 container">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with animated name */}
          <div className="mb-8 content-spacing">
            <h1 className={`${isMobile ? 'text-4xl' : 'text-6xl md:text-7xl lg:text-8xl'} font-black leading-tight mb-6`}>
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient">
                Ayush Kachhi
              </span>
            </h1>
            
            {/* Animated role with typing effect */}
            <div className={`${isMobile ? 'h-12' : 'h-16'} flex items-center justify-center`}>
              <h2 className={`${isMobile ? 'text-lg' : 'text-2xl md:text-3xl'} font-medium text-slate-300`}>
                <span className="inline-block min-w-0">
                  {displayedText}
                  <span className="animate-pulse text-cyan-400">|</span>
                </span>
              </h2>
            </div>
          </div>
          
          {/* Professional description */}
          <p className={`${isMobile ? 'text-base' : 'text-xl'} text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12 content-spacing-lg px-4`}>
            Computer Science Engineering student at Shri Ram Institute Of Science and technology,
             Jabalpur. Currently working as Python Developer Intern at ADRS Techno,
              developing backend APIs and ERP solutions using Python and Frappe.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'} gap-6 justify-center items-center mb-16`}>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/Ayushhk14" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/ayush-kachhi-741204273" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:ayushkachhi52@gmail.com" 
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={`${isMobile ? 'w-6 h-6' : 'w-7 h-7'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;