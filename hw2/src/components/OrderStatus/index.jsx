function OrderStatus({ orders }) {
  return (
    <div>
      {orders.map((order) => (
        <p>
          Order#{order.orderId}: {order.status}
        </p>
      ))}
    </div>
  );
}

export default OrderStatus;
