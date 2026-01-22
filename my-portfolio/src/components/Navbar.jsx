import { useState, useEffect } from 'react';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      
      // Close mobile menu when switching to desktop
      if (!mobile && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
      
      // Focus management for accessibility
      const firstMenuItem = document.querySelector('.mobile-menu-item');
      if (firstMenuItem) {
        setTimeout(() => firstMenuItem.focus(), 100);
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isMobile || !isMobileMenuOpen) return;
      
      if (e.key === 'Escape') {
        closeMobileMenu();
        // Return focus to hamburger button
        const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
        if (hamburgerBtn) hamburgerBtn.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobile, isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu after navigation
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 navbar-container ${
        isScrolled 
          ? 'navbar-scrolled' 
          : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center navbar-height py-4">
            
            {/* Mobile & Tablet: Hamburger Menu (Left-aligned) */}
            {isMobile && (
              <div className="flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="hamburger-menu-btn"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <div className="hamburger-icon">
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'hamburger-line-1-open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'hamburger-line-2-open' : ''}`}></span>
                    <span className={`hamburger-line ${isMobileMenuOpen ? 'hamburger-line-3-open' : ''}`}></span>
                  </div>
                </button>
              </div>
            )}

            {/* Desktop: Centered Navigation Links */}
            {!isMobile && (
              <div className="flex-1 flex justify-center">
                <div className="btn-nav-container">
                  <div className="flex items-center space-x-1">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`btn-nav-item ${
                          activeSection === item.id ? 'btn-nav-active' : ''
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Slide-in Panel */}
      {isMobile && (
        <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'mobile-menu-panel-open' : ''}`}>
          <div className="mobile-menu-header">
            <h2 className="mobile-menu-title">Navigation</h2>
            <button
              onClick={closeMobileMenu}
              className="mobile-menu-close-btn"
              aria-label="Close navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="mobile-menu-nav">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-menu-item ${
                  activeSection === item.id ? 'mobile-menu-item-active' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="mobile-menu-item-text">{item.label}</span>
                {activeSection === item.id && (
                  <div className="mobile-menu-item-indicator" />
                )}
              </button>
            ))}
          </nav>
          
          <div className="mobile-menu-footer">
            <p className="mobile-menu-footer-text">Ayush Kachhi</p>
            <p className="mobile-menu-footer-subtitle">Python Developer</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;