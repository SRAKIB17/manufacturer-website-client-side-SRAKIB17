import axios from "axios";
import { signOut } from "firebase/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";


const useCheckAdmin = () => {


    const { data, isLoading, error } = useQuery('checkAdmin', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/admin`, {
        headers: {
            'authorize': `token ${localStorage.getItem('tokenVerify')}`
        }
    }));
    const admin = data?.data
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        if (error.response.status !== 200) {
            signOut(auth)
        }
    }
    return { admin };
};

export default useCheckAdmin;