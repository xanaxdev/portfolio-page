'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [showSuccessAlert, setShowSuccessAlert] = useState(false); // Stan dla alertu sukcesu
    const [showErrorAlert, setShowErrorAlert] = useState(false); // Stan dla alertu błędu

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setShowErrorAlert(false); // Resetujemy błąd

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.status === 200) {
                setStatus('Message sent successfully!');
                setShowSuccessAlert(true); // Pokazujemy alert sukcesu
                setFormData({ name: '', email: '', message: '' });

                // Ukrycie alertu po 5 sekundach
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 5000);
            } else {
                setStatus('Failed to send message');
                setShowErrorAlert(true); // Pokazujemy alert o błędzie

                // Ukrycie alertu po 5 sekundach
                setTimeout(() => {
                    setShowErrorAlert(false);
                }, 5000);
            }
        } catch (error) {
            setStatus('An error occurred, please try again');
            setShowErrorAlert(true); // Pokazujemy alert o błędzie

            // Ukrycie alertu po 5 sekundach
            setTimeout(() => {
                setShowErrorAlert(false);
            }, 5000);
        }
    };

    return (
        <div id='contact' className="container mx-auto py-10">
            <h1 className="text-6xl">
                {"{"}
                    <span className="text-[35px] font-desc px-5">Contact with me</span>
                {"}"}
            </h1>

            <div className="py-10 flex justify-center">
                <form className="w-full rounded-lg p-8" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-10">
                        <label htmlFor="name" className="block text-3xl font-medium mb-2">
                            What&#39;s your name? <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Fill this input..."
                            className="w-full bg-transparent px-4 py-5 text-2xl border rounded-lg"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-10">
                        <label htmlFor="email" className="block text-3xl font-medium mb-2">
                            What is your email address? <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Fill this input..."
                            className="w-full bg-transparent px-4 py-5 text-2xl border rounded-lg"
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-10">
                        <label htmlFor="message" className="block text-3xl font-medium mb-2">
                            Your message here <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message here..."
                            className="w-full bg-transparent px-4 py-5 text-2xl border rounded-lg min-h-[10vw]"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center lg:justify-end text-2xl">
                        <button
                            type="submit"
                            className="button rounded-full"
                        >
                            Let&#39;s speak 👽
                        </button>
                    </div>
                </form>
            </div>

            {/* Animowany alert sukcesu */}
            <AnimatePresence>
                {showSuccessAlert && (
                    <motion.div
                        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }} // Początkowy stan
                        animate={{ opacity: 1, y: 0 }} // Animacja wejścia
                        exit={{ opacity: 0, y: 50 }} // Animacja wyjścia
                        transition={{ duration: 0.5 }} // Czas trwania animacji
                    >
                        {status}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animowany alert błędu */}
            <AnimatePresence>
                {showErrorAlert && (
                    <motion.div
                        className="fixed bottom-5 right-5 bg-red-500 text-white p-4 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }} // Początkowy stan
                        animate={{ opacity: 1, y: 0 }} // Animacja wejścia
                        exit={{ opacity: 0, y: 50 }} // Animacja wyjścia
                        transition={{ duration: 0.5 }} // Czas trwania animacji
                    >
                        {status}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
