//import { useUser } from "../features/user/useUser";

function UserProfileUpdate({ setIsOpenProfile }) {
  // const { user } = useUser();
  return (
    <div>
      <form className="py-8 px-12 flex gap-6 flex-col shadow-xl shadow-akaccent-300">
        <div className="flex justify-between">
          <h2 className="text-2xl font-macondo text-akaccent-600">
            Update user details
          </h2>
          <button
            type="button"
            onClick={() => setIsOpenProfile(false)}
            className="p-1 rounded shadow-xl"
          >
            X
          </button>
        </div>
        {/* <div className="space-y-2">
          <label htmlFor="fullname">Address</label>
          <input
            defaultValue="address"
            name="address"
            className="px-5 py-3 w-full shadow-sm disabled:cursor-not-allowed disabled:text-gray-400"
          />
        </div> */}

        <div className="space-y-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            // defaultValue="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Your phone number"
            className="px-5 py-3 w-full shadow-sm disabled:cursor-not-allowed disabled:text-gray-400"
            required
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <button className="border p-2 rounded shadow-xl">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfileUpdate;
