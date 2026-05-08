import { BlinkBlur } from "react-loading-indicators";

const Loading = ({note}) => {
    return (
        <div className="flex items-center justify-center col-span-4 h-screen">
            <BlinkBlur color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} size="large" text={note} textColor="" />
        </div>
    );
};

export default Loading;