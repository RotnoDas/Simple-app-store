import { Link } from "react-router";
import notFound from "../../assets/5156006_2689520 1.png";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-sm max-md:px-4 min-h-screen">
            <img src={notFound} alt="Not Found" />
            <div className="h-1 w-16 rounded bg-indigo-500 my-5 md:my-7"></div>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">Page Not Found</p>
            <p className="text-sm md:text-base mt-4 text-gray-500 max-w-md text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <div className="flex items-center gap-4 mt-6">
                <Link to={"/"}>
                    <button className="px-4 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] rounded-lg hover:cursor-pointer">Return Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;