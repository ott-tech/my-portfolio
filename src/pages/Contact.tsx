import React, { useState } from "react";
import "./Contact.css"

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form Data Submitted:", formData);

  alert("Message Sent! the backend will be implemented soon");

  setFormData({ name: "", email: "", message: "" });
};

return (
    <section className="contact-section">
    <div className="contact-container">
        <div className="contact-header">
            <h2>Get in Touch</h2>
            <p>Have an exciting project layout or open position? Drop a message and let's construct something incredible together.</p>
        </div>

        
            <form onSubmit={handleSubmit} id="contact" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                </div>
                <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
        </div>
    </section>
);
};

export default ContactSection;


