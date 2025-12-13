function Email({ email }) {
  return (
    <div className="space-y-1">
      <label className="px-2 font-bold" htmlFor="email">
        Email Address
      </label>
      <input
        type="text"
        disabled
        id="email"
        className="px-5 py-3 w-full shadow-md border border-akaccent-200 dark:border-akslatebluegray disabled:cursor-not-allowed disabled:text-gray-400"
        value={email}
      />
    </div>
  );
}

export default Email;
