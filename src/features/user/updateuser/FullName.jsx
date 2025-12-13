function FullName({ fullname, setFullname }) {
  return (
    <div className="space-y-1">
      <label className="px-2 font-bold" htmlFor="fullname">
        Full name
      </label>
      <input
        type="text"
        id="fullName"
        className="px-5 py-3 w-full shadow-md border border-akaccent-200 dark:border-akslatebluegray"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
    </div>
  );
}

export default FullName;
