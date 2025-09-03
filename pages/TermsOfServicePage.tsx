
import React from 'react';
import PageHeader from '../components/PageHeader';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Terms of Service"
        subtitle="Please read these terms and conditions carefully."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg prose lg:prose-xl">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website and using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Devine intervention special education services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h2>3. Client Portal and Account Security</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </p>

            <h2>4. Service Provision</h2>
            <p>
              All services, including assessments and individualized education plans, are provided by qualified professionals. The information and services provided are for educational and therapeutic purposes and do not constitute medical advice.
            </p>

            <h2>5. Limitations</h2>
            <p>
              In no event shall Devine intervention special education services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>

            <h2>6. Revisions and Errata</h2>
            <p>
              The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
            </p>

             <h2>7. Governing Law</h2>
            <p>
              Any claim relating to Devine intervention special education services' website shall be governed by the laws of Nigeria without regard to its conflict of law provisions.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page. This policy was last modified on {new Date().toLocaleDateString()}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
