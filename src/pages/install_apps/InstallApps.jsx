import { useContext } from "react";
import { appsContext } from "../../components/installed_apps_context/InstalledAppsContext";
import InstalledApp from "../../components/installed_app/InstalledApp";
import { toast, Zoom } from "react-toastify";
import noApp from "../../assets/OBJECTS.png";
import { Link } from "react-router";

const InstallApps = () => {
    const { installedApps, setInstalledApps } = useContext(appsContext);
    const handleUninstall = (appId) => {
        if(installedApps.find((app) => app.id === appId)) {
            const filteredApps = installedApps.filter((app) => app.id !== appId);
            setInstalledApps(filteredApps);
            toast.info('App uninstalled successfully!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                }
            );
            return;
        } else {
            return;
        }
    }
    const handleSortBySize = () => {
        const sortedApps = [...installedApps].sort((a, b) => a.size - b.size);
        toast('Apps sorted successfully!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            }
        );
        setInstalledApps(sortedApps);
    }
    const handleSortByName = () => {
        const sortedApps = [...installedApps].sort((a, b) => a.title.localeCompare(b.title));
        toast('Apps sorted successfully!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            }
        );
        setInstalledApps(sortedApps);
    }
    const handleSortByRating = () => {
        const sortedApps = [...installedApps].sort((a, b) => b.ratingAvg - a.ratingAvg);
        toast('Apps sorted successfully!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            }
        );
        setInstalledApps(sortedApps);
    }
    if(installedApps.length === 0) {
        return (
            <div className="px-20 py-20 bg-[#F1F5E8] flex flex-col items-center gap-5 min-h-screen justify-center">
                <img src={noApp} alt="No App" />
                <h1 className="font-[inter] font-semibold text-[48px] leading-15 tracking-[1.2%] text-[#001931]">You have no installed apps</h1>
                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382]">Please install apps from the market</p>
                <Link to={"/"}>
                    <button className="px-4 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] rounded-lg hover:cursor-pointer">Return Home</button>
                </Link>
            </div>
        );
    }
    return (
        <div className="px-20 py-20 bg-[#F1F5E8] flex flex-col items-center gap-10 min-h-screen">
            <div className="space-y-4">
                <h1 className="font-[inter] font-bold text-[48px] leading-[auto] tracking-[0%] text-[#001931] text-center">Your Installed Apps</h1>
                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382] text-center">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex items-center justify-between w-full">
                <p className="font-[inter] font-semibold text-[24px] leading-8 tracking-[0%] text-[#001931]">{installedApps.length} Apps Found</p>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-[inter] font-semibold text-[16px] leading-8 tracking-[0%] text-[#FFFFFF] px-6 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-lg hover:cursor-pointer">Sort</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={handleSortBySize}>By size</a></li>
                        <li><a onClick={handleSortByName}>By name</a></li>
                        <li><a onClick={handleSortByRating}>By rating</a></li>
                    </ul>
                </div>
            </div>
            <div className="w-full space-y-4">
                {
                    installedApps.map((app) => {
                        return (
                            <InstalledApp handleUninstall={handleUninstall} app={app} key={app.id}></InstalledApp>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default InstallApps;