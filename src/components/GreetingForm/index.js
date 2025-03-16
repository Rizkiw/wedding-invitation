import React, { Fragment, useState, useEffect } from 'react';
import { addGreeting, fetchGreetings } from '../../firebase/firestoreService';
import { styWrapper } from './styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GreetingForm = () => {
    const [greetings, setGreetings] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false); // State to control success dialog visibility

    // Fetch greetings from Firestore on component mount
    useEffect(() => {
        const loadGreetings = async () => {
            const data = await fetchGreetings();
            setGreetings(data);
        };
        loadGreetings();

        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !message) {
            alert('Please fill out both fields.');
            return;
        }

        try {
            await addGreeting(name, message);
            setGreetings([...greetings, { name, message }]);
            setName('');
            setMessage('');
            setShowSuccess(true); // Show success dialog

            // Automatically hide success dialog after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);
        } catch (error) {
            alert('Failed to save your greeting. Please try again.');
        }
    };

    return (
        <Fragment>
            <div id="fh5co-send-wish" className="fh5co-section-white" css={styWrapper} >
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h2 className="main-font">Send Your Wish</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <form onSubmit={handleSubmit} className="form-greetings">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Your Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Send
                                    </button>
                                </form>
                                {showSuccess && ( // Success dialog
                                    <div className="alert alert-success mt-3" role="alert">
                                        Thank you! Your wishes has been successfully submitted.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default GreetingForm;
