import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/token/login/', {
                email: formData.email,
                password: formData.password
            });

            toast.success('Login successful! Redirecting...');
            console.log('Login successful:', response.data);

            // Store the token in localStorage
            localStorage.setItem('accessToken', response.data.auth_token);

            // Redirect to home page or any other page after successful login
            setTimeout(() => {
                navigate('/home');
            }, 3000);
        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessages = Object.values(error.response.data).flat().join(' ');
                toast.error(`Login failed: ${errorMessages}`);
            } else {
                toast.error('Login failed. Please try again.');
            }
            console.error('Login failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div style={styles.container}>
            <ToastContainer />
            <div style={styles.formContainer}>
                <h1 style={styles.heading}>Welcome to Unified Dashboard Analytics</h1>
                <h2 style={styles.formHeading}>Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label style={styles.label}>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.submitButton}>Enter</button>
                </form>
                <button onClick={() => navigate('/register')} style={styles.registerButton}>
                    Click here to register
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#2B2F42', // Darker background color
        padding: '20px',
    },
    formContainer: {
        width: '90%', // Adjusted width for responsiveness
        maxWidth: '600px', // Maximum width for larger screens
        background: '#353A50', // Darker background for the form container
        padding: '30px', // Added more padding
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Box shadow for depth
        textAlign: 'center', // Center the text
    },
    heading: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#ffffff', // White text color
    },
    formHeading: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#ffffff', // White text color
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
        textAlign: 'left', // Ensure the text alignment is left for input groups
    },
    label: {
        fontSize: '16px',
        marginBottom: '5px',
        display: 'block',
        color: '#ffffff', // White text color
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        marginBottom: '10px',
        outline: 'none',
    },
    submitButton: {
        width: '100%',
        padding: '10px',
        fontSize: '18px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: '#2B2F42', // Dark button background
        color: '#ffffff', // White text color
        border: 'none',
        outline: 'none',
    },
    registerButton: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '5px',
        backgroundColor: '#2B2F42', // Dark button background
        color: '#ffffff', // White text color
        border: 'none',
        outline: 'none',
        marginTop: '10px',
    },
};

export default LoginForm;
