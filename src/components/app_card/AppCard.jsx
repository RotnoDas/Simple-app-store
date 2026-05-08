import { FaStar } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router";

const AppCard = ({app}) => {
    return (
        <Link to={`/apps/${app.id}`} className="px-4 py-4 bg-[#FFFFFF] rounded-sm flex flex-col items-center gap-4">
            <div>
                <img src={app.image} alt="App Image" className="w-71.25 h-71.25 rounded-lg" />
            </div>
            <div>
                <p className="font-[inter] font-bold text-[20px] leading-[auto] tracking-[0%] text-[#001931]">{app.title}</p>
            </div>
            <div className="flex items-center gap-35">
                <div className="px-2.5 py-1.5 rounded-sm bg-[#F1F5E8]">
                    <p className="font-[inter] font-medium text-[16px] leading-[auto] tracking-[0%] text-[#00D390] flex items-center gap-1"><FiDownload />{app.downloads}</p>
                </div>
                <div className="px-2.5 py-1.5 rounded-sm bg-[#FFF0E1]">
                    <p className="font-[inter] font-medium text-[16px] leading-[auto] tracking-[0%] text-[#FF8811] flex items-center gap-1"><FaStar />{app.ratingAvg}</p>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;