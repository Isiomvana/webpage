
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import type { Service } from '../types';
import { useAuth } from '../contexts/AuthContext';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
      <Icon />
      <h3 className="text-xl font-bold text-brand-blue mt-4 mb-2">{service.title}</h3>
      <p className="text-brand-gray flex-grow">{service.description}</p>
    </div>
  );
};


const HomePage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-blue leading-tight mb-4">
              Expert, Compassionate Support for Your Child's Journey
            </h1>
            <p className="text-lg md:text-xl text-brand-gray mb-8 max-w-xl mx-auto md:mx-0">
              With 15+ years of experience, Opeyemi Elumelu provides specialized education plans to help children with learning disabilities thrive.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                to={user ? "/book-assessment" : "/register"}
                className="bg-brand-teal text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-blue transition-all duration-300 transform hover:scale-105"
              >
                Book an Assessment
              </Link>
              <Link
                to="/services"
                className="bg-gray-200 text-brand-blue font-semibold py-3 px-8 rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <img 
               src="https://picsum.photos/id/1011/500/500" 
               alt="Opeyemi Elumelu" 
               className="rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 object-cover"
             />
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Our Approach to Special Education</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">
              We provide a structured, supportive pathway to unlock your child's full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="text-brand-teal font-semibold text-lg hover:underline">
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* About Opeyemi Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <img 
                src="https://picsum.photos/id/1012/400/500" 
                alt="A child learning" 
                className="rounded-lg shadow-xl w-full h-auto object-cover max-w-sm"
                loading="lazy"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Meet Opeyemi Elumelu</h2>
            <p className="font-serif text-brand-blue text-xl mt-2">M.Ed. Learning Disabilities</p>
            <p className="text-lg text-brand-gray mt-6 max-w-2xl">
              "My mission is to create a world where every child, regardless of their challenges, has the opportunity to learn, grow, and succeed. With over 15 years of dedication to special education in Nigeria, I have seen firsthand the incredible potential that lies within each child. I am here to partner with you, to understand your child's unique world, and to build a bridge to a brighter future."
            </p>
            <Link 
              to="/about"
              className="mt-8 inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-teal transition-all duration-300"
            >
              Learn More About Opeyemi
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Words from Parents</h2>
            <p className="text-lg text-brand-gray mt-4 max-w-3xl mx-auto">
              Hear from families who have partnered with us on their journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col">
                <p className="text-brand-gray italic font-serif text-lg flex-grow">"{testimonial.quote}"</p>
                <p className="mt-6 font-bold text-brand-blue text-right">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;