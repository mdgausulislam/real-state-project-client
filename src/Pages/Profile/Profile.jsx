import { useSelector } from "react-redux";


const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className="lg:mx-96 md:mx-48 max-h-screen bg-base-200">
            <div className="hero-content lg:px-16 md:px-12 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Profile!</h1>
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
                    <form className="card-body">
                        <div className="form-control">

                            <img src={currentUser.avatar} alt="profile" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input
                                type="text"
                                placeholder="UserName..."
                                name="userName"

                                className="input input-bordered"
                                required
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
                                name="password"

                                className="input input-bordered"
                                required
                            />
                        </div>
                        <button

                            className="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                        >
                            Update
                        </button>
                        <button

                            className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                        >
                            Create Listing
                        </button>
                    </form>
                    <div className="flex justify-between mx-12 my-4">
                        <h1 className="text-red-700 font-bold">Delete Acount</h1>
                        <h2 className="text-green-700 font-bold">Sign Out</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;