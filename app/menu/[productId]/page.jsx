"use client";
import { useParams } from "next/navigation";
import products from "../../../data/products";
import orders from "../../../data/orders";

export default function Home() {
  const params = useParams();
  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );
  const order = () => {
    orders.push({ product: product, quantity: 1, table: 1 });
    alert(orders.length);
  };

  return (
    <div>
      <h1>Order by yourself</h1>
      <h2>item details</h2>
      {product ? (
        <div>
          <h2>name: {product.name}</h2>
          <p>description: {product.description}</p>
          <p>price: {product.price}</p>
          <button onClick={order}>order</button>
        </div>
      ) : (
        <div>product not found</div>
      )}
    </div>
  );
}
