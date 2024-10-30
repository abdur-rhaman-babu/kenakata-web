import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Product = ({ product }) => {
  console.log(product);
 
  const { title, image, price, category,id } = product;
  return (
    <div className="p-3 bg-white rounded-xl shadow-lg flex flex-col">
      <img src={image} className="h-56 mx-auto" alt="" />
      <h1 className="flex-grow my-4 text-xl font-semibold">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-500">Price: ${price}</p>
        <p className="font-semibold text-gray-500">{category}</p>
      </div>
      <div className="text-center my-4">
        <Link to={`/product/${id}`}><Button variant="contained">Explore More</Button></Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
