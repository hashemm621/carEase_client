import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import MyContainer from "../../Components/MyContainer";
import formBg from "../../assets/wave-haikei.png";
import { Eye, EyeOff } from "lucide-react";

const Signin = () => {
  const { signinUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Handle Email/Password Login
  const handleLogin = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;

    try {
      await signinUser(email, password);
      toast.success("Login successful!");
      form.reset();
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      let message = err?.code || err?.message || String(err);
      if (message.includes("auth/invalid-email"))
        message = "Invalid email format.";
      else if (message.includes("auth/user-not-found"))
        message = "No user found with this email.";
      else if (message.includes("auth/wrong-password"))
        message = "Incorrect password.";
      else message = "Login failed. Please try again.";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-in
  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      console.error("Google sign-in:", err);
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: `url(${formBg})` }}>
      <title>CareEase/Signin</title>
      <MyContainer>
        <div className="min-h-[80vh] flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-center text-[#19191B] mb-6">
              User Login
            </h2>

            <form
              onSubmit={handleLogin}
              className="space-y-5">
              {/* Email */}
              <div>
                <label className="block font-medium text-[#19191B] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1E90FF] outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block font-medium text-[#19191B] mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#1E90FF] outline-none"
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>
                <p className="text-right mt-1">
                  <Link
                    to="/forget-password"
                    className="text-sm text-[#1E90FF] hover:underline">
                    Forget Password?
                  </Link>
                </p>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full relative overflow-hidden py-3 rounded-lg font-semibold 
                  bg-[#1E90FF] text-white border-0 shadow-none transition-all duration-300 
                  group hover:text-[#1E90FF]"
                disabled={loading}>
                <span className="relative z-10">
                  {loading ? "Logging in..." : "Login"}
                </span>
                <span
                  className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-300 
                  group-hover:w-full z-0"
                  aria-hidden="true"
                />
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="grow h-px bg-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">or</span>
              <div className="grow h-px bg-gray-300"></div>
            </div>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 
              py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
              disabled={loading}>
              <FaGoogle className="text-[#1E90FF]" />
              <span className="font-medium text-[#19191B]">
                Continue with Google
              </span>
            </button>

            {/* Register Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#1E90FF] hover:underline font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Signin;
