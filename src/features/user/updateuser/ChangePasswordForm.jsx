import { useState } from "react";
import { useUpdateUser } from "./useUpdateUser";
import toast from "react-hot-toast";

function ChangePasswordForm({ setIsOpenPassword }) {
  const { updateUser, isUpdating } = useUpdateUser();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      return toast.error("Please fill both fields");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    updateUser(
      { password: newPassword },
      {
        onSuccess: () => {
          setNewPassword(""),
            setConfirmPassword(""),
            setIsOpenPassword("false");
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="py-8 px-12 flex gap-6 flex-col shadow-xl dark:shadow-sm shadow-akaccent-300"
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-macondo text-akaccent-600 font-bold">
          Change Password
        </h2>
        <button
          type="button"
          onClick={() => setIsOpenPassword(false)}
          className="p-1 rounded shadow-xl"
        >
          X
        </button>
      </div>
      <div className="space-y-2">
        <label className="px-2 font-bold" htmlFor="newpassword">
          New Password
        </label>
        <input
          type="password"
          name="newpassword"
          className="px-5 py-3 w-full shadow-md border border-akaccent-200 dark:border-akslatebluegray"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
        />
      </div>

      <div className="space-y-2">
        <label className="px-2 font-bold" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          className="px-5 py-3 w-full shadow-md border border-akaccent-200 dark:border-akslatebluegray"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <button className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum">
          {isUpdating ? "Updating" : "Update Password"}
        </button>
      </div>
    </form>
  );
}

export default ChangePasswordForm;
