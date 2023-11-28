import React from "react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '' 
    });
}


const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
};

const newFormErrors = {};
if (!formState.name) {
    newFormErrors.name = 'Name is required';
}
if (!formState.email) {

    newFormErrors.email = 'Email is required';
}
if (!formState.message) {
    newFormErrors.message = 'Message is required';
}
setFormErrors(newFormErrors);

return (
    <section>
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onBlur={handleFormSubmit} />
                {formErrors.name && (
                    <div>
                        <p className="error-text">{formErrors.name}</p>
                    </div>
                )}
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" onBlur={handleFormSubmit} />
                {formErrors.email && (
                    <div>
                        <p className="error-text">{formErrors.email}</p>
                    </div>
                )}
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" onBlur={handleFormSubmit} />
                {formErrors.message && (
                    <div>
                        <p className="error-text">{formErrors.message}</p>
                    </div>
                )}
            </div>
            <button type="submit">Submit</button>
        </form>
    </section>
);

export default Contact;
