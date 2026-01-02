import { useEffect, useState } from "react";

function Footers(){
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        // Update rotation every 1 second
        const interval = setInterval(() => {
        setRotation((prev) => (prev + 45) % 360); // Rotate by 45° each time
        }, 1000);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-surface-cream w-full h-fit max-h-237.5 flex flex-col justify-center items-center px-4 -z-1 text-brand-dark text-[13px]">
            <div className="absolute">
                <div className="flex flex-row relative bottom-20 left-40 gap-60 md:gap-70 justify-center h-full w-full">
                    <img src="/assets/decorations/flower-green.svg" className="rotate-20" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>

            <div className="absolute">
                <div className="flex flex-row relative bottom-0 right-40 gap-60 md:gap-70 justify-center h-full w-full">
                    <img src="/assets/decorations/flower-green.svg" className="rotate-20" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>
            <p className="font-medium mb-5">Thank You</p>
            <img src="/assets/images/wedding-logo-red.svg" alt="Wedding Logo" className="w-36"></img>
            <p className="mt-10 mb-2">© 2025 PT Harmoni Mitra Tekno. All rights reserved.</p>
        </div>
    )
}

export default Footers;