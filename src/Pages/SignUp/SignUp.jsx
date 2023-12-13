import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use e.target.name to capture input field names
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("/api/auth/signup", formData);
      console.log(res.data);

      if (res.data.success === false) {
        setError(res.data.message);
        setLoading(true);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className="lg:mx-96 md:mx-48 min-h-screen bg-base-200">
      <div className="hero-content lg:px-16 md:px-12 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
        </div>
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">UserName</span>
              </label>
              <input
                type="text"
                placeholder="UserName..."
                name="userName"
                onChange={handleChange}
                className="input input-bordered"
              // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                className="input input-bordered"
              // required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password" // Ensure the name attribute is set to "password"
                onChange={handleChange}
                className="input input-bordered"
              // required
              />
            </div>
            <button
              disabled={loading}
              className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "loading..." : "Sign Up"}
            </button>
          </form>
          <div className="text-center mb-5">
            <p>
              Have an account?
              <span className="link link-hover text-blue-600">
                <Link to="/login">Log in</Link>
              </span>
            </p>
          </div>
          {error && (<p className="text-red-500 mt-5">{error}</p>)}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;