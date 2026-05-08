import { useEffect, useState } from "react";
import AppCard from "../app_card/AppCard";
import Loading from "../loading/Loading";
import { Link } from "react-router";

// const trendingApps = fetch("/public/data.json")
//                     .then((response) => {
//                         return response.json();
//                     });
const TrendingApps = () => {
    const [trendingApps, setTrendingApps] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTrendingApps = async() => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                setTimeout(() => {
                    setTrendingApps(data);
                    setLoading(false);
                }, 2000);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchTrendingApps();
    }, []);
    // const trendingAppsData = use(trendingApps);
    return (
        <div className="px-20 py-20 bg-[#F1F5E8] flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4">
                <h1 className="font-[inter] font-bold text-[48px] leading-[auto] tracking-[0%] text-[#001931]">Trending Apps</h1>
                <p className="font-[inter] font-normal text-[20px] leading-8 tracking-[0%] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {
                    loading ? 
                        <Loading note={"Please Wait..."}></Loading>
                    :
                        trendingApps.slice(0, 8).map((app) => {
                            return (
                                <AppCard key={app.id} app={app}></AppCard>
                            );
                        })
                }
            </div>
            <div>
                {
                    loading ?
                        null
                    :
                        <Link to={"/apps"}>
                            <button className="px-6 py-3 rounded-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-[inter] font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] hover:cursor-pointer">Show All</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default TrendingApps;