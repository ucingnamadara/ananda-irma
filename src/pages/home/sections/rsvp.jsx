import React, { useState } from 'react';
import InputForm from '../../../components/inputForm';
import Button from '../../../components/button';
import { useRvspList } from '../../../hooks/userRvspList';
import { formatAttendanceStatus, formatDate } from '../../../utils/formatter';
import { getAllRsvps, submitRsvp } from '../../../api/rsvpService';
import Loading from "../../../components/loading";

export default function RsvpSection() {
    const itemsPerPage = 5;
    const [rsvpList, setRsvpList] = useState([]);
    const [formData, setFormData] = useState({ name: null, total: '1', isPresence: true, comment: null });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    useRvspList({page: currentPage, limit: itemsPerPage, rsvpList: rsvpList, setRsvpList: setRsvpList, setTotalPages: setTotalPages, setCurrentPage: setCurrentPage});

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(!isSubmitted && formData.name !== null){
            setIsSubmitted(true)
            const guestId = localStorage.getItem('guestId');
            await submitRsvp({...formData, guestId});
            setCurrentPage(1)
            const response = await getAllRsvps({page: currentPage, limit: itemsPerPage});
            if (response.status === 200) {
                if(response.data.rsvps.length === 0){
                    setCurrentPage(prev => prev - 1);
                    return;
                } else{
                    setRsvpList(response.data.rsvps);
                }
            }
        }
        
    };

    const handleShowMore = async () => {
        setCurrentPage(prev => prev + 1);
        console.log("Fetching page: " + currentPage);
        const response = await getAllRsvps({page: currentPage, limit: itemsPerPage});
        if (response.status === 200) {
            if(response.data.rsvps.length === 0){
                setCurrentPage(prev => prev - 1);
                return;
            } else{
                setRsvpList(prev => [...prev, ...response.data.rsvps]);
            }
        }
    }

    console.log(rsvpList)
    return (
        <div className="bg-surface-cream w-full flex flex-col justify-center items-center pt-20 px-4 -z-1 text-brand-dark text-[15px]">
            <img src="/assets/decorations/curl-line.svg" alt="Curl Decoration" className=" md:object-none z-0"/>
            <h2 data-aos="fade-up" className='text-[24px] font-semibold mt-10 '>RSVP & Blessing</h2>
            <p data-aos="fade-up" className='mb-5 mt-2 '>We would like to share this special moment with you. Please confirm your attendance below and share your blessings with us.</p>

            <form data-aos="fade-up" className="w-3/4 flex flex-col gap-5 ">
                <InputForm formData={formData} setFormData={setFormData}></InputForm>
                <Button className ="text-surface-cream bg-brand-dark" label={"Submit RSVP"} onClick={handleFormSubmit}></Button>
            </form>

            <div data-aos="fade-up" className="mt-15 flex flex-col gap-6 w-3/4 ">
            {
                rsvpList?.map((rvsp) => {
                    return (
                    <div className='flex flex-col gap-1 justify-center items-left'>
                        <div className='flex flex-row gap-2 justify-left items-center'>
                            <p className='md:text-[17px] font-semibold text-left'>{rvsp.name}</p>
                            <p className={`text-[10px] md:text-[13px] px-2 ${rvsp.isPresence ? 'bg-forest-light' : 'bg-brand-dark text-surface-cream'} rounded-md`}>{formatAttendanceStatus(rvsp.isPresence)}</p>
                        </div>
                        <p className='text-left text-[13px] md:text-[15]'>{rvsp.comment}</p>
                        <p className='font-light text-[10px] md:text-[13px]] text-left'>{formatDate(rvsp.createdAt)}</p>
                    </div>)
                })
            }

                <Button className ="text-surface-cream bg-brand-dark w-full" label={"Show More"} onClick={handleShowMore}></Button>
            </div>
        </div>
    );
}