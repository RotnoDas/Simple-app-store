import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo-D9NHcesw 1.png";
import { SiFacebook } from "react-icons/si";
const Footer = () => {
    return (
        <div className="px-20 py-8.75 bg-[#001931] space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <img src={logo} alt="Footer Logo" />
                    <p className="font-[inter] font-bold text-[16px] leading-7 tracking-[0%] text-[#FFFFFF]">HERO.IO</p>
                </div>
                <div className="space-y-2">
                    <div>
                        <p className="font-[inter] font-medium text-[20px] leading-7 tracking-[0%] text-[#FFFFFF]">Social Links</p>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4">
                            <li className="text-[#FFFFFF] text-[20px] leading-7 tracking-[0%] font-[inter] font-medium hover:cursor-pointer"><FaXTwitter /></li>
                            <li className="text-[#FFFFFF] text-[20px] leading-7 tracking-[0%] font-[inter] font-medium hover:cursor-pointer"><FaLinkedinIn /></li>
                            <li className="text-[#FFFFFF] text-[20px] leading-7 tracking-[0%] font-[inter] font-medium hover:cursor-pointer"><SiFacebook /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA]">Copyright @2026 - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;