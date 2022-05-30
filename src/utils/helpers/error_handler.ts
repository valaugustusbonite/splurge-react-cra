export const errorHandler = (error: any) => {
  if (process.env.REACT_APP_DEVELOPMENT_STAGE != undefined) {
    console.log(error.toString());
  }
}