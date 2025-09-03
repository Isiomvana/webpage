
import React, { useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const NavLink: React.FC<{ to: string, children: React.ReactNode, onClick?: () => void }> = ({ to, children, onClick }) => (
    <RouterNavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => 
        `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-brand-teal' : 'text-brand-blue hover:text-brand-teal'}`
      }
    >
      {children}
    </RouterNavLink>
  );

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-extrabold text-brand-blue font-serif">
              Devine Intervention
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} to={link.path}>{link.name}</NavLink>
            ))}
            {user ? (
              <>
                <span className="text-brand-gray">Welcome, {user.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="text-lg font-medium text-brand-blue hover:text-brand-teal">Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/login">Client Login</NavLink>
                <Link to="/register" className="ml-4 bg-brand-teal text-white font-semibold py-2 px-5 rounded-full hover:bg-brand-blue transition-all duration-300 transform hover:scale-105">
                  Book an Assessment
                </Link>
              </>
            )}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-blue focus:outline-none"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg" id="mobile-menu">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)}>{link.name}</NavLink>
            ))}
            {user ? (
               <>
                <span className="text-brand-gray py-2">Welcome, {user.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="text-lg font-medium text-brand-blue hover:text-brand-teal py-2">Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>Client Login</NavLink>
                <Link to="/register" onClick={() => setIsMenuOpen(false)} className="bg-brand-teal text-white font-semibold py-3 px-6 rounded-full hover:bg-brand-blue transition-all duration-300 w-4/5 text-center">
                  Book an Assessment
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;