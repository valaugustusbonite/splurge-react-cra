import { createAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"

export const signInWithGoogle = async (dispatch: Dispatch<any>, type: string) => {
  try {
    dispatch(createAction(type))
  } catch (error) {
    console.log(error);
  }
}