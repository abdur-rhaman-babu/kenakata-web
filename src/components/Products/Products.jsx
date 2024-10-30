import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-bold my-5 text-2xl">
        Countries: {products.length}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
