import React, { useState } from 'react';
import InputForm from '../../../components/inputForm';
import Button from '../../../components/button';

export default function RsvpSection() {
    const [rsvps, setRsvps] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', status: 'attending' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() && formData.email.trim()) {
            setRsvps([...rsvps, { ...formData, id: Date.now() }]);
            setFormData({ name: '', email: '', status: 'attending' });
        }
    };

    const totalPages = Math.ceil(rsvps.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedRsvps = rsvps.slice(startIdx, startIdx + itemsPerPage);

    return (
        <div className="bg-surface-cream w-full flex flex-col justify-center items-center pt-20 px-4 -z-1 text-brand-dark text-[15px]">
            <img src="/assets/decorations/curl-line.svg" alt="Curl Decoration" className=" md:object-none z-0"/>
            <h2 data-animate className='text-[24px] font-semibold mt-10 opacity-0 transition-all duration-800'>Share Your Blessing</h2>
            <p className='mb-5 mt-2'>We would like to share this special moment with you. Please confirm your attendance below and share your blessings with us.</p>

            <form onSubmit={handleSubmit} className="w-2/3 flex flex-col gap-5">
                <InputForm></InputForm>
                <Button className ="text-surface-cream bg-brand-dark" label={"Submit RSVP"} onClick={handleSubmit}></Button>
            </form>

            <div className="mt-15 flex flex-col gap-6 w-2/3">
                <div className='flex flex-col gap-1 justify-center items-left'>
                    <div className='flex flex-row gap-2 justify-left items-center'>
                        <p className='text-[17px] font-semibold text-left'>Aditmansyah</p>
                        <p className='text-[13px] px-2 bg-forest-light rounded-md'>Will Attend</p>
                    </div>
                    <p className='text-left'>Akhirnya ya!!! Lancar sampai hari h</p>
                    <p className='font-light text-[13px] text-left'>12 Dec 2025 12:00</p>
                </div>
                <div className='flex flex-col gap-1 justify-center items-left'>
                    <div className='flex flex-row gap-2 justify-left items-center'>
                        <p className='text-[17px] font-semibold text-left'>Fajar</p>
                        <p className='text-[13px] px-2 bg-brand-dark text-surface-cream rounded-md'>Will Not Attend</p>
                    </div>
                    <p className='text-left'>Maaf ya gabisa hadir! Semoga lancar</p>
                    <p className='font-light text-[13px] text-left'>12 Dec 2025 12:00</p>
                </div>
                <Button className ="text-surface-cream bg-brand-dark w-full" label={"Show More"} ></Button>
            </div>

            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}