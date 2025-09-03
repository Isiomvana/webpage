
import React from 'react';
import PageHeader from '../components/PageHeader';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ServicesPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Our Services"
        subtitle="A clear, compassionate, and structured approach to your child's development."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md">
                    <div className="flex-shrink-0">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-blue mb-2">{service.title}</h3>
                      <p className="text-lg text-brand-gray leading-relaxed">{service.details}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 text-center bg-brand-blue/90 text-white p-10 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Let's Create a Plan for Your Child</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
                Every child's journey is unique. An initial assessment is the first step toward understanding your child's needs and crafting a personalized plan for their success.
              </p>
              <Link
                to={user ? "/book-assessment" : "/register"}
                className="bg-brand-teal text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-brand-teal transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Schedule Your Initial Assessment
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;