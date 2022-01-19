import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

function useUser() {
  // const isLogin = useSelector((state: RootState) => state.user.isLogin);
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  return {
    //isLogin: isLogin,
    userInfo: userInfo,
  };
}

export default useUser;
