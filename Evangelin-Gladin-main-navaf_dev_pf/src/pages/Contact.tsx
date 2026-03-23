/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const ContactSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobileNumber: Yup.string()
    .matches(/^\d+$/, 'Must be a number')
    .min(10, 'Must be at least 10 digits')
    .required('Mobile number is required'),
  emailSubject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (
    values: {
      fullName: string;
      email: string;
      mobileNumber: string;
      emailSubject: string;
      message: string;
    },
    { resetForm, setSubmitting }: import('formik').FormikHelpers<{
      fullName: string;
      email: string;
      mobileNumber: string;
      emailSubject: string;
      message: string;
    }>
  ) => {
    setIsSubmitting(true);

    try {

      const nameParts = values.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        location: null,
        interested_in: "Other",
        access_key: process.env.REACT_APP_ACCESS_KEY,
        first_name: firstName,
        last_name: lastName,
        email: values.email,
        phone: `+91${values.mobileNumber}`,
        note: values.message
      };


      const response = await fetch(`${process.env.REACT_APP_CONTACT_API}/?access_key=${process.env.REACT_APP_ACCESS_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        setShowSuccess(true);
        resetForm();


        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <section className="contact px-4 sm:px-6 md:px-12 max-w-4xl mx-auto" id="contact">
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Success!</h2>
          <p className="text-lg text-gray-700 mb-6">Your message has been sent successfully. We'll get back to you soon!</p>
          <button
            onClick={() => setShowSuccess(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

   return (
    // CHANGE 1: Changed max-w-4xl to max-w-7xl and added w-full
    <section className="contact px-4 sm:px-6 md:px-12 w-full max-w-7xl mx-auto py-16" id="contact">
      
      <div className="text-center mb-12">
        <h2 className="heading text-5xl font-bold mb-4">
          Contact <span className="text-[var(--main-color)]">Me!</span>
        </h2>
        <p style={{ fontSize: '1.6rem', color: '#ccc' }}>Get in touch and let's build something together.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
        
        {/* Form Section */}
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            mobileNumber: '',
            emailSubject: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <div className="space-y-8 bg-[rgba(255,255,255,0.02)] p-8 rounded-3xl border border-[rgba(255,255,255,0.05)]">

              <div className="flex flex-col md:flex-row gap-6">
                <div className="input-box w-full">
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    // CHANGE 2: Made inputs taller (h-14) and font larger
                    className="w-full h-14 px-4 text-lg text-black border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="input-box w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full h-14 px-4 text-lg text-black border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="input-box w-full text-black">
                  <PhoneInput
  country={'in'}
  value={formik.values.mobileNumber}
  onChange={(phone) => formik.setFieldValue('mobileNumber', phone)}
  onBlur={formik.handleBlur}

  inputStyle={{
    width: '100%',
    height: '56px',
    borderRadius: '12px',
    fontSize: '18px',
    paddingLeft: '60px'   // ✅ WAS 48px → increase to fix hidden digit
  }}

  buttonStyle={{
    borderRadius: '12px 0 0 12px',
    background: 'white',
    border: 'none'
  }}
/>

                  {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                    <div className="text-red-500 text-sm mt-1">{formik.errors.mobileNumber}</div>
                  )}
                </div>

                <div className="input-box w-full">
                  <input
                    name="emailSubject"
                    type="text"
                    placeholder="Email Subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.emailSubject}
                    className="w-full h-14 px-4 text-lg text-black border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage name="emailSubject" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className="w-full p-4 text-lg text-black border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="button"
                onClick={formik.submitForm}
                disabled={isSubmitting}
                className="btn w-full text-white py-4 px-6 rounded-xl font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed transition-transform hover:scale-[1.01]"
                style={{
                    background: 'linear-gradient(88deg, #ffa37b -11.16%, #fa6bbe 46.95%, #732bf7 94.89%)',
                    boxShadow: '0 0.2rem 0.5rem rgba(0,0,0,0.2)'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          )}
        </Formik>

        {/* Bottom Buttons */}
       <div className="contact-cta-row">

          <a href="#" className="btn flex justify-center items-center h-20 rounded-xl text-center text-white font-bold text-lg transition-transform hover:-translate-y-1"
             style={{ background: 'linear-gradient(88deg, #ffa37b -11.16%, #fa6bbe 46.95%, #732bf7 94.89%)' }}>
            Book a strategy session
          </a>
          <a href="#" className="btn flex justify-center items-center h-20 rounded-xl text-center text-white font-bold text-lg transition-transform hover:-translate-y-1"
             style={{ background: 'linear-gradient(88deg, #ffa37b -11.16%, #fa6bbe 46.95%, #732bf7 94.89%)' }}>
            Invite me to speak
          </a>
          <a href="#" className="btn flex justify-center items-center h-20 rounded-xl text-center text-white font-bold text-lg transition-transform hover:-translate-y-1"
             style={{ background: 'linear-gradient(88deg, #ffa37b -11.16%, #fa6bbe 46.95%, #732bf7 94.89%)' }}>
            Ask a question
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;