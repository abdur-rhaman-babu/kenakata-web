import { useLoaderData, useNavigate } from "react-router-dom";



const ProductDetails = () => {
    const product = useLoaderData()
    const navigate = useNavigate()
    return (
        <div>
            <h1>Product Details</h1>
            <h1>{product.title}</h1>
            <button onClick={()=>navigate(-1)} className="bg-black text-white py-3 px-5 rounded-lg">Go Back</button>
        </div>
    );
};

export default ProductDetails;