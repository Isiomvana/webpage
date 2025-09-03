
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    setIsSubmitting(true);
    try {
      // Simulate an API call to a backend endpoint.
      // In a real application, this would send a request to your server.
      await new Promise(resolve => setTimeout(resolve, 1500));

      // This console log represents the data that would be sent.
      console.log(`Password reset requested for: ${email}`);
      
      // On success, show a generic message to prevent user enumeration.
      setSuccessMessage('If an account exists for this email, a password reset link has been sent.');
    } catch (err) {
      // In a real-world scenario, you might still show the success message 
      // to avoid leaking information about which emails are registered.
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Reset Your Password"
        subtitle="Enter your email to receive instructions on how to reset your password."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">Password Reset</h2>
            
            {successMessage ? (
              <div className="text-center">
                <svg className="w-16 h-16 text-brand-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="text-brand-gray text-lg">{successMessage}</p>
                <Link to="/login" className="mt-6 inline-block font-medium text-brand-blue hover:text-brand-teal">
                  &larr; Back to Login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                  />
                </div>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Reset Link'}
                  </button>
                </div>
              </form>
            )}

            {!successMessage && (
                <div className="mt-6 text-center">
                    <p className="text-sm text-brand-gray">
                        Remember your password?{' '}
                        <Link to="/login" className="font-medium text-brand-blue hover:text-brand-teal">
                            Login here.
                        </Link>
                    </p>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
