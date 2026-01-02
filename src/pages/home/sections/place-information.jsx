import { useEffect, useState } from "react";
import Button from "../../../components/button";

function PlaceInformation() {
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
        <div className="bg-surface-cream w-full flex flex-col justify-center items-center py-6 px-4 -z-1 text-brand-dark text-[15px] gap-10">
            <img data-aos="fade-up" src="/assets/decorations/house-vector.svg" alt="Leaf Decoration" className=""/>
            <div className="">
                <h1 data-aos="fade-up" className="text-[32px] font-semibold ">Grand Pacific Hotel</h1>
                <p data-aos="fade-up" className="text-[15-x] ">Jl. Pasir Kaliki No.100, Pasir Kaliki, Kec. Cicendo, Kota Bandung, Jawa Barat 40172</p>
            </div>
            <Button dataAos="fade-in" className = "text-surface-cream bg-brand-dark" label="View Location" href="https://maps.app.goo.gl/4opv1u3iWbRF6TZv8"/>
            <img data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" src="/assets/images/map-design.svg" alt="Leaf Decoration" className=""/>
            <div data-aos="fade-up" className="absolute">
                <div className="flex flex-row relative bottom-60 left-40">
                    <img src="/assets/decorations/flower-red.svg" className="rotate-20" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="absolute">
                <div className="flex flex-row relative bottom-90 right-40">
                    <img src="/assets/decorations/flower-red.svg" className="rotate-20" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>
        </div>
    )
}

export default PlaceInformation;