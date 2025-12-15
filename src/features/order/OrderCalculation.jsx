function OrderCalculation({
  totalCartPrice,
  promotion,
  deliveryFee,
  serviceFee,
  taxes,
  total,
}) {
  return (
    <div className="shadow-xl dark:shadow rounded-lg shadow-akaccent-300 ">
      <div className="grid grid-cols-2 gap-y-2 border rounded-lg mt-5 p-5 py-6 sm:px-8 px-2">
        <div className="text-left sm:px-6 px-1">Subtotal:</div>
        <div className="text-right sm:px-6 px-1 font-bold">
          ${totalCartPrice}
        </div>

        <div className="text-left sm:px-6 px-1">Promotions:</div>
        <div className="text-right sm:px-6 px-1 font-bold">$ -{promotion}</div>

        <div className="text-left sm:px-6 px-1">Delivery Fee:</div>
        <div className="text-right sm:px-6 px-1 font-bold">${deliveryFee}</div>

        <div className="text-left sm:px-6 px-1">Service Fee:</div>
        <div className="text-right sm:px-6 px-1 font-bold">${serviceFee}</div>

        <div className="text-left sm:px-6 px-1">Taxes:</div>
        <div className="text-right sm:px-6 px-1 font-bold">${taxes}</div>

        <div className="col-span-2 text-aksoftplatinum bg-akslatebluegray/80 px-6 py-3 grid grid-cols-2 rounded-lg">
          <span className="flex justify-start">Total:</span>
          <span className="flex justify-end">${total}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderCalculation;

{
  /* <div className="grid grid-cols-2 gap-y-2 border rounded-lg mt-5 p-5 ">
        <div className="flex flex-between px-6">
          <p>Subtotal:</p>
          <p>${totalCartPrice}</p>
        </div>
        <div className="text-left px-6">Subtotal:</div>
        <div className="text-right px-6">${totalCartPrice}</div>

        <div className="text-left px-6">Promotions:</div>
        <div className="text-right px-6">$ -{promotion}</div>

        <div className="text-left px-6">Delivery Fee:</div>
        <div className="text-right px-6">${deliveryFee}</div>

        <div className="text-left px-6">Service Fee:</div>
        <div className="text-right px-6">${serviceFee}</div>

        <div className="text-left px-6">Taxes:</div>
        <div className="text-right px-6">${taxes}</div>

        <div className="col-span-2 text-aksoftplatinum bg-akslatebluegray/80 px-6 py-3 grid grid-cols-2 rounded-lg">
          <span className="flex justify-start">Total:</span>
          <span className="flex justify-end">${total}</span>
        </div>
      </div> */
}
