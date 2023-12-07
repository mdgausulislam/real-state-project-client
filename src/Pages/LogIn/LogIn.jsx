import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="lg:mx-96 md:mx-48 max-h-screen bg-base-200">
      <div className="hero-content lg:px-16 md:px-12 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Log in!</h1>
        </div>
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" {...register("email")} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" {...register("password", { maxLength: 6 })} className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p>Do not have an account?<span className="link link-hover text-blue-600"><Link to='/signup'> Sign up</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
