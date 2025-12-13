import DisplayUserDetails from "./DisplayUserDetails";
import Modal from "../../../components/Modal";

function EditUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit-user">
          <button className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum">
            Edit Personal Details
          </button>
        </Modal.Open>

        <Modal.Window name="edit-user">
          <DisplayUserDetails />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default EditUser;
