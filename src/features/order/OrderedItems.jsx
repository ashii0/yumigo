function OrderedItems({ item }) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-[2fr_0.5fr] sm:px-6">
      <span className="flex justify-start">
        {item.itemCount} x {item.item}
      </span>
      <span className="flex justify-end font-bold">${item.totalPrice}</span>
    </div>
  );
}

export default OrderedItems;
