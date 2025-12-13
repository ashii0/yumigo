import { Link } from "react-router-dom";
import LoginForm from "../features/user/login/loginform";

function Login() {
  return (
    <div className="flex justify-center mt-30">
      <div className="w-full rounded-lg max-w-md p-5 bg-white dark:bg-akslatebluegray">
        <LoginForm />

        <hr className="mt-5" />

        <div className="flex justify-center mt-5">
          <Link
            to={"/signup"}
            className="border p-2 rounded-lg hover:text-akcharcoal hover:from-akaccent-600 hover:via-akaccent-600 hover:to-akaccent-600 bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80"
          >
            Create new account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
