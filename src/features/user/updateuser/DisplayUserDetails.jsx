import { useEffect, useState } from "react";
import { useUser } from "../login/useUser";
import Address from "./Address";
import { useUpdateUser } from "../updateuser/useUpdateUser";
import FullName from "../updateuser/FullName";
import Email from "../updateuser/Email";
import PhoneNumber from "../updateuser/PhoneNumber";
import Avatar from "../updateuser/Avatar";

function DisplayUserDetails() {
  const {
    user: {
      email,
      user_metadata: {
        fullname: currentFullName,
        phone: currentPhone,
        address: currentAddress,
        avatar: currentAvatar,
      },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();

  const [fullname, setFullname] = useState(currentFullName);
  const [phone, setPhone] = useState(currentPhone);
  const [address, setAddress] = useState(currentAddress);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setFullname(currentFullName ?? "");
    setPhone(currentPhone ?? "");
    setAddress(currentAddress ?? "");
    setAvatar(null);
  }, [currentFullName, currentPhone, currentAddress, currentAvatar]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullname || !phone || !address) return;

    updateUser({
      fullname,
      phone,
      address,
      avatar,
    });
  }

  function handleCancel() {
    setFullname(currentFullName);
    setPhone(currentPhone);
    setAddress(currentAddress);
    setAvatar(null);
  }

  return (
    <form onSubmit={handleSubmit} className="py-2 px-8 flex gap-6 flex-col">
      <FullName fullname={fullname} setFullname={setFullname} />
      <Email email={email} />
      <PhoneNumber phone={phone} setPhone={setPhone} />
      <Address address={address} setAddress={setAddress} />
      <Avatar isUpdating={isUpdating} setAvatar={setAvatar} />

      <div className="flex justify-end gap-5">
        <button
          className="p-2 rounded shadow-xl dark:shadow-sm shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum"
          type="reset"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </button>

        <button
          className="p-2 rounded shadow-xl dark:shadow-md shadow-akaccent-400 bg-akaccent-600 text-aksoftplatinum"
          type="submit"
        >
          Update Account
        </button>
      </div>
    </form>
  );
}

export default DisplayUserDetails;
