import React, { useState } from 'react';

export default function InputForm() {
    const [formData, setFormData] = useState({
        name: '',
        isAttending: '',
        totalGuest: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className='flex flex-col gap-0.5 justify-center'>
                <label htmlFor="name" className='text-left'>Name</label>
                <input
                    className='bg-amber-50 border-gray-50 border-solid rounded-md w-full'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='flex flex-col gap-0.5 justify-center'>
                <label htmlFor="email" className='text-left'>Will you attend our wedding?</label>
                <select
                    className='bg-amber-50 border-gray-50 border-solid rounded-md w-full'
                    type="dropdown"
                    id="attendance"
                    name="isAttending"
                    value={formData.isAttending}
                    onChange={handleChange}
                    required
                >
                    <option value="true">Will Attend</option>
                    <option value="false">Will Not Attend</option>
                </select>
            </div>
            <div className='flex flex-col gap-0.5 justify-center'>
                <label htmlFor="email" className='text-left'>Total Guest(s)</label>
                <select
                    className='bg-amber-50 border-gray-50 border-solid rounded-md w-full'
                    type="dropdown"
                    id="total-guest"
                    name="totalGuest"
                    value={formData.totalGuest}
                    onChange={handleChange}
                    required
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                </select>
            </div>
            <div className='flex flex-col gap-0.5 justify-center'>
                <label htmlFor="message" className='text-left'>Message</label>
                <textarea
                    className='bg-amber-50 border-gray-50 border-solid rounded-md w-full h-20'
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    
                    required
                />
            </div>
        </div>
    );
}