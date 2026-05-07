const Stats = () => {
    return (
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-20 py-20 flex flex-col items-center gap-10">
            <div>
                <h1 className="font-[inter] font-bold text-[48px] leading-[auto] tracking-[0%] text-[#FFFFFF]">Trusted by Millions, Built for You</h1>
            </div>
            <div className="flex items-center justify-between gap-60">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]">Total Downloads</p>
                    <h1 className="font-[inter] font-extrabold text-[64px] leading-18 tracking-[0%] text-[#FFFFFF]">29.6M</h1>
                    <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]">21% more than last month</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]">Total Reviews</p>
                    <h1 className="font-[inter] font-extrabold text-[64px] leading-18 tracking-[0%] text-[#FFFFFF]">906K</h1>
                    <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]">46% more than last month</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]">Active Apps</p>
                    <h1 className="font-[inter] font-extrabold text-[64px] leading-18 tracking-[0%] text-[#FFFFFF]">132+</h1>
                    <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]">31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;