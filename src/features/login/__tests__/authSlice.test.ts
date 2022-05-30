import authReducer, { resetState, fetchingUserFromGoogle, userReceived, errorInFetch, userEmpty, logout } from 'features/login/slices/auth_slice';
import { AuthStateStatus } from '../types/auth_types';


describe('Test that authSlice is updating auth state properly', () => {

  const initialState = {
    data: null,
    status: AuthStateStatus.idle,
  }

  test('should return initial state', () => {
    expect(authReducer(undefined, resetState)).toEqual({
      ...initialState
    })
  })

  test('should update status state from AuthStateStatus.idle to AuthStateStatus.loading', () => {
    expect(authReducer(initialState, fetchingUserFromGoogle)).toEqual(
      {
        ...initialState,
        status: AuthStateStatus.loading,
      }
    )
  })

  test('should update status from AuthStateStatus.loading to AuthStateStatus.success, and update data object', () => {
    const previousState = {
      status: AuthStateStatus.loading,
      data: null,
    }

    const response = {
      email: 'email@gmail.com',
      username: 'username',
      photoURL: 'imageURL',
    }

    expect(authReducer(previousState, userReceived(response))).toEqual(
      {
        status: AuthStateStatus.success,
        data: response
      }
    );
  })

  test('should update status from AuthStateStatus.loading to AuthStateStatus.success, but no user was given by provider', () => {
    const previousState = {
      status: AuthStateStatus.loading,
      data: null,
    }

    expect(authReducer(previousState, userEmpty)).toEqual(
      {
        status: AuthStateStatus.success,
        data: null
      }
    );
  })

  test('should update status from AuthStateStatus.loading to AuthStateStatus.error when logging in fails', () => {
    const previousState = {
      status: AuthStateStatus.loading,
      data: null,
      error: null,
    }

    const error = new Error();
    
    expect(authReducer(previousState, errorInFetch(error))).toEqual({
      status: AuthStateStatus.error,
      data: null,
      error
    });
  })

  test('should update status from AuthStateStatus.loading to AuthStateStatus.success, and removes the data object, becoming null', () => {
    const previousState = {
      status: AuthStateStatus.loading,
      data: {
        email: 'email@gmail.com',
        username: 'username',
        photoURL: 'imageURL',
      }
    }

    expect(authReducer(previousState, logout)).toEqual({
      ...previousState,
      data: null,
    });
  })
  
});