import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";
import AppCard from "../../components/app_card/AppCard";
import { Link } from "react-router";
import noApp from "../../assets/OBJECTS.png";

const Apps = () => {
    const [loading, setLoading] = useState(true);
    const [apps, setApps] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
        const fetchApps = async() => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                setTimeout(() => {
                    setApps(data);
                    setLoading(false);
                }, 1000);
            } catch(error) {
                console.log(error);
            }
        }
        fetchApps();
    }, []);
    const filteredApps = apps.filter((app) => {
        return app.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    return (
        <div className="px-20 py-20 bg-[#F1F5E8] flex flex-col items-center gap-10">
            <div>
                <h1 className="font-[inter] font-bold text-[48px] leading-[auto] tracking-[0%] text-[#001931] text-center">Our All Applications</h1>
                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382] text-center">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex flex-col items-center gap-10">
                <div className="flex items-center justify-between gap-230">
                    <p className="font-[inter] font-semibold text-[24px] leading-8 tracking-[0%] text-[#001931]">
                        ({filteredApps.length > 0  ?
                            filteredApps.length
                        : filteredApps.length === 0 ?
                            filteredApps.length
                        : apps.length}) Apps Found
                    </p>
                    <div className="relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#627382]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-4.35-4.35m1.85-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                            />
                        </svg>
                        <input type="text" className="pl-12 pr-4 py-3 rounded-sm bg-[#FFFFFF] border border-[#D2D2D2] outline-none font-[inter] font-normal text-[16px] leading-[auto] tracking-[0%] text-[#627382]" placeholder="Search Apps" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}></input>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {
                        loading ?
                            <Loading note={"Loading Apps..."}></Loading>
                        : filteredApps.length === 0 ?
                            <div className="grid col-span-4 justify-center gap-4">
                                <div className="flex items-center justify-center">
                                    <img src={noApp} alt="No App" className="text-center" />
                                </div>
                                <h1 className="font-[inter] font-semibold text-[48px] leading-15 tracking-[1.2%] text-[#001931] text-center">OPPS!! APP NOT FOUND</h1>
                                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382] text-center">The App you are requesting is not found on our system.  please try another apps</p>
                                <Link to={"/"}>
                                    <div className="flex items-center justify-center">
                                        <button className="px-4 py-3 bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] rounded-lg hover:cursor-pointer">Return Home</button>
                                    </div>
                                </Link>
                            </div>
                        : filteredApps.length > 0 ?
                            filteredApps.map((app) => {
                                return (
                                    <AppCard key={app.id} app={app}></AppCard>
                                );
                            })
                        :
                            apps.map((app) => {
                                return (
                                    <AppCard key={app.id} app={app}></AppCard>
                                );
                            })
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;