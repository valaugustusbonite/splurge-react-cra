import { signInWithGooglePopup } from "utils/firebase/firebase"

const mockSignWithGooglePopup = () => {
     return 'response from signInWithGooglePopup';
}

export const mockFirebase = jest.fn(mockSignWithGooglePopup) ;