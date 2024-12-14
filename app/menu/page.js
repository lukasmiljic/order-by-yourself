import products from "../../data/products";

export default function Home() {
  return (
    <div>
      <h1>Order by yourself</h1>
      <h2>menu </h2>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
