import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const phoneNumber = '9140935896'; // Your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  const styles = {
    app: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0', // Light grey background color for contrast
      color: 'black', // Black text color
    },
    formContainer: {
      backgroundColor: '#ffffff', // White background for the form container
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      border: '1px solid #ccc', // Border for the form container
      maxWidth: '400px',
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      marginBottom: '0.5rem',
      fontSize: '1rem',
    },
    input: {
      padding: '0.5rem',
      fontSize: '1rem',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: '4px', // Rounded corners for inputs
      border: '1px solid #ccc', // Border for inputs
    },
    textarea: {
      padding: '0.5rem',
      fontSize: '1rem',
      width: '100%',
      height: '100px',
      boxSizing: 'border-box',
      borderRadius: '4px', // Rounded corners for textarea
      border: '1px solid #ccc', // Border for textarea
    },
    button: {
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      backgroundColor: '#25D366',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      borderRadius: '4px',
    },
    buttonHover: {
      backgroundColor: '#1EBB60',
    },
  };

  return (
  
      <div  style={styles.formContainer}>
        <h1 style={{ color: 'black' }}>Contact Me</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="text-black" style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div className="text-black" style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div className="text-black"style={styles.formGroup}>
            <label style={styles.label}>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              style={styles.textarea}
            ></textarea>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Send via WhatsApp
          </button>
        </form>
       
      </div>
   
  );
}

export default Form;
