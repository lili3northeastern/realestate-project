import { useState, useEffect } from 'react';
import './ContactForm.css'; 

function ContactForm() {
    useEffect(() => {
        document.title = "Contact | Silicon Valley Real Estate";
    }, []);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactReason: '', 
        otherReason: '' 

    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        if (Object.keys(validate(formValues)).length === 0) {
            console.log('Form data:', formValues);
            setIsSubmitted(true);
        }
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        }
        return errors;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: *</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Your full name (required)"
                />
                <p style={{color: 'red'}}>{formErrors.name}</p>
            </div>
            <div>
                <label htmlFor="email">Email: *</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Your email address (required)"
                />
                <p style={{color: 'red'}}>{formErrors.email}</p>
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="Your phone number (optional)"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message: *</label>
                <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Your message to us (required)"
                ></textarea>
                <p style={{color: 'red'}}>{formErrors.message}</p>
            </div>
            <div>
                <label htmlFor="contactReason">Reason for Contacting:</label>
                <select
                    id="contactReason"
                    name="contactReason"
                    value={formValues.contactReason}
                    onChange={handleChange}
                >
                    <option value="">Please select</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="support">Support Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
            </div>
            {formValues.contactReason === 'other' && (
                <div>
                    <label htmlFor="otherReason">Please specify:</label>
                    <input
                        id="otherReason"
                        type="text"
                        name="otherReason"
                        value={formValues.otherReason}
                        onChange={handleChange}
                        placeholder="Your specific reason"
                    />
                </div>
            )}
            <button type="submit">Send</button>
            {isSubmitted && <p>Your message has been successfully submitted!</p>}
        </form>
    );
}

export default ContactForm;
