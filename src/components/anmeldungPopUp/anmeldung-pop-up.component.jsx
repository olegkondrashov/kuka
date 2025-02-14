import React, { useState } from 'react';
import './anmeldung-pop-up.styles.scss';

const AnmeldungPopup = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    telefonnumer: '',
    ziel: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier können Sie Validierungen oder API-Aufrufe integrieren.
    setSubmitted(true);
  };

  return (
    <div className="anmeldung-popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>×</button>
        {submitted ? (
          <div className="thank-you">
            <h2>Vielen Dank!</h2>
            <p>Ihre Anmeldung wurde erfolgreich übermittelt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="anmeldung-form">
            <h2>Anmeldung</h2>
            <div className="form-group">
              <label htmlFor="email">E-Mail:</label>
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
              <label htmlFor="name">Name:</label>
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
              <label htmlFor="telefonnumer">Telefonnumer (optional):</label>
              <input
                type="text"
                id="telefonnumer"
                name="telefonnumer"
                value={formData.telefonnumer}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ziel">Ziel:</label>
              <input
                type="text"
                id="ziel"
                name="ziel"
                value={formData.ziel}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Abschicken</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AnmeldungPopup;
