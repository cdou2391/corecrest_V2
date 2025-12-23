import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentPageName?: string;
}

export default function Layout({ children, currentPageName }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'About', page: 'About' },
    { name: 'Services', page: 'Services' },
    { name: 'Blog', page: 'Blog' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --primary: #0f172a;
          --accent: #16a34a;
          --accent-secondary: #22c55e;
          --background: 0 0% 100%;
          --foreground: 222.2 84% 4.9%;
          --card: 0 0% 100%;
          --card-foreground: 222.2 84% 4.9%;
          --popover: 0 0% 100%;
          --popover-foreground: 222.2 84% 4.9%;
          --primary-foreground: 210 40% 98%;
          --secondary: 210 40% 96.1%;
          --secondary-foreground: 222.2 47.4% 11.2%;
          --muted: 210 40% 96.1%;
          --muted-foreground: 215.4 16.3% 46.9%;
          --accent-foreground: 222.2 47.4% 11.2%;
          --destructive: 0 84.2% 60.2%;
          --destructive-foreground: 210 40% 98%;
          --border: 214.3 31.8% 91.4%;
          --input: 214.3 31.8% 91.4%;
          --ring: 222.2 84% 4.9%;
        }
        .gradient-text {
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
        }
        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        nav {
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        }
        nav:hover {
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
        }
      `}</style>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4">
        <nav
          className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/50 rounded-2xl border border-white/30' 
              : 'bg-white/40 rounded-2xl border border-white/40'
          }`}
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="CoreCrest Logo" 
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.page}
                  to={createPageUrl(link.page)}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    currentPageName === link.page
                      ? 'text-green-600'
                      : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={createPageUrl('BookConsultation')}
                className="gradient-bg text-white px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Book Consultation
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-900" />
              ) : (
                <Menu className="w-6 h-6 text-slate-900" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/50 backdrop-blur-xl border-t border-white/30 rounded-b-2xl mt-2"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      currentPageName === link.page
                        ? 'bg-green-50 text-green-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to={createPageUrl('BookConsultation')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block gradient-bg text-white px-4 py-3 rounded-xl text-sm font-medium text-center mt-4"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img 
                  src="/logo.png" 
                  alt="CoreCrest Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We help small businesses fix the tech weak points that are costing them customers, 
                time, and money. Practical, outcome-driven solutions that generate leads, streamline 
                operations, and support growth — without overbuilding.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.page}>
                    <Link
                      to={createPageUrl(link.page)}
                      className="text-slate-400 hover:text-green-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl('Services')} className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                    Websites That Convert
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Services')} className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                    Custom Web Apps & Internal Tools
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Services')} className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                    Automation & Integrations
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Services')} className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                    IT Advisory (Decision-Safe Tech)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">Kigali, Rwanda</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="tel:+250788863783" className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                    +250 788 863 783
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <a href="mailto:info@corecrest.tech" className="text-slate-400 hover:text-green-600 transition-colors text-sm">
                    info@corecrest.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} CoreCrest. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to={createPageUrl('PrivacyPolicy')} className="text-slate-500 hover:text-green-600 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to={createPageUrl('TermsOfService')} className="text-slate-500 hover:text-green-600 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

