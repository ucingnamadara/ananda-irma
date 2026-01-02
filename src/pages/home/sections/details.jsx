import { useEffect, useState } from "react";

function Details(){
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
        <div className="bg-surface-cream w-full h-fit max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark text-[15px]">
            <img data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="/assets/decorations/frame-decoration-1.svg" alt="Line Decoration" className="absolute max-h-237.5  md:object-none z-0 "/>
            <div data-aos="fade-up" className="absolute">
                <div className="flex flex-row relative bottom-70">
                    <img src="/assets/decorations/flower-green.svg" className="rotate-20" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>
            <div data-aos="fade-up" className="absolute">
                <div className="flex flex-row relative top-70">
                    <img src="/assets/decorations/flower-green.svg" className="rotate-20" style={{ transform: `rotate(${rotation}deg)` }}></img>
                </div>
            </div>
            <div className="z-1">
                <div className="flex flex-row p-5 gap-3">
                    <div data-aos="fade-right" className="text-right flex flex-col justify-center items-end w-3/5 gap-2 left-animate ">
                        <p className="font-playfair text-[40px] md:text-[45px] font-bold tracking-tight line-clamp-3 leading-10">Ananda <span className="font-normal">Dana Pratama</span></p>
                        <img src="/assets/decorations/line-orange.svg" alt="Line Divider" className=""></img>
                        <p className="text-[15px] text-forest-dark font-medium">Son of Mr. Eka Dana Pramulia Putra & Mrs. Susi Suryani Elia</p>
                    </div>
                    <img data-aos="fade-left" src="/assets/images/grooms.svg" alt="Ananda Dana Pratama" className="w-2/5 right-animate "></img>
                </div>
                <div className="flex flex-row p-5 gap-3">
                    <img data-aos="fade-right" src="/assets/images/brides.svg" alt="Ananda Dana Pratama" className="w-2/5 left-animate "></img>
                    <div data-aos="fade-left" className="text-left flex flex-col justify-center items-start w-3/5 gap-2 right-animate ">
                        <p className="font-playfair text-[40px] md:text-[45px] font-bold tracking-tight line-clamp-3 leading-10">Irmayanti <span className="font-normal">Nur Sabillah</span></p>
                        <img src="/assets/decorations/line-orange.svg" alt="Line Divider" className=""></img>
                        <p className="text-[15px] text-forest-dark font-medium">Daughter of Mr. Ir. Iman Irnaman & Mrs. Suhaeti</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;