import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg prose lg:prose-xl">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Devine intervention special education services. We are committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information from you in a variety of ways, including when you fill out a contact or booking form. The types of personal information collected may include:
            </p>
            <ul>
              <li>Parent/Guardian Name</li>
              <li>Child's Name and Age</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Any information you provide regarding your concerns</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
                <li>Respond to your inquiries and schedule assessments.</li>
                <li>Provide and manage our special education services.</li>
                <li>Communicate with you about your appointments and our services.</li>
                <li>Improve our website and services.</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>
                Your personal information is strictly confidential. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. All information provided, especially concerning your child, is handled with the utmost care and confidentiality.
            </p>

            <h2>5. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Our website is secured with SSL technology to ensure that any data you submit is encrypted and protected.
            </p>

            <h2>6. Your Consent</h2>
            <p>
              By using our site, you consent to our website's privacy policy.
            </p>

            <h2>7. Changes to Our Privacy Policy</h2>
            <p>
              If we decide to change our privacy policy, we will post those changes on this page. This policy was last modified on {new Date().toLocaleDateString()}.
            </p>

            <h2>8. Contacting Us</h2>
            <p>
              If there are any questions regarding this privacy policy, you may contact us using the information on our Contact page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;