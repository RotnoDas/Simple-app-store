import { NavLink } from "react-router";
import logo from "../../assets/logo-D9NHcesw 1.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";
const Header = () => {
    return (
        <div className="px-20 py-4 bg-[#FFFFFF] border border-[#E9E9E9] sticky top-0 z-50">
            <nav className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <Link to="/">
                        <div className="flex items-center gap-1"> 
                            <img src={logo} alt="Company Logo" />
                            <p className="font-[inter] font-bold text-[24px] leading-6.5 tracking-[0%] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</p>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center gap-8">
                        <li>
                            <NavLink to="/" className="font-[inter] font-medium text-[20px] leading-[152%] tracking-[0%] text-[#000000]">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apps" className="font-[inter] font-medium text-[20px] leading-[152%] tracking-[0%] text-[#000000]">Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to="/installed-apps" className="font-[inter] font-medium text-[20px] leading-[152%] tracking-[0%] text-[#000000]">Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="https://github.com/RotnoDas/Simple-app-store">
                        <button className="px-4 py-3 rounded-md flex items-center gap-2.5 font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:cursor-pointer"><FaGithub></FaGithub>Contribute</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;