import { useState } from "react";
import SpinnerMini from "../../../components/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    //console.log("Email:", email + "Password:", password);

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center p-2">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col p-2">
          <label className="block mb-1" htmlFor="Email Address">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isPending}
            className="border p-2 rounded-lg"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col p-2">
          <label className="block mb-1" htmlFor="Password">
            Password
          </label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
            className="border p-2 rounded-lg"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col p-2 mt-4">
          <button
            type="submit"
            disabled={isPending}
            className="border p-2 rounded-lg hover:text-akcharcoal hover:from-akaccent-600 hover:via-akaccent-600 hover:to-akaccent-600 bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80"
          >
            {!isPending ? "Login" : <SpinnerMini />}
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
