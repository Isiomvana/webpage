
import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { WhatsAppIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1000);
    };

    const handleReset = () => {
        setSubmitted(false);
    }

    return (
        <div className="bg-brand-light">
            <PageHeader
                title="Contact Us"
                subtitle="We're here to help. Reach out with any questions or for collaboration inquiries."
            />

            <div className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        
                        <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
                           
                            <div className={`transition-opacity duration-500 ${submitted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <h2 className="text-3xl font-bold text-brand-blue mb-8 font-serif">Send a General Inquiry</h2>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="relative">
                                        <input type="text" id="name" name="name" required aria-required="true" className="block px-3 pb-2.5 pt-4 w-full text-lg text-brand-blue bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-teal peer" placeholder=" " />
                                        <label htmlFor="name" className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-brand-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">
                                            Full Name
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input type="email" id="contact-email" name="contact-email" required aria-required="true" className="block px-3 pb-2.5 pt-4 w-full text-lg text-brand-blue bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-teal peer" placeholder=" " />
                                        <label htmlFor="contact-email" className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-brand-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">
                                            Email Address
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <textarea id="message" name="message" rows={5} required aria-required="true" className="block px-3 pb-2.5 pt-4 w-full text-lg text-brand-blue bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-brand-teal peer" placeholder=" " ></textarea>
                                        <label htmlFor="message" className="absolute text-lg text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-brand-teal peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">
                                            Message
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <button type="submit" disabled={isSubmitting} className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-blue transition-all duration-300 text-lg disabled:bg-gray-400">
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className={`absolute inset-0 flex flex-col items-center justify-center bg-white p-8 text-center transition-opacity duration-500 ${submitted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <svg className="w-16 h-16 text-brand-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <h2 className="text-2xl font-bold text-brand-blue mb-3 font-serif">Message Sent!</h2>
                                <p className="text-brand-gray text-lg mb-6">Thank you for reaching out. We'll get back to you shortly.</p>
                                <button onClick={handleReset} className="font-semibold text-brand-teal hover:underline">
                                    Send Another Message
                                </button>
                            </div>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">Direct Contact</h3>
                                <div className="space-y-4 text-lg text-brand-gray">
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <a href="mailto:contact@devineintervention.com" className="hover:text-brand-teal transition-colors">contact@devineintervention.com</a>
                                    </p>
                                    <p className="flex items-center">
                                        <WhatsAppIcon />
                                        <a href="https://wa.me/2348120127783" target="_blank" rel="noopener noreferrer" className="hover:text-brand-teal transition-colors ml-3">+234 812 012 7783</a>
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold text-brand-blue mb-4 font-serif">Business Hours</h3>
                                <p className="text-lg text-brand-gray">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-lg text-brand-gray">Weekends & Public Holidays: Closed</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
