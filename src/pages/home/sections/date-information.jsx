import { useCountdown } from "../../../hooks/userCount"

function DateInformation() {
    const [days, hours, minutes, seconds] = useCountdown("2026-02-07T08:00:00+07:00")
    return (
        <div className="bg-surface-cream w-full h-fit flex flex-col justify-center items-center pt-20 px-4 -z-1 text-brand-dark">
            <h1 className="text-[24px] font-semibold">Save the Date!</h1>
            <div className="flex flex-row gap-5 my-6">
                <CountDownPart value={days} label={"Days"} />
                <CountDownPart value={hours} label={"Hours"} />
                <CountDownPart value={minutes} label={"Minutes"} />
                <CountDownPart value={seconds} label={"Seconds"} />
            </div>
            <div className="flex flex-col gap-1 text-[24px] font-semibold">
                <p className="">Saturday</p>
                <p className="">February 7<span className="align-top text-[14px]">th</span>, 2026</p>
            </div>
            <div className="flex flex-col gap-5 my-6 color-forest-dark">
                <div>
                    <p className="text-[20px]">Akad</p>
                    <p className="text-[24px]">08.00 - 10.00</p>
                </div>
                <div>
                    <p className="text-[20px]">Reception</p>
                    <p className="text-[24px]">10.30 - 13.30</p>
                </div>
            </div>
        
        </div>
    )
}

function CountDownPart({ value, label }) {
    return (
        <div className="flex flex-col justify-center items-center mx-2">
            <div className="text-[30px] font-semibold">{value}</div>
            <div className="text-[15px] font-medium">{label}</div>
        </div>
    )
}

export default DateInformation;