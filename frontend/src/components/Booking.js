import React, { useState } from 'react';
import '../styles.css';

function Booking() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        agree: false,
    });

    const times = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

    const handleDateChange = (e) => setSelectedDate(e.target.value);
    const handleTimeClick = (time) => setSelectedTime(time);
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle booking logic here
        alert('Booking submitted!');
    };

    return (
        <div className="booking-page">
            <form className="booking-form" onSubmit={handleSubmit}>
                {/* Appointment Section */}
                <div className="booking-appointment">
                    <div>
                        <label className="booking-label">Appointment</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="booking-date"
                            required
                        />
                    </div>
                    <div>
                        <label className="booking-label">Select a Time</label>
                        <div className="booking-times">
                            {times.map((time) => (
                                <button
                                    type="button"
                                    key={time}
                                    className={`booking-time-btn${selectedTime === time ? ' selected' : ''}`}
                                    onClick={() => handleTimeClick(time)}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Terms */}
                <div className="booking-terms">
                    <label>
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleInputChange}
                            required
                        />{' '}
                        I agree to <a href="#">terms &amp; conditions</a>.
                    </label>
                </div>

                {/* Schedule Button */}
                <div className="booking-schedule-btn-wrap">
                    <button type="submit" className="booking-schedule-btn">
                        Schedule
                    </button>
                </div>

                {/* Divider */}
                <hr className="booking-divider" />

                {/* Booking Form */}
                <div className="booking-form-section">
                    <h2 className="booking-form-title">Massage Booking Form</h2>
                    <div className="booking-form-fields">
                        <div className="booking-form-row">
                            <div className="booking-form-group">
                                <label>Full Name</label>
                                <div className="booking-form-names">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={form.firstName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={form.lastName}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="booking-form-row">
                            <div className="booking-form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="(000) 000-0000"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="booking-form-row">
                            <div className="booking-form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Booking;