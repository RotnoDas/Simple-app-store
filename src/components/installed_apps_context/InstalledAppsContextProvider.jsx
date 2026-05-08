import { useState } from "react";
import { appsContext } from "./InstalledAppsContext";

const InstalledAppsContextProvider = ({children}) => {
    const [installedApps, setInstalledApps] = useState([]);
    const data = {
        installedApps,
        setInstalledApps
    }
    return (
        <appsContext.Provider value={data}>
            {children}
        </appsContext.Provider>
    );
};

export default InstalledAppsContextProvider;