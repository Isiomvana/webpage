
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { GoogleIcon } from '../components/Icons';
import GoogleAuthModal from '../components/GoogleAuthModal';
import { useAuth } from '../contexts/AuthContext';

const RegisterPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [error, setError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [isGoogleAuthModalOpen, setIsGoogleAuthModalOpen] = useState(false);
    const { user, loading, setAuthLoading } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!formData.fullName || !formData.email || !formData.password) {
            setError('All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        if (!agreedToTerms) {
            setError('You must agree to the Terms of Service and Privacy Policy.');
            return;
        }

        setAuthLoading(true);
        try {
            // Simulate an API call for registration
            await new Promise((resolve) => setTimeout(resolve, 1000));
            
            console.log(`Simulating confirmation email sent to ${formData.email}`);
            setRegistrationSuccess(true);
        } catch (err) {
            setError('Registration failed. Please try again.');
        } finally {
            setAuthLoading(false);
        }
    };

    const handleGoogleRegisterClick = () => {
        setError('');
        if (!agreedToTerms) {
            setError('You must agree to the Terms of Service and Privacy Policy.');
            return;
        }
        setAuthLoading(true);
        setIsGoogleAuthModalOpen(true);
    };

    const handleGoogleRegisterSuccess = (mockUser: { name: string, email: string }) => {
        console.log(`Simulating confirmation email sent to ${mockUser.email}`);
        setRegistrationSuccess(true);
    };
    
    const handleGoogleAuthClose = () => {
        setIsGoogleAuthModalOpen(false);
        setAuthLoading(false);
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-brand-light">
            <PageHeader
                title="Create Your Account"
                subtitle="Join our client portal to book and manage your sessions."
            />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
                        {user ? (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-brand-blue mb-3">You Already Have an Account</h2>
                                <p className="text-lg text-brand-gray mb-6">Welcome back, {user.name.split(' ')[0]}! You can proceed to book an assessment.</p>
                                <Link to="/book-assessment" className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-teal transition-all duration-300">
                                    Go to Booking
                                </Link>
                            </div>
                        ) : registrationSuccess ? (
                            <div className="text-center">
                                <svg className="w-16 h-16 text-brand-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <h2 className="text-2xl font-bold text-brand-blue mb-3">Please Confirm Your Email</h2>
                                <p className="text-lg text-brand-gray mb-6">
                                    Thank you for registering! A confirmation link has been sent to your email address. Please check your inbox to complete the registration.
                                </p>
                                <Link to="/login" className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-teal transition-all duration-300">
                                    Return to Login
                                </Link>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">New Client Registration</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-medium text-brand-gray mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            id="fullName"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                                        />
                                    </div>
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
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-brand-gray mb-1">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="terms"
                                                name="terms"
                                                type="checkbox"
                                                checked={agreedToTerms}
                                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                                className="focus:ring-brand-teal h-4 w-4 text-brand-teal border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms" className="font-medium text-brand-gray">
                                                I agree to the{' '}
                                                <Link to="/terms-of-service" target="_blank" className="text-brand-blue hover:underline">
                                                    Terms of Service
                                                </Link>
                                                {' '}and{' '}
                                                <Link to="/privacy-policy" target="_blank" className="text-brand-blue hover:underline">
                                                    Privacy Policy
                                                </Link>
                                                .
                                            </label>
                                        </div>
                                    </div>
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all duration-300 disabled:bg-gray-400"
                                        >
                                            {loading ? 'Creating Account...' : 'Register'}
                                        </button>
                                    </div>
                                </form>

                                <div className="mt-6 flex items-center">
                                    <div className="flex-grow border-t border-gray-300"></div>
                                    <span className="flex-shrink mx-4 text-brand-gray text-sm">OR</span>
                                    <div className="flex-grow border-t border-gray-300"></div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="button"
                                        onClick={handleGoogleRegisterClick}
                                        disabled={loading}
                                        className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-brand-gray hover:bg-gray-50 transition-colors disabled:opacity-50"
                                    >
                                        <GoogleIcon />
                                        Continue with Google
                                    </button>
                                </div>
                                
                                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                    <p className="text-sm text-brand-gray">
                                        Already have an account?{' '}
                                        <Link to="/login" className="font-medium text-brand-blue hover:text-brand-teal">
                                            Login here.
                                        </Link>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <GoogleAuthModal
                isOpen={isGoogleAuthModalOpen}
                onClose={handleGoogleAuthClose}
                onSuccess={handleGoogleRegisterSuccess}
                isLogin={false}
            />
        </div>
    );
};

export default RegisterPage;
