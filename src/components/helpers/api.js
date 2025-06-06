import axios from "axios";

export const submitContactForm = async (formData) => {
    return await axios.post("http://localhost:5000/api/contact", formData);
};

export const submitEligibilityForm = async (formData) => {
    try {
        const response = await fetch('http://localhost:5000/api/submit-eligibility', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to submit form.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message || 'Something went wrong.');
    }
};

export const submitAppointmentForm = async (formData) => {
    return await axios.post("http://localhost:5000/api/book-appointment", formData);
};

export const submitPopUpForm = async (formData) => {
    return await axios.post("http://localhost:5000/send-email", formData);
};





// import axios from "axios";

// const BASE_URL = "https://ready-for-udaan-backend.onrender.com";

// export const submitContactForm = async (formData) => {
//     return await axios.post(`${BASE_URL}/api/contact`, formData);
// };

// export const submitEligibilityForm = async (formData) => {
//     try {
//         const response = await fetch(`${BASE_URL}/api/submit-eligibility`, {
//             method: 'POST',
//             body: formData,
//         });

//         if (!response.ok) {
//             throw new Error('Failed to submit form.');
//         }
//         return await response.json();
//     } catch (error) {
//         throw new Error(error.message || 'Something went wrong.');
//     }
// };

// export const submitAppointmentForm = async (formData) => {
//     return await axios.post(`${BASE_URL}/api/book-appointment`, formData);
// };

// export const submitPopUpForm = async (formData) => {
//     return await axios.post(`${BASE_URL}/send-email`, formData);
// };
