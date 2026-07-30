import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(
        "service_wah136j",
        "template_jbbak0w",
        templateParams,
        "gYAqgn4lo7O5iRN1l"
    )
    .then(
        (response) => {
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
        alert("Message Sent! Your message has been delivered to my inbox");
        console.log("SUCCESS", response.status, response.text);
    })
    .catch((error) => {
        setLoading(false);
        alert("Failed to send message. Please try again later.");
        console.error("Error sending email:", error);
    });
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
                <button type="submit" 
                disabled={loading}
                className= "contact-submit-btn">
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    </section>
);
};

export default ContactSection;


