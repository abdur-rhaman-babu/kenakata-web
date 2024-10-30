import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default Home;