import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import { ThreeCircles } from "react-loader-spinner";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <Banner />
      {navigation.state === "loading" ? (
        <div className="flex items-center justify-center h-72 font-bold text-2xl">
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#257dd4"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Home;
