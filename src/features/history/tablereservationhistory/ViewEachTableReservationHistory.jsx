import Modal from "../../../components/Modal";
import ReservationConfirmations from "../../reservetable/ReservationConfirmations";

function ViewEachTableReservationHistory({ reservationcodeProps }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit-user">
          <button className="p-2 shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum rounded-md hover:bg-akaccent-500">
            Invoice
          </button>
        </Modal.Open>

        <Modal.Window name="edit-user">
          <ReservationConfirmations
            reservationcodeProps={reservationcodeProps}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ViewEachTableReservationHistory;
