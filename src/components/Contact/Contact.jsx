import React, { useState } from "react";
import "./Contact.css";
import { assests } from "../../assets/assets";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Message Sent!");
    };

    return (
        <div className="contact">
            <div className="videoAnimation"> 
                <video autoPlay loop muted disablePictureInPicture id="myVideo">
                    <source src={assests.c3} />
                </video>
            </div>
            <div className="contact-container">
                <h1 className="contact-heading">Contact Me</h1>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

                    <button type="submit">Send Message</button>
                </form>

                <div className="social-links">
                    <a href="https://linkedin.com/in/kusumanammi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/Nammi-Kusuma" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:kusumanammi0809@example.com">Email</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
