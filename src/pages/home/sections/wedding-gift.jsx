function WeddingGift(){
    return (
    <div className="bg-surface-cream w-full flex flex-col justify-center items-center pt-20 px-4 -z-1 text-brand-dark text-[15px]">
        <img src="/assets/decorations/curl-line.svg" alt="Curl Decoration" className=" md:object-none z-0"/>
        <h1 data-animate className="text-[24px] font-semibold mt-10 opacity-0 transition-all duration-800">Wedding Gift</h1>
        <p data-animate className="mt-2 opacity-0 transition-all duration-800">We are truly grateful to share this moment with you. Your presence is more than enough and already means so much to us. Should you wish to give a gift, it will be received with heartfelt gratitude.</p>
        <div className="w-full">
            <div data-animate className="flex flex-row gap-2 md:gap-5 mt-20 mb-30 justify-center items-center opacity-0 transition-all duration-800 left-animate">
                <img src="/assets/decorations/bank-account-frame.svg" className="absolute max-w-[397px] w-23/24"></img>
                <img src="/assets/images/mandiri-logo.svg" alt="Gift Box"></img>
                <div className="text-left flex flex-col gap-0.5">
                    <h1 className="text-[20px]">1231312312</h1>
                    <p>Ananda Dana Pratama</p>
                </div>
            </div>
            <div data-animate className="flex flex-row gap-5 my-25 justify-center items-center opacity-0 transition-all duration-800 right-animate">
                <img src="/assets/decorations/bank-account-frame.svg" className="absolute max-w-[397px] w-23/24"></img>
                <img src="/assets/images/bca-logo.svg" alt="Gift Box"></img>
                <div className="text-left flex flex-col gap-0.5">
                    <h1 className="text-[20px]">1231312312</h1>
                    <p>Irmayanti Nur Sabillah</p>
                </div>
            </div>
        </div>
    </div>)
}

export default WeddingGift;