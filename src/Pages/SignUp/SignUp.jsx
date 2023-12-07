import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="lg:mx-96 md:mx-48 max-h-screen bg-base-200">
      <div className="hero-content lg:px-16 md:px-12 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up!</h1>
        </div>
        <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">UserName</span>
              </label>
              <input type="email" placeholder="Username..." className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div className="text-center mb-5">
            <p>Have an account?<span className="link link-hover text-blue-600"><Link to='/login'>Log in</Link></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
