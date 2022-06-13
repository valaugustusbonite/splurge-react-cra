import { useEffect } from 'react';
import { fetchingUserFromGoogle, userReceived, errorInFetch, logout, userEmpty } from 'features/login';

import { Newsfeed } from 'features/newsfeed';
import { authListener } from 'utils/firebase/firebase';
import { useAppDispatch } from 'common/custom_hooks/use_app_dispatch';
import { Route, Routes } from 'react-router';
import { ProtectedRoute } from 'common/components/ProtectedRoute';
import storage from 'utils/storage'


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {

    const listener = authListener((user) => {
      try {
        dispatch(fetchingUserFromGoogle());

        if (!user) {
          dispatch(userEmpty())
        }

        if (user) { 
          dispatch(userReceived({
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            accessToken: user.accessToken,
          }));

          if ('token' in localStorage) {
            storage.clearToken();
          }

          storage.setToken(user.accessToken);


          if (process.env.REACT_APP_ENVIRONMENT !== 'production') {
            console.log(`token: ${storage.getToken()}`);
          }
        }
        
      } catch (error) {
        dispatch(logout());
        dispatch(errorInFetch({ error }))
      }
    });

    return listener;
  }, [dispatch]);

  
  return <>
    <div>
      <Routes>
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
