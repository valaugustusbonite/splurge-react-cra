import { LoginScreen } from 'features/login'
import { render, screen, describe, fireEvent } from 'utils/test_utils/test_utils'
import { mockFirebase } from 'utils/test_utils/mocks'

describe('Test <LoginScreen />', () => {

  test('Renders the login screen and allows the user to login when clicking the "Sign in with Google" button', async () => {
    render({
      ui: <LoginScreen />
    });
    expect(screen.getByRole('button', {name: /Sign in with Google/i}));

    fireEvent.click(screen.getByRole('button', {name: /Sign in with Google/i}));
    mockFirebase();
    expect(mockFirebase).toBeCalled();
  })
  
})