import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import MyContainer from "../../Components/MyContainer";
import formBg from "../../assets/wave-haikei.png";
import Spinner from "../../Components/Spinner";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Password validation
  const validatePassword = password => {
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter.";
    return "";
  };

  const firebaseError = err => {
    const message = err?.code || err?.message || String(err);
    if (message.includes("auth/email-already-in-use"))
      return "This email is already registered.";
    if (message.includes("auth/invalid-email"))
      return "Please provide a valid email address.";
    if (message.includes("auth/weak-password")) return "Password is too weak.";
    return "Registration failed. Please try again.";
  };

  // Handle Registration
  const handleRegister = async e => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const photoURL = form.photoURL.value.trim();
    const password = form.password.value;

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      toast.error(passwordError);
      setLoading(false);
      return;
    }

    try {
      await createUser(email, password);

      const profileData = { displayName: name };
      if (photoURL) profileData.photoURL = photoURL;

      await updateUserProfile(profileData.displayName, profileData.photoURL);
      toast.success("Registration successful!");
      form.reset();
      navigate("/");
    } catch (err) {
      const friendly = firebaseError(err);
      setError(friendly);
      toast.error(friendly);
    } finally {
      setLoading(false);
    }
  };

  // Google Login
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
      <title>CarEase/Register</title>
      <MyContainer>
        <div className="min-h-[80vh] flex justify-center items-center px-4">
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold text-center text-[#19191B] mb-6">
              Register an Account
            </h2>

            <form
              onSubmit={handleRegister}
              className="space-y-5"
              noValidate>
              {/* Name */}
              <div>
                <label className="block font-medium text-[#19191B] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#e81c2e] outline-none"
                />
              </div>

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
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#e81c2e] outline-none"
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="block font-medium text-[#19191B] mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photoURL"
                  required
                  placeholder="Profile picture link "
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#e81c2e] outline-none"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block font-medium text-[#19191B] mb-1">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter password"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:border-[#e81c2e] outline-none"
                />
                <span
                  className="absolute right-6 top-4/6 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm font-medium">{error}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full relative overflow-hidden py-3 rounded-lg font-semibold 
                bg-[#e81c2e] text-white border-0 shadow-none transition-all duration-300 
                group hover:text-[#e81c2e]"
                disabled={loading}>
                <span className="relative z-10">
                  {loading ? "Registering..." : "Register"}
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

            {/* Google Sign In */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 
            py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
              disabled={loading}>
              <FaGoogle className="text-[#e81c2e]" />
              <span className="font-medium text-[#19191B]">
                Continue with Google
              </span>
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-[#e81c2e] hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Register;
