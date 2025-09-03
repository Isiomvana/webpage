
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AboutPage: React.FC = () => {
  const { user } = useAuth();
  return (
    <div className="bg-brand-light">
      <PageHeader
        title="About Opeyemi Elumelu"
        subtitle="Your dedicated partner in special education and child development."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <img
                src="https://picsum.photos/id/1011/500/600"
                alt="Opeyemi Elumelu"
                className="rounded-lg shadow-xl w-full object-cover"
                loading="lazy"
              />
              <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-brand-blue mb-4">Qualifications</h3>
                <ul className="space-y-3 text-brand-gray">
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-3 mt-1">&#10003;</span>
                    Master's Degree in Learning Disabilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-3 mt-1">&#10003;</span>
                    Over 15 Years of Dedicated Practice
                  </li>
                   <li className="flex items-start">
                    <span className="text-brand-teal mr-3 mt-1">&#10003;</span>
                    Specialist in IEP Development
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-teal mr-3 mt-1">&#10003;</span>
                    Expertise in Autism, Down Syndrome, & more
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-4">My Mission</h2>
                <p className="text-lg text-brand-gray font-serif italic leading-relaxed">
                  "My mission is to empower children with special needs to reach their fullest potential. I believe that every child has a unique gift to offer the world, and my role is to provide the tools, strategies, and supportive environment they need to shine. I am committed to working collaboratively with families in Nigeria to navigate the educational landscape and create a future filled with hope and achievement for their children."
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-brand-blue mb-4">My Journey & Philosophy</h2>
                <p className="text-lg text-brand-gray mb-4 leading-relaxed">
                  For over fifteen years, I have had the privilege of working with exceptional children and their families. My journey began with a deep desire to understand the different ways children learn and to bridge the gap for those who face unique challenges. This passion led me to pursue a Master's degree in Learning Disabilities, where I honed my skills in diagnostics, intervention strategies, and creating truly individualized education plans.
                </p>
                <p className="text-lg text-brand-gray leading-relaxed">
                  My philosophy is centered on a child-first approach. I see beyond labels and diagnoses to recognize the individual child, with their own personality, interests, and strengths. I believe in building on these strengths to foster confidence and a love for learning. Patience, empathy, and evidence-based practices are the cornerstones of my work. I strive to create a safe and nurturing space where children feel understood and valued, allowing them to take risks and grow academically, socially, and emotionally.
                </p>
              </div>

              <div className="bg-brand-teal/10 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-blue mb-3">Ready to Take the Next Step?</h3>
                <p className="text-lg text-brand-gray mb-6">
                  If you feel your child could benefit from a personalized educational strategy, I invite you to reach out. Let's work together to unlock their potential.
                </p>
                <Link
                  to={user ? "/book-assessment" : "/register"}
                  className="bg-brand-teal text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-blue transition-all duration-300 transform hover:scale-105"
                >
                  Book a Consultation
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;