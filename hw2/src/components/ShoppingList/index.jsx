function ShoppingList({ items }) {
  return (
    <div>
      <ul>
        {items.length !== 0 ? (
          items.map((item) => <li>{item}</li>)
        ) : (
          <p>Список покупок пуст</p>
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
