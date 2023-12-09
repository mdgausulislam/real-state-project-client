import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../firebase/firebase.config";

const Profile = () => {
    const fileRef = useRef(null);
    const { currentUser } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined);
    const [filePerc, setFilePerc] = useState(0);
    const [fileUploadError, setFileUploadError] = useState(false);
    const [formData, setFormData] = useState({});
    // const [updateSuccess, setUpdateSuccess] = useState(false);
    // const [showListingsError, setShowListingsError] = useState(false);
    // const [userListings, setUserListings] = useState([]);
    // const dispatch = useDispatch();
    // console.log(filePerc);
    // console.log(fileUploadError);
    // console.log(formData);

    // firebase storage
    // allow read;
    // allow write: if
    // request.resource.size < 2 * 1024 * 1024 &&
    // request.resource.contentType.matches('image/.*')

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
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };
    return (
        <div className="lg:mx-96 md:mx-48 max-h-screen bg-base-200">
            <div className="hero-content lg:px-16 md:px-12 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Profile!</h1>
                </div>
                <div className="card shrink-0 shadow-2xl bg-base-100 w-full">
                    <form className="card-body">
                        <div className="form-control">
                            <input
                                onChange={(e) => setFile(e.target.files[0])} type="file"
                                ref={fileRef}
                                hidden
                                accept="image/*" />
                            <img onClick={() => fileRef.current.click()} className="cursor-pointer" src={formData.avatar || currentUser.avatar} alt="profile" />
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