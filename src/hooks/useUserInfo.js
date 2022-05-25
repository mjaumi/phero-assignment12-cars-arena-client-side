import axios from 'axios';
import { useQuery } from 'react-query';

// custom hook to get user info from database
const useUserInfo = user => {
    // integration of react query
    const url = `https://shielded-mountain-18545.herokuapp.com/user?email=${user?.email}`;
    const { data: userInfo, isLoading, refetch } = useQuery('userInfo', () => axios.get(url));

    return [userInfo, isLoading, refetch];
}

export default useUserInfo;