import DisplayUserDetails from "./DisplayUserDetails";
import Modal from "../../../components/Modal";

function EditUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="edit-user">
          <button className="sm:p-2 p-1 sm:text-base text-sm rounded-lg shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum">
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
