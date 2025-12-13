import OrderConfirmation from "../../order/OrderConfirmation";
import Modal from "../../../components/Modal";

function ViewEachOrderHistory({ ordercodeProp }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit-user">
          <button className="p-2 shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum rounded-md hover:bg-akaccent-500">
            Invoice
          </button>
        </Modal.Open>

        <Modal.Window name="edit-user">
          <OrderConfirmation ordercodeProp={ordercodeProp} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ViewEachOrderHistory;
