function Contact() {
  return (
    <section id="contact" className="section-padding bg-slate-800">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Currently seeking internship opportunities in backend development, Python programming, and ERP systems. 
            Let's connect and discuss potential collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently working as an Engineering Analyst Intern at ADRS Technosoft and looking for 
                additional opportunities in backend development, Python programming, or ERP systems. 
                Whether you have an internship opportunity, want to collaborate on a project, or just want to connect, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <a 
                href="mailto:ayushkachhi52@gmail.com"
                className="flex items-center space-x-4 p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors group"
              >
                <div className="bg-cyan-400/20 text-cyan-400 p-3 rounded-lg group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-slate-400">ayushkachhi52@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+919575079392"
                className="flex items-center space-x-4 p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors group"
              >
                <div className="bg-cyan-400/20 text-cyan-400 p-3 rounded-lg group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-slate-400">+91 9575079392</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 bg-slate-900 rounded-xl border border-slate-700">
                <div className="bg-cyan-400/20 text-cyan-400 p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-slate-400">Jabalpur, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/ayush-kachhi-741204273" 
                  className="bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Ayushhk14" 
                  className="bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 p-3 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:ayushkachhi52@gmail.com" 
                  className="bg-slate-900 text-slate-400 hover:text-cyan-400 hover:bg-slate-700 p-3 rounded-lg transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-400">
            © 2026 Ayush Kachhi. Built with React and CSS.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Engineering Analyst Intern | Python Developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;