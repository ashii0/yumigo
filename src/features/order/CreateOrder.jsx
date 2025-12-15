import { useUser } from "../user/login/useUser";

const divClassName =
  "grid sm:grid-cols-[2fr_6fr] xl:grid-cols-[1fr_6fr] 2xl:grid-cols-[1fr_8fr] p-1 rounded-2xl";
const h1ClassName = "text-xl font-macondo px-5 py-1";
const pClassName =
  "px-5 py-1 w-full border border-akaccent-400 rounded-2xl sm:shadow-2xl dark:sm:shadow-md sm:text-base text-sm";

function CreateOrder() {
  const { fullname, email, phone, address } = useUser();
  return (
    <div>
      <div className={divClassName}>
        <h1 className={h1ClassName}>Name</h1>
        <p className={pClassName}>{fullname}</p>
      </div>
      <div className={divClassName}>
        <h1 className={h1ClassName}>Email</h1>
        <p className={`break-all ${pClassName}`}>{email}</p>
      </div>
      <div className={divClassName}>
        <h1 className={h1ClassName}>Phone Number</h1>
        <p className={pClassName}>{phone}</p>
      </div>
      <div className={divClassName}>
        <h1 className={h1ClassName}>Address</h1>
        <p className={pClassName}>{address}</p>
      </div>
    </div>
  );
}

export default CreateOrder;
