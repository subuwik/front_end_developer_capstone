import React, { useState } from 'react';
import './BookingForm.css';

export function getAvailableTimes(date) {
  if (!date) return [];

  const dayOfWeek = new Date(date).getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return ['12:00', '13:00', '14:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  }

  return ['12:00', '13:00', '18:00', '19:00', '20:00'];
}


export function validateForm(formData) {
  const errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required.';
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required.';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!formData.date) {
    errors.date = 'Please select a date.';
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(formData.date);
    if (selectedDate < today) {
      errors.date = 'Date cannot be in the past.';
    }
  }

  if (!formData.time) {
    errors.time = 'Please select a time.';
  }

  const guests = parseInt(formData.guests, 10);
  if (!formData.guests) {
    errors.guests = 'Number of guests is required.';
  } else if (guests < 1 || guests > 10) {
    errors.guests = 'Number of guests must be between 1 and 10.';
  }

  return errors;
}

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    occasion: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const availableTimes = getAvailableTimes(formData.date);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));


    if (name === 'date') {
      setFormData((prev) => ({
        ...prev,
        date: value,
        time: '',
      }));
    }


    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      specialRequests: '',
    });
    setErrors({});
    setSubmitted(false);
  };


  if (submitted) {
    return (
      <section className="booking" id="reservations" aria-labelledby="booking-heading">
        <div className="booking__inner container">
          <div className="booking__confirmation" role="alert" aria-live="polite">
            <span className="confirmation__icon" aria-hidden="true">✅</span>
            <h2 className="confirmation__title">Booking Confirmed!</h2>
            <p className="confirmation__text">
              Thank you, <strong>{formData.firstName}</strong>! Your table for{' '}
              <strong>{formData.guests} {formData.guests === '1' ? 'guest' : 'guests'}</strong> on{' '}
              <strong>{formData.date}</strong> at <strong>{formData.time}</strong> has been reserved.
            </p>
            <p className="confirmation__text">
              A confirmation will be sent to <strong>{formData.email}</strong>.
            </p>
            <button
              className="booking__submit-btn"
              onClick={handleReset}
              aria-label="Make another reservation"
            >
              Make Another Reservation
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="booking" id="reservations" aria-labelledby="booking-heading">
      <div className="booking__inner container">
        <h2 id="booking-heading" className="booking__title">Reserve a Table</h2>
        <p className="booking__subtitle">
          Book your dining experience at Little Lemon. Fields marked with * are required.
        </p>

        <form
          className="booking__form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Table reservation form"
        >

          <fieldset className="form__fieldset">
            <legend className="form__legend">Personal Details</legend>


            <div className="form__group">
              <label htmlFor="firstName" className="form__label">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`form__input ${errors.firstName ? 'form__input--error' : ''}`}
                placeholder="e.g. John"
                aria-required="true"
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                aria-invalid={!!errors.firstName}
              />

              {errors.firstName && (
                <span
                  id="firstName-error"
                  className="form__error"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.firstName}
                </span>
              )}
            </div>


            <div className="form__group">
              <label htmlFor="lastName" className="form__label">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`form__input ${errors.lastName ? 'form__input--error' : ''}`}
                placeholder="e.g. Smith"
                aria-required="true"
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                aria-invalid={!!errors.lastName}
              />
              {errors.lastName && (
                <span id="lastName-error" className="form__error" role="alert" aria-live="polite">
                  {errors.lastName}
                </span>
              )}
            </div>


            <div className="form__group">
              <label htmlFor="email" className="form__label">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form__input ${errors.email ? 'form__input--error' : ''}`}
                placeholder="e.g. john@email.com"
                aria-required="true"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span id="email-error" className="form__error" role="alert" aria-live="polite">
                  {errors.email}
                </span>
              )}
            </div>
          </fieldset>

          <fieldset className="form__fieldset">
            <legend className="form__legend">Reservation Details</legend>


            <div className="form__group">
              <label htmlFor="date" className="form__label">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`form__input ${errors.date ? 'form__input--error' : ''}`}
                min={new Date().toISOString().split('T')[0]}
                aria-required="true"
                aria-describedby={errors.date ? 'date-error' : undefined}
                aria-invalid={!!errors.date}
              />
              {errors.date && (
                <span id="date-error" className="form__error" role="alert" aria-live="polite">
                  {errors.date}
                </span>
              )}
            </div>


            <div className="form__group">
              <label htmlFor="time" className="form__label">
                Time *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`form__input ${errors.time ? 'form__input--error' : ''}`}
                aria-required="true"
                aria-describedby={errors.time ? 'time-error' : 'time-hint'}
                aria-invalid={!!errors.time}
              >
                <option value="">-- Select a time --</option>

                {availableTimes.length > 0 ? (
                  availableTimes.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Please select a date first
                  </option>
                )}
              </select>

              {!errors.time && (
                <span id="time-hint" className="form__hint">
                  Select a date to see available times.
                </span>
              )}
              {errors.time && (
                <span id="time-error" className="form__error" role="alert" aria-live="polite">
                  {errors.time}
                </span>
              )}
            </div>


            <div className="form__group">
              <label htmlFor="guests" className="form__label">
                Number of Guests *
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className={`form__input ${errors.guests ? 'form__input--error' : ''}`}
                min="1"
                max="10"
                placeholder="e.g. 2"
                aria-required="true"
                aria-describedby={errors.guests ? 'guests-error' : undefined}
                aria-invalid={!!errors.guests}
              />
              {errors.guests && (
                <span id="guests-error" className="form__error" role="alert" aria-live="polite">
                  {errors.guests}
                </span>
              )}
            </div>

            <div className="form__group">
              <label htmlFor="occasion" className="form__label">
                Occasion <span className="form__optional">(optional)</span>
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className="form__input"
                aria-required="false"
              >
                <option value="">-- None --</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business">Business meal</option>
                <option value="other">Other</option>
              </select>
            </div>


            <div className="form__group">
              <label htmlFor="specialRequests" className="form__label">
                Special Requests <span className="form__optional">(optional)</span>
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                className="form__input form__textarea"
                placeholder="e.g. Window seat, high chair needed, allergies..."
                rows="3"
                aria-required="false"
              />
            </div>
          </fieldset>


          <button
            type="submit"
            className="booking__submit-btn"
            aria-label="Submit table reservation"
          >
            Make your reservation
          </button>

        </form>
      </div>
    </section>
  );
}

export default BookingForm;
