# 🧪 Testing

## Testing priority
Although there is benefit in having a high test coverage, time will still play a huge role in the development process. That is why it is important to have a testing priority to know which are needed to test, and maybe add later on.

Testing priority:

- High value features
      * Features that bring the most impact/revenue for the app.
      * Example: Amazon.com, features like being able to view products, buy a product, etc.
- Edge cases in high value features
- Things that are easy to break
- Basic React component testing
      * Components that are present in high value features
      * Components that are heavily reused across different areas of the app
      * User interactions
      * Conditional Rendering
      * Utils / Hooks

## Unit tests
Unit testing, as the naming already reveals is a type of testing where units of an application are being tested in isolation. You should write unit tests for shared components and functions that are used throughout the entire application as they might be used in different scenarios which might be difficult to reproduce in integration tests.

## Integration Tests

Integration testing is a method of testing multiple parts of an application at once. Most of your tests should be integration tests, as these will give you the most benefits and confidence for your invested effort. Unit tests on their own don't guarantee that your app will work even if those tests pass, because the relationship between the units might be wrong. You should test different features with integration tests.

## End-to-End(E2E)

End-To-End Testing is a testing method where an application is tested as a complete entity. Usually these tests consist of running the entire application with the frontend and the backend in an automated way and verifying that the entire system works. It is usually written in the way the application should be used by the user.