import React, { useState } from 'react';
import axios from 'axios';
import '../../sass/appointment.scss';
import shih from '../../assets/storm.png';

export default function AppointmentForm({ scrollToTop }) {

  const appointmentTypes = [
    'Grooming',
    'Vaccination',
    'Check-up',
    'Surgery',
    'Dental Cleaning',
    'Pet Sitting',
    'Walking Service',
    'Pet Boarding'
  ];

  const [form, setForm] = useState({
    name: '',
    email: '',
    pet_name: '',
    pet_type: '',
    appointment_type: '',
    start_date: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const today = new Date().toISOString().split("T")[0];
  
    if (!form.name) newErrors.name = 'Required';
    if (!form.email) newErrors.email = 'Required';
    if (!form.pet_name) newErrors.pet_name = 'Required';
    if (!form.pet_type) newErrors.pet_type = 'Required';
    if (!form.appointment_type) newErrors.appointment_type = 'Required';
    if (!form.start_date || form.start_date < today) newErrors.start_date = 'Start date must be today or later';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length === 0) {
      try {
        const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

        const response = await axios.post('http://127.0.0.1:8000/appointments', form, {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrfToken,
          },
        });
      
        console.log('Appointment stored:', response.data);
        setSuccess(true);
        setForm({
          name: '',
          email: '',
          pet_name: '',
          pet_type: '',
          appointment_type: '',
          start_date: '',
          notes: ''
        });
      } catch (error) {
        console.error('Submission error:', error.response?.data || error);
        setSuccess(false);
        if (error.response) {
          console.error('Server response error:', error.response.data);
        }
      }
    }
  };

  return (
    <section className="appointment" id="appointment-form">
      <div className="appointment__container">
        <div className="appointment__left">
          <div className="appointment__logo" onClick={scrollToTop}>🐾 PAWTASTIC</div>
          <ul className="appointment__services">
            <li>Pet Walk</li>
            <li>Furbaby Sitting</li>
            <li>Vaccination</li>
            <li>Grooming Service</li>
            <li>Surgery</li>
            <li>Check-ups</li>
            <li>Dental Cleaning</li>
            <li>Pet Boarding</li>
          </ul>
          <div className="appointment__dog-image">
            <img src={shih} alt="Dog" />
          </div>
        </div>

        <div className="appointment__form">
          <h2>We’ll take your dog for a walk. Just tell us when!</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={form.name} onChange={handleChange} />
              {errors.name && <span>{errors.name}</span>}
            </label>
            <label>
              Email:
              <input type="email" name="email" value={form.email} onChange={handleChange} />
              {errors.email && <span>{errors.email}</span>}
            </label>
            <label>
              Pet Name:
              <input type="text" name="pet_name" value={form.pet_name} onChange={handleChange} />
              {errors.pet_name && <span>{errors.pet_name}</span>}
            </label>
            <label>
              Pet Type:
              <input type="text" name="pet_type" value={form.pet_type} onChange={handleChange} />
              {errors.pet_type && <span>{errors.pet_type}</span>}
            </label>
            <label>
              Type of Appointment:
              <select
                name="appointment_type"
                value={form.appointment_type}
                onChange={handleChange}
              >
                <option value="">-- Select an Appointment Type --</option>
                {appointmentTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
              {errors.appointment_type && <span>{errors.appointment_type}</span>}
            </label>
            <label>
              Start Date:
              <input
                type="date"
                name="start_date"
                value={form.start_date}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleChange}
              />
              {errors.start_date && <span>{errors.start_date}</span>}
            </label>
            <label className="notes-label">
              Notes:
              <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Special instructions..." />
            </label>
            <button type="submit" className="submit-btn">Schedule Service</button>
            {success && <p className="success">Appointment scheduled successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
