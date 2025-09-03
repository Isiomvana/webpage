
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

interface FormErrors {
  parentName?: string;
  email?: string;
  phone?: string;
  childName?: string;
  childAge?: string;
  concerns?: string;
}

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    concerns: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's name is required.";
      isValid = false;
    }

    if (!formData.childName.trim()) {
      newErrors.childName = "Child's name is required.";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
      isValid = false;
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number with at least 10 digits.';
      isValid = false;
    }

    if (!formData.childAge) {
      newErrors.childAge = "Child's age is required.";
      isValid = false;
    } else if (isNaN(Number(formData.childAge)) || Number(formData.childAge) <= 0) {
      newErrors.childAge = 'Please enter a valid age greater than 0.';
      isValid = false;
    }

    if (!formData.concerns.trim()) {
      newErrors.concerns = 'Please describe your concerns.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
        setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (apiError) {
      setApiError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    if (validate()) {
      setIsSubmitting(true);
      // In a real application, this is where you would send the form data to a backend server.
      // The server would then handle sending an email to the administrator.
      try {
        // Simulating a network request to the backend.
        await new Promise(resolve => setTimeout(resolve, 1500));

        // This console log represents the data that would be sent to an admin.
        console.log('Simulating sending booking data to admin via email:', formData);

        navigate('/confirmation');
      } catch (error) {
        console.error("Submission failed:", error);
        setApiError("Sorry, there was an error submitting your request. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-brand-light">
      <PageHeader
        title="Book an Assessment"
        subtitle="Take the first step towards a personalized education plan for your child. Please fill out the form below to request an appointment."
      />

      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-brand-blue mb-6">Assessment Request Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-brand-gray mb-1">Parent's Full Name</label>
                  <input type="text" name="parentName" id="parentName" placeholder="e.g. Adeola Chidi" required value={formData.parentName} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:ring-brand-teal focus:border-brand-teal placeholder:text-gray-400 ${errors.parentName ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
                </div>
                <div>
                  <label htmlFor="childName" className="block text-sm font-medium text-brand-gray mb-1">Child's Name</label>
                  <input type="text" name="childName" id="childName" placeholder="e.g. Femi" required value={formData.childName} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:ring-brand-teal focus:border-brand-teal placeholder:text-gray-400 ${errors.childName ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.childName && <p className="text-red-500 text-sm mt-1">{errors.childName}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray mb-1">Email Address</label>
                  <input type="email" name="email" id="email" placeholder="you@example.com" required value={formData.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:ring-brand-teal focus:border-brand-teal placeholder:text-gray-400 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-brand-gray mb-1">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="+234 801 234 5678" required value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:ring-brand-teal focus:border-brand-teal placeholder:text-gray-400 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-brand-gray mb-1">Child's Age</label>
                <input type="number" name="childAge" id="childAge" placeholder="e.g. 5" required value={formData.childAge} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:ring-brand-teal focus:border-brand-teal placeholder:text-gray-400 ${errors.childAge ? 'border-red-500' : 'border-gray-300'}`} />
                {errors.childAge && <p className="text-red-500 text-sm mt-1">{errors.childAge}</p>}
              </div>

              <div>
                <label htmlFor="concerns" className="block text-sm font-medium text-brand-gray mb-1">
                  Briefly describe your concerns or reasons for seeking an assessment.
                </label>
                <textarea name="concerns" id="concerns" rows={5} placeholder="Please share any specific challenges or goals..." required value={formData.concerns} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md focus:ring-brand-teal focus:border-brand-teal placeholder:text-gray-400 ${errors.concerns ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                {errors.concerns && <p className="text-red-500 text-sm mt-1">{errors.concerns}</p>}
              </div>

              <div>
                <p className="text-xs text-brand-gray">
                  Your information is confidential and will not be shared. Submitting this form is a request for an appointment, not a confirmed booking.
                </p>
              </div>

              {apiError && <div className="text-center text-red-500 text-sm">{apiError}</div>}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-teal text-white font-bold py-3 px-6 rounded-md hover:bg-brand-blue transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
