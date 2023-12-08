import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../../firebase/firebase.config';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const saveUser = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL,
            }
            const res = await axios.post("/api/auth/google", saveUser);
            dispatch(signInSuccess(res.data));
            navigate('/');
            console.log(res.data);
            console.log(result);
        } catch (error) {
            console.log('could not sign in with google', error);
        }
    };
    return (
        <div className="my-5 text-center">
            <div className="divider"></div>
            <button onClick={handleGoogleClick} type='button' className="btn btn-square bg-red-500 text-white font-bold">
                G
            </button>
        </div>
    );
};
export default SocialLogin;