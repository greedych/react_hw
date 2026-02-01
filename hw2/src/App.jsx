import "./App.css";
import Greeting from "./components/Greeting";
import OrderStatus from "./components/OrderStatus";
import ShoppingList from "./components/ShoppingList";

const ShoppingItems = ["Apple", "Banana", "Cucumber", "Meet"];

const orders = [
  { orderId: 1, status: "on the way" },
  { orderId: 2, status: "processed" },
  { orderId: 3, status: "delivered" },
];

function App() {
  return (
    <>
      <Greeting name="Mark" />
      <ShoppingList items={ShoppingItems} />
      <OrderStatus orders={orders} />
    </>
  );
}

export default App;
