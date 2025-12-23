import ReactHowler from "react-howler";
import Button from "../../../components/button";
import { useState } from "react";

function Cover({isOpen, setIsOpen, isPlaying, setIsPlaying, data}){

    // 2. Function to toggle the state
    const handleToggle = () => {
        setIsPlaying(!isPlaying);
        setIsOpen(true);
    };

    return(
    <div className="animate-fade-slide-up transition-all duration-800">
        <div className={`z-100000 fixed inset-0 bg-brand-dark text-surface-cream h-full w-full flex flex-col justify-center items-center px-4 
            transition-transform duration-[1500ms] ease-in-out ${
            isOpen ? '-translate-y-full' : 'translate-y-0'
            }`} >
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/images/wedding-logo-cream.svg" alt="Irma & Ananda" className=" w-70 mx-auto mb-4"/>
                <p className= "text-[20px] font-medium">Dear.</p>
                {data?.fullName != null ? 
                    (<p className= "text-[25px] font-semibold">{data?.fullName}</p>) : 
                    (<div className= "animate-pulse bg-surface-cream w-3/5 h-10"></div>)}
                <p className="text-[20px] font-medium">You are Invited!</p>
            </div>
            <div className="mt-10">
                <Button className = "bg-surface-cream text-brand-dark" label="Open Invitation" onClick={handleToggle}/>
            </div>
            
        </div>
    </div>
    )
}

export default Cover;