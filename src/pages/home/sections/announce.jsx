import { formatGuestCount } from "../../../utils/formatter";

function Announce({data}){
    return (
    <div className="bg-surface-cream w-full h-[85svh] max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark">
        <img data-aos="fade-in" data-aos-anchor-placement="center-bottom" src="/assets/decorations/frame-decoration.svg" alt="Frame Decoration" className="absolute h-[85svh] max-h-237.5 md:object-none z-0 w-23/24 md:w-full "/>
        <div data-aos="fade-in" data-aos-anchor-placement="center-bottom" className="absolute">
            <div className="flex flex-row relative bottom-50 md:bottom-60 left-33 w-1/2 md:w-2/2 md:left-35 leng">
                <img src="/assets/icons/smile.svg" className="rotate-20"></img>
            </div>
        </div>
        <div data-aos="fade-in" data-aos-anchor-placement="center-bottom" className="absolute">
            <div className="flex flex-row relative top-50 md:top-60 right-28 w-1/2 md:w-2/2 md:right-35">
                <img src="/assets/icons/love.svg" className="rotate-20"></img>
            </div>
        </div>
        <div className={`w-9/12 flex flex-col justify-center items-center space-y-4 text-[13px]/5 md:text-[15px]/7 z-1`}>
            <div data-aos="fade-up" className="flex flex-col space-y-0 justify-center items-center font-bold text-[20px] md:text-[24px]   ">     
                <h1>Hi,</h1>
                <h1>{data?.displayName == null ? "Guest" : data?.displayName}</h1>
            </div>
            <p data-aos="fade-up" className="font-medium ">We’re overjoyed to invite you to our wedding!</p>
            <p data-aos="fade-up" className="font-semibold ">As we're planning an intimate celebration, it will be shared only with those closest to our hearts.</p>
            <p data-aos="fade-up" className={`font-bold  ${data?.amount == null ? 'hidden' : ''}` }>This invitation is for {formatGuestCount(data?.totalInvitation)} only. We kindly request that no additional guests be brought.</p>
            <p data-aos="fade-up" className="font-medium ">Thank you for understanding, and for being such a special part of our story.</p>
            <p data-aos="fade-up" className="font-medium ">We can’t wait to celebrate this beautiful moment with you!</p>
        </div>
    </div>
    )
}

export default Announce;