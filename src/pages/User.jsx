import { useState } from "react";
import ChangePasswordForm from "../features/user/updateuser/ChangePasswordForm";
import DisplayUserDetails from "../features/user/updateuser/DisplayUserDetails";
import { useUser } from "../features/user/login/useUser";

function User() {
  const [isOpenPassword, setIsOpenPassword] = useState(false);

  const { fullname } = useUser();

  return (
    <div>
      {isOpenPassword ? (
        <ChangePasswordForm setIsOpenPassword={setIsOpenPassword} />
      ) : (
        <div className="flex gap-1 mt-2 justify-end">
          <button
            className="p-2 rounded shadow-xl shadow-akaccent-300 dark:shadow-sm bg-akaccent-600 text-aksoftplatinum"
            onClick={() => {
              setIsOpenPassword(true);
            }}
          >
            Change Password
          </button>
        </div>
      )}

      <div className="shadow-xl shadow-akaccent-300 dark:shadow-sm mt-5 px-5 py-3">
        <h2 className="text-2xl font-macondo text-akaccent-600 px-5 py-3 font-bold">
          {/* {user?.user_metadata?.fullname || "Guest"}'s Account Details */}
          {fullname || "Guest"}'s account details
        </h2>
        <DisplayUserDetails />
      </div>
    </div>
  );
}

export default User;
