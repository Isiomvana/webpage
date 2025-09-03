

// FIX: Import `useState` from 'react' to resolve 'Cannot find name' errors and correct the React import syntax.
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { GoogleIcon } from '../components/Icons';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/book-assessment';

    const handleRedirect = () => {
        navigate(from, { replace: true });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setIsSubmitting(true);
        try {
            // Simulate an API call that returns user data
            const userProfile = await new Promise<{ name: string, email: string }>((resolve) => {
                setTimeout(() => {
                    const userName = email.split('@')[0]
                        .replace(/[._-]/g, ' ')
                        .replace(/\b\w/g, l => l.toUpperCase());
                    resolve({ name: userName, email });
                }, 1000);
            });

            login(userProfile);
            handleRedirect();
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleLogin = async () => {
        console.log('Simulating Google Login...');
        setError('');
        setIsSubmitting(true);
        try {
            // Simulate a Google login that might fail
             const mockUser = await new Promise<{ name: string, email: string }>((resolve, reject) => {
                setTimeout(() => {
                    // Simulate a 50% chance of failure
                    if (Math.random() > 0.5) {
                        resolve({ name: 'Google User', email: 'user@google.com' });
                    } else {
                        reject(new Error('Simulated Google API error'));
                    }
                }, 500);
            });
            login(mockUser);
            handleRedirect();
        } catch (err) {
            setError('Google login failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-brand-light">
            <PageHeader
                title="Client Portal Login"
                subtitle="Welcome back. Please sign in to continue."
            />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">Secure Client Login</h2>
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
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-brand-gray mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-teal focus:border-brand-teal"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all duration-300 disabled:bg-gray-400"
                                >
                                    {isSubmitting ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                        </form>

                        <div className="text-center mt-4">
                            <Link to="/reset-password" className="text-sm font-medium text-brand-blue hover:text-brand-teal">
                                Forgot your password?
                            </Link>
                        </div>

                        <div className="mt-4 flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="flex-shrink mx-4 text-brand-gray text-sm">OR</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-brand-gray hover:bg-gray-50 transition-colors disabled:opacity-50"
                            >
                                <GoogleIcon />
                                Continue with Google
                            </button>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                            <p className="text-sm text-brand-gray">
                                First time here?{' '}
                                <Link to="/register" className="font-medium text-brand-blue hover:text-brand-teal">
                                    Register to get started.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;