import ReactHowler from "react-howler";
import Button from "../../../components/button";
import { useEffect, useState } from "react";

function Cover({isOpen, setIsOpen, isPlaying, setIsPlaying, data}){

    // 2. Function to toggle the state
    const handleToggle = () => {
        setIsPlaying(!isPlaying);
        setIsOpen(true);
    };

    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        // Update rotation every 1 second
        const interval = setInterval(() => {
        setRotation((prev) => (prev + 45) % 360); // Rotate by 45° each time
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, []);
  
    return(
    <div className="animate-fade-slide-up transition-all duration-800">
        <div className={`z-100000 fixed inset-0 bg-brand-dark text-surface-cream h-full w-full flex flex-col justify-center items-center px-4 
            transition-transform duration-[1500ms] ease-in-out ${
            isOpen ? '-translate-y-full' : 'translate-y-0'
            }`} >
            <div className="absolute">
                <div className="flex flex-row relative top-20 gap-60 md:gap-70 justify-center">
                    <img src="/assets/decorations/flower.svg" className="rotate-20 bottom-[40svh] left-[70svh]" style={{ transform: `rotate(${rotation}deg)` }}></img>
                    <img src="/assets/decorations/flower.svg" className="rotate-360 bottom-[40svh] right-[70svh]" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
                <div className="flex flex-row relative top-70 md:top-60 gap-40 md:gap-100 justify-center">
                    <img src="/assets/decorations/flower.svg" className="rotate-180 bottom-[15svh] right-[80svh]" style={{ transform: `rotate(${rotation}deg)` }}></img>
                    <img src="/assets/decorations/flower.svg" className="rotate-180 bottom-[15svh] left-[80svh]" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <img src="/assets/images/wedding-logo-cream.svg" alt="Irma & Ananda" className=" w-70 mx-auto mb-4"/>
                <p className= "text-[20px] font-medium">Dear.</p>
                <p className= "text-[25px] font-semibold">{data?.displayName == null ? "Guest" : data?.displayName}</p>
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