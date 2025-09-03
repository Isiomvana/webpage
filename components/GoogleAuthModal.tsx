import React, { useEffect } from 'react';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: { name: string; email: string }) => void;
  isLogin: boolean;
}

const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({ isOpen, onClose, onSuccess, isLogin }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        // Simulate successful authentication and return mock user data
        const mockUser = isLogin 
          ? { name: 'Alex Williams', email: 'alex.williams@google.com' }
          : { name: 'Jordan Lee', email: 'jordan.lee@google.com' };
        onSuccess(mockUser);
        onClose();
      }, 2000); // 2-second delay to simulate auth

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, onSuccess, isLogin]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
        <div className="mb-4">
          <svg className="animate-spin h-10 w-10 text-brand-blue mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-blue">Connecting to Google...</h3>
        <p className="text-brand-gray mt-2">Please wait while we securely connect to your Google account.</p>
      </div>
    </div>
  );
};

export default GoogleAuthModal;
