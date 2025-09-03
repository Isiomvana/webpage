
import React from 'react';
import PageHeader from '../components/PageHeader';
import { FAQS } from '../constants';
import Accordion from '../components/Accordion';
import { Link } from 'react-router-dom';

const FaqPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and processes."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <Accordion key={index} question={faq.question}>
                  <p>{faq.answer}</p>
                </Accordion>
              ))}
            </div>
            
            <div className="mt-12 text-center bg-brand-blue/5 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-blue mb-3">Can't find your question?</h2>
              <p className="text-lg text-brand-gray mb-6">
                We're here to help. If you have any other questions, please don't hesitate to get in touch with us directly.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-brand-teal text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-blue transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
