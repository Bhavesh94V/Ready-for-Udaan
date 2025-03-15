import React, { useEffect, useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { Calendar, Clock, User, ClipboardList, MapPin, Mail, Phone, Link } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "../assets/styles/BookNowPage.css";
import { useDispatch, useSelector } from 'react-redux';
import { submitAppointmentRequest } from '../components/redux/actions/contactActions';

export default function BookNowForm() {

    const dispatch = useDispatch();
    const { loading, message, error } = useSelector(state => state.appointment);

    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        reason: "",
        details: "",
        address: ""
    });

    useEffect(() => {
        if (message || error) {
            const timer = setTimeout(() => {
                dispatch({ type: 'CLEAR_MESSAGES' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message, error, dispatch]);



    const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleDateSelection = (e) => setSelectedDate(e.target.value);
    const handleTimeSelection = (time) => setSelectedTime(time);

    const isFormValid = () => Object.values(formData).every(field => field.trim() !== "");

    const handleNext = () => {
        if (step === 1 && selectedDate && selectedTime) setStep(2);
        else if (step === 2 && isFormValid()) setStep(3);
    };

    const handlePrevious = () => step > 1 && setStep(step - 1);

    const handleSubmit = (e) => {

        e.preventDefault();

        const appointmentData = { ...formData, date: selectedDate, time: selectedTime };
        dispatch(submitAppointmentRequest(appointmentData));
        setStep(1);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            reason: "",
            details: "",
            address: ""
        });
        setSelectedDate("");
        setSelectedTime("");
    };


    return (
        <div>

            <div className="immigration-steps my-5 pt-5">

                <div className="steps-header">
                    <div className={`step ${step === 1 ? "active" : ""}`}>Appointment Date & Time</div>
                    <div className={`step ${step === 2 ? "active" : ""}`}>Personal Information</div>
                    <div className={`step ${step === 3 ? "active" : ""}`}>Confirmation</div>
                </div >

                <div className="appointment-container">

                    <div className="left-panel">
                        <h3 className='font-semibold'>Schedule a Consultation</h3>
                        <p className='py-2'>Select a Date & Time for Your Appointment</p>
                        <ul>
                            <li className='p-1'>📌 With Consultant</li>
                            <li className='p-1'>⏳ 45 Min Session</li>
                            <li className='p-1'>📍 Online Meeting</li>
                            <li className='p-1'>🔗 Zoom Video Call</li>
                        </ul>
                        <hr />
                        {selectedDate && selectedTime && (
                            <div className="selected-info my-4 text-start">
                                <p className='flex gap-2 items-center mb-2'><FaCalendarAlt /> Date: {selectedDate}</p>
                                <p className='flex gap-2 items-center mb-2'><FontAwesomeIcon icon={faClock} /> Time: {selectedTime}</p>
                            </div>
                        )}
                    </div>

                    <div className="right-panel">
                        {
                            step === 1 && (
                                <div className="date-time-selection">
                                    <div className="date-selection">
                                        <h4>Pick a Date:</h4>
                                        <input type="date" value={selectedDate} onChange={handleDateSelection} />
                                    </div>
                                    <div className="time-selection">
                                        <h4>Pick a Time:</h4>
                                        <div className="time-grid w-full">
                                            {
                                                ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"].map((time) => (
                                                    <button key={time} className={`time-btn max-w-24 ${selectedTime === time ? 'selected' : ''}`} onClick={() => handleTimeSelection(time)}>{time}</button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <button className="next-button" onClick={handleNext} disabled={!selectedDate || !selectedTime}>
                                        Next
                                    </button>
                                </div>
                            )}

                        {step === 2 && (
                            <div className="form-container">
                                <h3>Enter Your Details</h3>
                                <form>
                                    <div className="input-group">
                                        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} required />
                                        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} required />
                                    </div>
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                                        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                                    </div>
                                    <input type="text" name="reason" placeholder="Reason for Consultation" value={formData.reason} onChange={handleInputChange} required className="full-width" />
                                    <textarea name="details" placeholder="Additional Details" value={formData.details} onChange={handleInputChange} required className="full-width"></textarea>
                                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required className="full-width" />
                                    <div className="button-group">
                                        <button type="button" className="previous-button" onClick={handlePrevious}>Previous</button>
                                        <button type="button" className="next-button" onClick={handleNext}>Next</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="confirmation-container p-6">
                                <h3 className="text-2xl font-bold mb-6 text-white text-center">Confirm Your Details</h3>

                                <div className="details-summary space-y-4 text-white">
                                    <p className="flex items-center gap-3 border-b pb-2">
                                        <Calendar className="shrink-0 text-white" />
                                        <span className="font-medium">Date :- <span className="font-bold">{selectedDate}</span></span>
                                    </p>
                                    <p className="flex items-center gap-3 border-b pb-2">
                                        <Clock className="shrink-0 text-white" />
                                        <span className="font-medium">Time :- <span className="font-bold">{selectedTime}</span></span>
                                    </p>
                                    <p className="flex items-center gap-3 border-b pb-2">
                                        <User className="shrink-0 text-white" />
                                        <span className="font-medium">Name :- <span className="font-bold">{formData.firstName} {formData.lastName}</span></span>
                                    </p>
                                    <p className="flex items-center gap-3 border-b pb-2">
                                        <Mail className="shrink-0 text-white" />
                                        <span className="font-medium">Email :- <span className="font-bold">{formData.email}</span></span>
                                    </p>
                                    <p className="flex items-center gap-3 border-b pb-2">
                                        <Phone className="shrink-0 text-white" />
                                        <span className="font-medium">Phone :- <span className="font-bold">{formData.phone}</span></span>
                                    </p>
                                    <p className="flex items-center gap-3 border-b pb-2">
                                        <ClipboardList className="shrink-0 text-white" />
                                        <span className="font-medium">Reason :- <span className="font-bold">{formData.reason}</span></span>
                                    </p>
                                    <p className="flex items-start gap-3 border-b pb-2">
                                        <ClipboardList className="shrink-0 text-white" />
                                        <span className="font-medium">Details :-
                                            <span className="break-words max-h-40 overflow-y-auto font-bold">{formData.details}</span>
                                        </span>
                                    </p>
                                    <p className="flex items-center gap-3">
                                        <MapPin className="shrink-0 text-white" />
                                        <span className="font-medium">Address :- <span className="font-bold">{formData.address}</span></span>
                                    </p>
                                </div>

                                <div className="button-group flex justify-center mt-6 gap-4">
                                    <button className="previous-button px-4 py-2 border border-gray-400 rounded hover:bg-gray-100" onClick={handlePrevious}>Previous</button>
                                    <button className="bg-[#1b6b9c] text-white px-4 rounded-lg hover:bg-[#871216] transition" onClick={handleSubmit}>
                                        Book Appointment
                                    </button>
                                </div>
                            </div>

                        )}
                        {message && <div className="text-white mt-2">{message}</div>}
                        {error && <div className="text-white mt-2">{error}</div>}
                    </div>
                </div >
            </div >

        </div >
    )
}