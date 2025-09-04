
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { GoogleIcon } from '../components/Icons';
import { useAuth } from '../contexts/AuthContext';
import GoogleAuthModal from '../components/GoogleAuthModal';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login, user, loading, setAuthLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [isGoogleAuthModalOpen, setIsGoogleAuthModalOpen] = useState(false);

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

        setAuthLoading(true);
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
            setAuthLoading(false);
        }
    };

    const handleGoogleLoginClick = () => {
        setError('');
        setAuthLoading(true);
        setIsGoogleAuthModalOpen(true);
    };

    const handleGoogleLoginSuccess = (mockUser: { name: string, email: string }) => {
        login(mockUser);
        handleRedirect();
    };
    
    const handleGoogleAuthClose = () => {
        setIsGoogleAuthModalOpen(false);
        setAuthLoading(false);
    }

    return (
        <div className="bg-brand-light">
            <PageHeader
                title="Client Portal Login"
                subtitle="Welcome back. Please sign in to continue."
            />
            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
                        {user ? (
                             <div className="text-center">
                                <h2 className="text-2xl font-bold text-brand-blue mb-3">You Are Already Logged In</h2>
                                <p className="text-lg text-brand-gray mb-6">Welcome back, {user.name.split(' ')[0]}!</p>
                                <Link to="/book-assessment" className="inline-block bg-brand-blue text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-teal transition-all duration-300">
                                    Continue to Booking
                                </Link>
                             </div>
                        ) : (
                            <>
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
                                            disabled={loading}
                                            className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all duration-300 disabled:bg-gray-400"
                                        >
                                            {loading ? 'Logging in...' : 'Login'}
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
                                        onClick={handleGoogleLoginClick}
                                        disabled={loading}
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
                            </>
                        )}
                    </div>
                </div>
            </div>
            <GoogleAuthModal
                isOpen={isGoogleAuthModalOpen}
                onClose={handleGoogleAuthClose}
                onSuccess={handleGoogleLoginSuccess}
                isLogin={true}
            />
        </div>
    );
};

export default LoginPage;
