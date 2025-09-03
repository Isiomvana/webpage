
import React from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const ResetPasswordPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, this would trigger a password reset email.
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled // Feature not implemented yet
                  className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Send Reset Link (Coming Soon)
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
                <p className="text-sm text-brand-gray">
                    Remember your password?{' '}
                    <Link to="/login" className="font-medium text-brand-blue hover:text-brand-teal">
                        Login here.
                    </Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;