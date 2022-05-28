export enum AuthStateStatus {
  idle,
  loading,
  success,
  error
}

export type User = {
  id?: string,
  name?: string,
  username: string,
  firstName?: string,
  lastName?: string,
  photoURL?: string,
  value: number,
  hasDefaultProfilePircutre: boolean,
  followersCount: number,
  followingCount: number,
  ownedMomentsCount: number,
  createdMomentsCount: number,
  ownedUsersCount: number,
  purchasedByCount: number
}

export interface AuthState {
  readonly status: AuthStateStatus;
  readonly data?: any | null;
  readonly error?: any;
}

export enum AuthActionTypes {
  SIGNIN_WITH_GOOGLE = 'REGISTER_WITH_GOOGLE',
}