import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Link } from "react-router";

const InstalledApp = ({app, handleUninstall}) => {
    return (
        <div className="px-4 py-4 bg-[#FFFFFF] rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src={app.image} alt="App Image" className="w-20 h-20" />
                <div className="space-y-2">
                    <div>
                        <Link to={`/apps/${app.id}`}>
                            <p className="font-[inter] font-bold text-[20px] leading-[auto] tracking-[0%] text-[#001931]">{app.title}</p>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <p className="flex items-center gap-1 font-[inter] font-medium text-[16px] leading-[auto] tracking-[0%] text-[#00D390]"><LuDownload />{app.downloads}</p>
                        </div>
                        <div>
                            <p className="flex items-center gap-1 font-[inter] font-medium text-[16px] leading-[auto] tracking-[0%] text-[#FF8811]"><FaStar />{app.ratingAvg}</p>
                        </div>
                        <div>
                            <p className="font-[inter] font-normal text-[16px] leading-[auto] tracking-[0%] text-[#627382]">{app.size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="px-4 py-3 rounded-lg bg-[#00D390] font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] hover:cursor-pointer" onClick={() => handleUninstall(app.id)}>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApp;