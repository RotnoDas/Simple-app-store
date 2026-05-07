import { BlinkBlur } from "react-loading-indicators";

const Loading = () => {
    return (
        <div className="flex items-center justify-center col-span-4 h-screen">
            <BlinkBlur color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} size="large" text="Please Wait..." textColor="" />
        </div>
    );
};

export default Loading;