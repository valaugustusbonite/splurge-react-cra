import React, { useEffect } from 'react';
import { LoginScreen, fetchingUserFromGoogle, userReceived, errorInFetch, logout } from 'features/login';

import { Newsfeed } from 'features/newsfeed';
import { authListener } from 'utils/firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch } from 'common/custom_hooks/use_app_dispatch';
import { useAppSelector } from 'common/custom_hooks/use_app_selector';
import { Route, Routes, useNavigate } from 'react-router';
import { ProtectedRoute } from 'common/components/ProtectedRoute';


const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const data = useAppSelector((state) => state.authReducer.data);

  console.log(data?.accessToken ?? '');

  useEffect(() => {

    const listener = authListener((user) => {
      try {

        console.log(user);

        if (user) {
          dispatch(userReceived({
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            accessToken: user.accessToken,
          }));
        }
        
      } catch (error) {
        dispatch(logout());
        dispatch(errorInFetch(error))
      }
    });

    return listener;
  }, [dispatch]);

  
  return <>
    <div>
      {/* <LoginScreen /> */}
      {/* <Newsfeed /> */}  
      <Routes>
        {/* <Route element={<LoginScreen />} path='/login'/> */}
        <Route path='/' element={  
          <ProtectedRoute >
            <Newsfeed />
          </ProtectedRoute>
        }  />
      </Routes>
    </div>
  </>
}

export default App;
