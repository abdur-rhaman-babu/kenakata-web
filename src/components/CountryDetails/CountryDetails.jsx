import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
    const country = useLoaderData()
    const {name, flags} = country;
    return (
        <div>
            <h1>Country Details</h1>
            <h1>{name}</h1>
            <img src={flags?.png} alt="" />
        </div>
    );
};

export default CountryDetails;