import { Link } from "react-router";
import bannerImage from "../../assets/hero (1).png";
import googlePlay from "../../assets/fi_16076057.png";
import appStore from "../../assets/Group.png";

const Banner = () => {
    return (
        <div className="px-20 pt-20 pb-0 flex flex-col items-center justify-center bg-[#FFFFFF] gap-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-[inter] font-bold text-[72px] leading-20 tracking-[0%] text-[#001931] text-center">We Build <br /> <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span>  Apps</h1>
                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382] text-center">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex items-center gap-4">
                    <Link to={"/play.google.com/store/games?hl=en"}>
                        <button className="px-6 py-3 rounded-lg bg-[#D2D2D2] border border-[#D2D2D2] flex items-center gap-2 font-[inter] font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#001931] hover:cursor-pointer"><img src={googlePlay} alt="Google Play" /> Google Play</button>
                    </Link>
                    <Link to={"/https://www.apple.com/app-store/"}>
                        <button className="px-6 py-3 rounded-lg bg-[#D2D2D2] border border-[#D2D2D2] flex items-center gap-2 font-[inter] font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#001931] hover:cursor-pointer"><img src={appStore} alt="App Store" /> App Store</button>
                    </Link>
                </div>
            </div>
            <div>
                <img src={bannerImage} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;