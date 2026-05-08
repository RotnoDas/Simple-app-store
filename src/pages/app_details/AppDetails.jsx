import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import download from "../../assets/fi_18110198.png";
import rating from "../../assets/fi_1828884.png";
import review from "../../assets/fi_17817684.png";
import Loading from "../../components/loading/Loading";
import { useContext } from "react";
import { appsContext } from "../../components/installed_apps_context/InstalledAppsContext";
import { toast, Zoom } from "react-toastify";
import noApp from "../../assets/OBJECTS.png";

const AppDetails = () => {
    const { installedApps, setInstalledApps } = useContext(appsContext);
    const handleInstall = (expectedId) => {
        if(installedApps.find((app) => app.id === expectedId)) {
            toast.info('App is already installed!', {
                position: "bottom-center",
                autoClose: 3000,
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
            setInstalledApps([...installedApps, expectedApp]);
            toast.success('App installed successfully!', {
                position: "bottom-center",
                autoClose: 3000,
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
        }
    }
    const appId = Number(useParams().appId);
    const [appDetails, setAppDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchAppDetails = async() => {
            try {
                const response = await fetch("/data.json");
                const allDetails = await response.json();
                setTimeout(() => {
                    setAppDetails(allDetails);
                    setLoading(false);
                }, 1000);
            } catch(error) {
                console.log(error);
            }
        }
        fetchAppDetails();
    }, []);
    const expectedApp = appDetails.find((app) => app.id === appId);
    if(!expectedApp) {
        if(loading) {
            return (
                <Loading note={"Loading App Details..."}></Loading>
            );
        } else {
            return (
                <div className="px-20 py-20 bg-[#F1F5E8] flex flex-col items-center gap-5 min-h-screen justify-center">
                    <img src={noApp} alt="No App" />
                    <h1 className="font-[inter] font-semibold text-[48px] leading-15 tracking-[1.2%] text-[#001931]">OPPS!! APP NOT FOUND</h1>
                    <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382]">The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to={"/"}>
                        <button className="px-4 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] rounded-lg hover:cursor-pointer">Return Home</button>
                    </Link>
                </div>
            );
        }
    }
    return (
        <div className="px-20 py-20 bg-[#F1F5E8] space-y-10">
            <div className="flex items-center justify-start gap-20">
                <div>
                    <img src={expectedApp.image} alt="App Image" className="w-87.5 h-87.5 rounded-lg" />
                </div>
                <div className="flex flex-col items-start gap-4 w-[70%]">
                    <div>
                        <h1 className="font-[inter] font-bold text-[32px] leading-[auto] tracking-[0%] text-[#001931]">{expectedApp.title}</h1>
                        <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382]">Developed by: <span className="font-[inter] font-semibold text-[20px] leading-8 tracking-[0%] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{expectedApp.companyName}</span></p>
                    </div>
                    <hr className="border border-[#D9D9D9] w-full" />
                    <div className="flex items-center gap-15">
                        <div className="flex flex-col items-start gap-2">
                            <img src={download} alt="Download Logo" />
                            <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#001931]">Downloads</p>
                            <h1 className="font-[inter] font-extrabold text-[40px] leading-10 tracking-[0%] text-[#001931]">{expectedApp.downloads}</h1>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <img src={rating} alt="Rating Logo" />
                            <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#001931]">Average Ratings</p>
                            <h1 className="font-[inter] font-extrabold text-[40px] leading-10 tracking-[0%] text-[#001931]">{expectedApp.ratingAvg}</h1>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <img src={review} alt="Review logo" />
                            <p className="font-[inter] font-normal text-[16px] leading-6 tracking-[0%] text-[#001931]">Total Reviews</p>
                            <h1 className="font-[inter] font-extrabold text-[40px] leading-10 tracking-[0%] text-[#001931]">{expectedApp.reviews}</h1>
                        </div>
                    </div>
                    <div>
                        <button className="px-5 py-3.5 rounded-lg bg-[#00D390] font-[inter] font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#FFFFFF] hover:cursor-pointer" onClick={() => handleInstall(expectedApp.id)}>Install Now ({expectedApp.size}MB)</button>
                    </div>
                </div>
            </div>
            <hr className="border border-[#D9D9D9] w-full" />
            <div>
                <h1 className="font-[inter] font-semibold text-[24px] leading-8 tracking-[0%] text-[#001931]">Ratings</h1>
            </div>
            <hr className="border border-[#D9D9D9] w-full" />
            <div className="space-y-6">
                <h1 className="font-[inter] font-semibold text-[24px] leading-8 tracking-[0%] text-[#001931]">Description</h1>
                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382]">{expectedApp.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;