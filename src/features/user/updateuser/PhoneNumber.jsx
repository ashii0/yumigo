function PhoneNumber({ phone, setPhone }) {
  return (
    <div>
      <label className="px-2 font-bold" htmlFor="phone">
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Your phone number"
        className="px-5 py-3 w-full shadow-md border border-akaccent-200 dark:border-akslatebluegray"
        value={phone}
        onChange={(e) => {
          const value = e.target.value;
          setPhone(value);

          const validphone = /^\d{10}$/.test(value);

          e.target.setCustomValidity(
            validphone ? "" : "Provide valid phone number (10 digits)"
          );
        }}
      />
    </div>
  );
}

export default PhoneNumber;
