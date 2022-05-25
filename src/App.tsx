import React, { useEffect } from 'react';
import { LoginScreen, fetchingUserFromGoogle, userReceived, errorInFetch } from 'features/login';

import { Newsfeed } from 'features/newsfeed';
import { authListener } from 'utils/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from 'common/custom_hooks/use_app_dispatch';
import { useAppSelector } from 'common/custom_hooks/use_app_selector';


const App = () => {
  const { data } = useAppSelector((state) => state.authReducer) as any;
  const dispatch = useAppDispatch();


  useEffect(() => {

    const listener = authListener((user) => {
      try {
        if (!user) return; 

        dispatch(userReceived(user));


        console.log(data);
        
      } catch (error) {
        dispatch(errorInFetch(error))
      }
    });

    return listener;
  }, []);

  
  return <>
    <div>
      <LoginScreen />
      {/* <Newsfeed /> */}
    </div>
  </>
}

export default App;
