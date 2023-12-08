import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { currentUser } = useSelector(state => state.user);

    if (currentUser) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;