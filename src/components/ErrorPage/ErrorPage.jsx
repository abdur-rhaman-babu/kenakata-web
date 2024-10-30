import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-2xl font-bold">Oops!!</h1>
        <Link to='/'><button className="bg-black text-white py-3 px-5 rounded-lg">Go Home</button></Link>
      </div>
    </div>
  );
};

export default ErrorPage;
