
import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg text-center">
          <svg className="w-16 h-16 text-brand-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h1 className="text-3xl font-bold text-brand-blue mb-4">Thank You!</h1>
          <p className="text-lg text-brand-gray mb-2">Your assessment request has been successfully submitted.</p>
          <p className="text-lg text-brand-gray mb-8">
            We will review your information and be in touch within <strong>24-48 business hours</strong> to schedule the appointment.
          </p>
          <Link
            to="/"
            className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-teal transition-all duration-300"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
