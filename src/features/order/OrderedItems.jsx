function OrderedItems({ item }) {
  return (
    <div className="grid grid-cols-2 px-6">
      <span className="flex justify-start">
        {item.itemCount} x {item.item}
      </span>
      <span className="flex justify-end">${item.totalPrice}</span>
    </div>
  );
}

export default OrderedItems;
