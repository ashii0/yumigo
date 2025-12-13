import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../../components/SpinnerMini";

function Logout() {
  const { logout, isPending } = useLogout();

  return (
    <button disabled={isPending} onClick={() => logout()}>
      {!isPending ? <HiArrowRightOnRectangle size={24} /> : <SpinnerMini />}
    </button>
  );
}

export default Logout;
