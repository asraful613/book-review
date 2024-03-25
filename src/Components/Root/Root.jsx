import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="mx-auto max-w-7xl">
            <Header></Header>
           <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;