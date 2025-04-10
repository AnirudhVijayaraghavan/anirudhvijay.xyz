import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../csspages/ContactForm.css'; // Adjust path as needed

// Initialize EmailJS with your user ID (found in your EmailJS dashboard)
emailjs.init("Hb8eNKmZEiGPmRaOe");

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Map formData to your EmailJS template parameters.
        const templateParams = {
            fullName: formData.name,
            emailId: formData.email,
            message: formData.message
        };

        emailjs.send("service_rjkvyo1", "template_bv4dacd", templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error('FAILED...', error);
                alert('There was an error sending your message.');
            });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            {/* <button type="submit">Send Message</button> */}
            <button class='glowing-btn' type="submit"><span class='glowing-txt'>
                S<span class='faulty-letter'>U</span>BM<span class='faulty-letter'>I</span>T</span>
            </button>
        </form>
    );
}

export default ContactForm;
