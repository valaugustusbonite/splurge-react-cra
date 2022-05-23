import React, { useEffect } from 'react';
import { LoginScreen } from 'features/login';

import { Newsfeed } from 'features/newsfeed';
import { authListener } from 'utils/firebase/firebase';
import { signInWithGoogleAction } from 'store/auth/auth_actions';
import { useDispatch } from 'react-redux';


const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {

  //   const listener = authListener((user) => {
  //     try {
  //       if (!user) return;

  //       console.log(user);        
  //       dispatch(signInWithGoogleAction(user));
        
  //     } catch (error) {
        
  //     }
  //   });

  //   return listener;
  // }, [dispatch]);

  
  return <>
    <div>
      <LoginScreen />
      {/* <Newsfeed /> */}
    </div>
  </>
}

export default App;
