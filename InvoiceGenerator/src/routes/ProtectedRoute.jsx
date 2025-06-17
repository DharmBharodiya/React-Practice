import {Navigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const { user } = useAuth();// this will return the user from the context, which actually gets the data from the localstorage, with the item called "loggedInUser"

    return user ? children : <Navigate to="/login" />;
}
export default ProtectedRoute;