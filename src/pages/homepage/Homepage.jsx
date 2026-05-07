import Banner from "../../components/banner/Banner";
import Stats from "../../components/stats/Stats";
import TrendingApps from "../../components/trending_apps/TrendingApps";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Homepage;