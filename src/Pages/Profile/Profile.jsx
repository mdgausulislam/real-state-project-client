import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../firebase/firebase.config";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutUserFailure, signOutUserStart, signOutUserSuccess, updateUserFailure, updateUserStart, updateUserSuccess } from "../../redux/user/userSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Profile = () => {
    const fileRef = useRef(null);
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings, setUserListings] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);

    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            () => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await axios.post(`/api/user/update/${currentUser._id}`, formData);
            console.log(res.data);
            if (res.data.success === false) {
                dispatch(updateUserFailure(res.data.message));
                return;
            }
            dispatch(updateUserSuccess(res.data))
            setUpdateSuccess(true);

        } catch (error) {
            dispatch(updateUserFailure(error.message));
        }
    }

    const handleDeleteUser = async () => {
        try {
            dispatch(deleteUserStart());
            const res = await axios.delete(`/api/user/delete/${currentUser._id}`)
            if (res.data.success === false) {
                dispatch(deleteUserFailure(res.data.message));
                return;
            }
            dispatch(deleteUserSuccess(res.data));
            navigate('/signup');
        } catch (error) {
            dispatch(deleteUserFailure(error.message));
        }
    };

    const handleSignOut = async () => {
        try {
            dispatch(signOutUserStart());
            const res = await fetch('/api/auth/signout');
            const data = await res.json();
            if (data.success === false) {
                dispatch(signOutUserFailure(data.message));
                return;
            }
            dispatch(signOutUserSuccess(data));
            navigate('/login')
        } catch (error) {
            dispatch(signOutUserFailure(error.message));
        }
    };

    const handleShowListings = async () => {
        try {
            setShowListingsError(false);
            const res = await axios.get(`/api/user/listings/${currentUser._id}`);
            if (res.data.success === false) {
                setShowListingsError(true);
                return;
            }
            setUserListings(res.data);
        } catch (error) {
            setShowListingsError(true);
        }
    };

    const handleListingDelete = async (listingId) => {
        try {
            const res = await fetch(`/api/listing/delete/${listingId}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            if (data.success === false) {
                console.log(data.message);
                return;
            }

            setUserListings((prev) =>
                prev.filter((listing) => listing._id !== listingId)
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="lg:mx-96 md:mx-48 min-h-screen bg-base-200">
            <div className="hero-content lg:px-16 md:px-12 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Profile!</h1>
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <input
                                onChange={(e) => setFile(e.target.files[0])} type="file"
                                ref={fileRef}
                                hidden
                                accept="image/*" />
                            <img
                                onClick={() => fileRef.current.click()}
                                src={formData.avatar || currentUser.avatar}
                                alt='profile'
                                className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
                            />
                            <p className='text-sm self-center'>
                                {fileUploadError ? (
                                    <span className='text-red-700'>
                                        Error Image upload (image must be less than 2 mb)
                                    </span>
                                ) : filePerc > 0 && filePerc < 100 ? (
                                    <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
                                ) : filePerc === 100 ? (
                                    <span className='text-green-700'>Image successfully uploaded!</span>
                                ) : (
                                    ''
                                )}
                            </p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">UserName</span>
                            </label>
                            <input
                                onChange={handleChange}
                                type="text"
                                placeholder="UserName..."
                                name="userName"
                                defaultValue={currentUser.userName}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                onChange={handleChange}
                                type="email"
                                placeholder="email"
                                name="email"
                                defaultValue={currentUser.email}
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
                                name="password"
                                onChange={handleChange}
                                className="input input-bordered"
                            // required
                            />
                        </div>
                        <button
                            disabled={loading}
                            className="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                        >
                            {loading ? 'loading' : 'Update'}
                        </button>
                        {/* <button

                            className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
                        >
                            Create Listing
                        </button> */}
                        <Link
                            className='bg-blue-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
                            to={'/create-listing'}
                        >
                            Create Listing
                        </Link>
                    </form>
                    <p className="text-red-700 self-center text-sm">{error ? error : ''}</p>
                    <p className='text-green-700 mt-5'>
                        {updateSuccess ? 'User is updated successfully!' : ''}
                    </p>
                    <div className="flex justify-between mx-12 my-4">
                        <button onClick={handleDeleteUser} className="text-red-700 font-bold cursor-pointer">Delete Acount</button>
                        <button onClick={handleSignOut} className="text-green-700 font-bold">Sign Out</button>
                    </div>

                    <button onClick={handleShowListings} className='text-green-700 w-full'>
                        Show Listings
                    </button>
                    <p className='text-red-700 mt-5'>
                        {showListingsError ? 'Error showing listings' : ''}
                    </p>

                    {userListings && userListings.length > 0 && (
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-center mt-7 text-2xl font-semibold'>
                                Your Listings
                            </h1>
                            {userListings.map((listing) => (
                                <div
                                    key={listing._id}
                                    className='border rounded-lg p-3 flex justify-between items-center gap-4'
                                >
                                    <Link to={`/listing/${listing._id}`}>
                                        <img
                                            src={listing.imageUrls[0]}
                                            alt='listing cover'
                                            className='h-16 w-16 object-contain'
                                        />
                                    </Link>
                                    <Link
                                        className='text-slate-700 font-semibold  hover:underline truncate flex-1'
                                        to={`/listing/${listing._id}`}
                                    >
                                        <p>{listing.name}</p>
                                    </Link>

                                    <div className='flex flex-col item-center'>
                                        <button
                                            onClick={() => handleListingDelete(listing._id)}
                                            className='text-red-700 uppercase'
                                        >
                                            Delete
                                        </button>
                                        <Link to={`/update-listing/${listing._id}`}>
                                            <button className='text-green-700 uppercase'>Edit</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;