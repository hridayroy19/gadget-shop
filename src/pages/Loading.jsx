import { ScaleLoader } from "react-spinners";


const Loading = () => {
    return (
        <div className="min-h-screen  flex justify-center items-center ">
            <ScaleLoader color="#1aef6f" loading={true}  />
        </div>
    );
};

export default Loading;