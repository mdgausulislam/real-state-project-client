import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../../redux/user/userSlice";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const LogIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post("/api/auth/login", formData);
      console.log(res.data);

      if (res.data.success === false) {
        dispatch(signInFailure(res.data.message));
        return;
      }
      dispatch(signInSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="lg:mx-96 md:mx-48 min-h-screen bg-base-200">
      <div className="hero-content lg:px-16 md:px-12 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log in!</h1>
        </div>
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
          <form onSubmit={handleSubmit} className="card-body">
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
                required
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
                required
              />
            </div>
            <button
              disabled={loading}
              className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
            >
              {loading ? "loading..." : "Log In"}
            </button>
          </form>
          <div className="text-center mb-2">
            <p>
              Do not have an account?
              <span className="link link-hover text-blue-600">
                <Link to="/signup"> Sign up</Link>
              </span>
            </p>
          </div>
          <p className="text-red-700 self-center text-sm">{error ? error : ''}</p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};
export default LogIn;