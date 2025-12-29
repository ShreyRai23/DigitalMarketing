// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// API Helper Functions
export const api = {
    // Submit testimonial/review
    submitTestimonial: async (data) => {
        try {
            const response = await fetch(`${API_URL}/api/testimonials`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit testimonial');
            }

            return result;
        } catch (error) {
            console.error('Error submitting testimonial:', error);
            throw error;
        }
    },

    // Get approved testimonials
    getTestimonials: async (limit = 10) => {
        try {
            const response = await fetch(`${API_URL}/api/testimonials?limit=${limit}`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch testimonials');
            }

            return result;
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            throw error;
        }
    },

    // Submit contact form
    submitContact: async (data) => {
        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit contact form');
            }

            return result;
        } catch (error) {
            console.error('Error submitting contact:', error);
            throw error;
        }
    }
};

export default api;
