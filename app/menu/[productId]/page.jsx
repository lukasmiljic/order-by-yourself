"use client";
import { useParams } from "next/navigation";
import products from "../../../data/products";

export default function Home() {
  const params = useParams();
  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );

  return (
    <div>
      <h1>Order by yourself</h1>
      <h2>item details</h2>
      {product ? (
        <div>
          <h2>name: {product.name}</h2>
          <p>description: {product.description}</p>
          <p>price: {product.price}</p>
        </div>
      ) : (
        <div>product not found</div>
      )}
    </div>
  );
}
