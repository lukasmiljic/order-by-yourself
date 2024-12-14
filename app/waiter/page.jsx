import orders from "../../data/orders";

const waiter = () => {
  return (
    <div>
      <h1>Waiter</h1>
      <h2>Orders</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            product name: {order.product.name}, quantity: {order.quantity},
            table: {order.table}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default waiter;
