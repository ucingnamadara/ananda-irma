import { formatGuestCount } from "../../../utils/formatter";

function Announce({data}){
    return (
    <div className="bg-surface-cream w-full h-[85svh] max-h-237.5 flex flex-col justify-center items-center py-20 px-4 -z-1 text-brand-dark">
        <img data-animate src="/assets/decorations/frame-decoration.svg" alt="Frame Decoration" className="absolute h-[85svh] max-h-237.5 md:object-none z-0 w-23/24 md:w-full opacity-0 transition-all duration-800"/>
        <div className={`w-9/12 flex flex-col justify-center items-center space-y-4 text-[13px] md:text-[15px] z-1`}>
            <div data-animate className="flex flex-col space-y-0 justify-center items-center font-bold text-[20px] md:text-[24px]  opacity-0 transition-all duration-800 ">     
                <h1>Hi,</h1>
                <h1>{data?.fullName}</h1>
            </div>
            <p data-animate className="font-medium opacity-0 transition-all duration-800">We’re overjoyed to invite you to our wedding!</p>
            <p data-animate className="font-semibold opacity-0 transition-all duration-800">As we’re planning an intimate celebration, surrounded only by those dearest to us.</p>
            <p data-animate className={`font-bold opacity-0 transition-all duration-800 ${data?.totalInvitation == null ? 'hidden' : ''}` }>This invitation is for {formatGuestCount(data?.totalInvitation)} only. We kindly request that no additional guests be brought.</p>
            <p data-animate className="font-medium opacity-0 transition-all duration-800">Thank you for understanding, and for being such a special part of our story.</p>
            <p data-animate className="font-medium opacity-0 transition-all duration-800">We can’t wait to celebrate this beautiful moment with you!</p>
        </div>
    </div>
    )
}

export default Announce;