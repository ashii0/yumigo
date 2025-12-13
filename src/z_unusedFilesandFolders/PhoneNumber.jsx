import { useEffect, useState } from "react";
import { useUser } from "./useUser";

// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

//this format removes spaces and dashes as well
const isValidPhone = (str) => {
  const cleaned = str.replace(/[\s-]/g, "");
  return /^\+?\d{7,15}$/.test(cleaned);
};

function PhoneNumber() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const { phone: phoneNumber } = useUser();

  useEffect(() => {
    if (phoneNumber) {
      setPhone(phoneNumber);
    }
  }, [phoneNumber]);

  async function handleSavePhone() {
    //   if (!isValidPhone(phone)) {
    //     setError(
    //       "Please give us your correct phone number. We might need it to contact you!"
    //     );
    //     return;
    //   }
    //   setError("");
    //   const { error } = await supabase
    //     .from("profiles")
    //     .update({ phonenumber: phone })
    //     .eq("id", user.id);
    //   if (error) console.error(error);
  }

  return (
    <div className="space-y-2">
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        placeholder="Your phone number"
        className={`px-5 py-3 w-full shadow-sm ${
          error && "border border-red-500"
        }`}
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          if (error) setError("");
        }}
        onBlur={handleSavePhone} //autosave
      />

      {error && (
        <p className="mt-2 mx-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
          {error}
        </p>
      )}
      {/* <div className="flex justify-end p-2">
        <button className="p-1 shadow-sm shadow-akaccent-300">Save</button>
      </div> */}
    </div>
  );
}

export default PhoneNumber;
