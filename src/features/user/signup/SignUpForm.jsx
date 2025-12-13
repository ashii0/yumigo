import { useState } from "react";
import { useSignup } from "./useSignup";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const { signUp, isPending } = useSignup();
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [errorMsg, setErrorMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    signUp(
      { fullname, email, password, phone },
      {
        onSuccess: () => {
          setTimeout(() => navigate("/login"), 1200);
        },
      }
    );
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full rounded-lg max-w-md p-5 bg-white dark:bg-akslatebluegray">
        <h1 className="text-2xl font-bold mb-4 text-center p-2">
          Create your Yumigo account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex flex-col p-1">
            <label className="block mb-1">Enter your fullname </label>
            <input
              type="text"
              id="fullname"
              placeholder="Your name"
              className="border p-2 rounded-lg"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col p-1">
            <label className="block mb-1">Enter your email </label>
            <input
              type="email"
              className="border p-2 rounded-lg"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col p-1">
            <label htmlFor="phone" className="block mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              //pattern="\d{10}"
              //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              //title="Phone number must be 10 digits"
              placeholder="Your phone number"
              className="border p-2 rounded-lg"
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

          {/* Password */}
          <div className="flex flex-col p-1">
            <label className="block mb-1">Enter your password </label>
            <input
              type="password"
              className="border p-2 rounded-lg"
              placeholder="password"
              required
              minlength="8"
              maxlength="20"
              //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              //title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);

                const strong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
                  value
                );

                e.target.setCustomValidity(
                  strong
                    ? ""
                    : "Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"
                );
              }}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col p-1">
            <label className="block mb-1">Confirm password </label>
            <input
              type="password"
              className="border p-2 rounded-lg"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                e.target.setCustomValidity(
                  e.target.value !== password ? "Passwords do not match" : ""
                );
              }}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center p-2 mt-4">
            <button
              disabled={isPending}
              type="submit"
              className="border p-2 rounded-lg hover:text-akcharcoal hover:from-akaccent-600 hover:via-akaccent-600 hover:to-akaccent-600 bg-linear-to-br from-[#FFE8CD] via-[#F5D2A4] to-[#D4A056]/80 dark:from-[#141C24] dark:via-[#2A3540] dark:to-[#D4A056]/80"
            >
              {isPending ? (
                <span className="animate-spin">Signing up...</span>
              ) : (
                "Create Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;

{
  //   const isValidPhone = (str) => {
  //   const cleaned = str.replace(/[\s-]/g, "");
  //   return /^\+?\d{7,15}$/.test(cleaned);
  // };
  //
  // function validateForm() {
  //   // if (!fullname.trim()) return "Full name is required";
  //   // if (!email.match(/^\S+@\S+\.\S+$/)) return "Please enter a valid email";
  //   //if (!isValidPhone(phone)) return "Please enter the correct phone number!";
  //   //return "Please give us your correct phone number. We might need it to contact you!";
  //   if (password.length < 6) return "Password must be atleast 6 characters";
  //   if (password !== confirmPassword) return "Password do not match";
  //   return "";
  // }
  // async function handleSavePhone() {
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
  // }
  /* <div className="flex flex-col p-1">
            <label className="block mb-1">Enter your password </label>
            <input
              type="password"
              className="border p-2 rounded-lg"
              placeholder="password"
              required
              minlength="8"
              maxlength="20"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"
              value={password}
              onChange={
                (e) => setPassword(e.target.value)
                if (errorMsg.includes("password")) setErrorMsg("");
              }

            />

            {errorMsg.includes("password") && (
              <p className="mt-2 mx-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorMsg}
              </p>
            )} 
          </div> */
}
