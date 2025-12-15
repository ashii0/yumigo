import { useEffect } from "react";
import { useAddress } from "./useAddress";
import { IoLocationOutline } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";

function Address({ address, setAddress }) {
  const { address: newAddress, fetchAddress } = useAddress();

  function handleClick(e) {
    e.preventDefault();
    fetchAddress();
  }

  useEffect(() => {
    if (newAddress) setAddress(newAddress);
  }, [setAddress, newAddress]);

  return (
    <div className="space-y-1">
      <label className="px-2 font-bold" htmlFor="address">
        Address
      </label>
      <div className="flex justify-center">
        <input
          className="grow sm:p-3 p-0.5 shadow-md border border-akaccent-200 dark:border-akslatebluegray"
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        {/* {error && <p className=" text-red-400">{error}</p>} */}
        <span className="sm:ml-3 ml-1 p-1">
          <button
            className="shadow-md dark:shadow-sm shadow-akaccent-600 ring ring-akaccent-600/35 sm:p-3 p-1 text-akaccent-600"
            onClick={handleClick}
          >
            <FaLocationArrow size={24} />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Address;
