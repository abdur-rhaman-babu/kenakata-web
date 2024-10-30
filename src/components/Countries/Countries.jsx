import { useLoaderData } from "react-router-dom";
import Country from "../Country/Country";

const Countries = () => {
  const countries = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-bold my-5 text-2xl">Countries: {countries.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
