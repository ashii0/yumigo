import { useEffect } from "react";
import { useAddress } from "./useAddress";

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
          className="grow px-3 py-3 shadow-md border border-akaccent-200 dark:border-akslatebluegray"
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        {/* {error && <p className=" text-red-400">{error}</p>} */}
        <span className="ml-3 p-1">
          <button
            className="shadow-md dark:shadow-sm shadow-akaccent-600 ring ring-akaccent-600/35 p-3 text-akaccent-600"
            onClick={handleClick}
          >
            Get Position
          </button>
        </span>
      </div>
    </div>
  );
}

export default Address;
