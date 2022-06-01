import authReducer from 'features/login/slices/auth_slice'
import { render as rtlRender } from '@testing-library/react'
import { configureStore} from '@reduxjs/toolkit'
import React, { FunctionComponent } from 'react'
import { LoginScreen } from 'features/login'
import { AppProvider } from 'provider/AppProvider'

export type ChildrenProps = {
  children: React.ReactNode,
}

export type RenderInterface = {
  ui: React.ReactElement,
  options?: Record<string, any>,
}

export type JestName = typeof describe.name;

export const customRender = async ({
  ui,
  options
}: RenderInterface = {
  ui: <LoginScreen />,
  options: {
    store: configureStore({ reducer: { authReducer }}),
  }
} ) => {


  return rtlRender(
    ui,
    {
      wrapper: AppProvider as FunctionComponent<unknown>,
      ...options
    }
  )
};

export const customDescribe = async (name: JestName, fn: () => void)  => {
  beforeAll(() => {
    const { getComputedStyle } = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);
  });

  fn();
}

export * from '@testing-library/react'
export { customRender as render, customDescribe as describe }