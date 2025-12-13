function Select({ options, value, onChange }) {
  return (
    <select
      // className="py-3.5 px-5 rounded-sm shadow-sm"
      className="p-3 rounded-sm shadow-sm border border-akaccent-200"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
