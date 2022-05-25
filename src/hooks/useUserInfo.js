import axios from 'axios';
import { useQuery } from 'react-query';

// custom hook to get user info from database
const useUserInfo = email => {
    // integration of react query
    const url = `https://shielded-mountain-18545.herokuapp.com/user?email=${email}`;
    const { data: userInfo, isLoading, refetch, error } = useQuery('userInfo', () => axios.get(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    return [userInfo, isLoading, refetch, error];
}

export default useUserInfo;