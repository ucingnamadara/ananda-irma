import ReactHowler from "react-howler";
import Button from "../../../components/button";
import { useState } from "react";

function Cover({isOpen, setIsOpen}){
    // 1. Create a state to track if the song is playing
    const [isPlaying, setIsPlaying] = useState(false);

    // 2. Function to toggle the state
    const handleToggle = () => {
        setIsPlaying(!isPlaying);
        setIsOpen(true);
    };

    return(
        
    <div className={`fixed inset-0 z-[100] bg-brand-dark text-surface-cream h-full w-full flex flex-col justify-center items-center px-4 
        transition-transform duration-[1500ms] ease-in-out ${
          isOpen ? '-translate-y-full' : 'translate-y-0'
        }`} >
        <ReactHowler src="/assets/songs/background-music.mp3" loop={true} playing={isPlaying}></ReactHowler>
        <div>
            <img src="/assets/images/wedding-logo-cream.svg" alt="Irma & Ananda" className=" w-70 mx-auto mb-4"/>
            <p className= "text-[20px] font-medium">Dear.</p>
            <p className= "text-[25px] font-semibold">Bpk. Agus Suryana & Istri</p>
            <p className="text-[20px] font-medium">You are Invited!</p>
        </div>
        <div className="mt-10">
            <Button className = "bg-surface-cream text-brand-dark" label="Open Invitation" onClick={handleToggle}/>
        </div>
        
    </div>)
}

export default Cover;