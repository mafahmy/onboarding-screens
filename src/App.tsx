import OnboardingScreens from './components/OnboardingScreens';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import { RenderingConditionProvider } from './contextAPI/context';
import { onboardingScreens } from './data/oboardingScreens';

/**
 * The main App component that defines the routes for the application.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
function App() {
  return (
    <>
      <RenderingConditionProvider>
        <OnboardingScreens screens={onboardingScreens} />
      </RenderingConditionProvider>

      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the onboarding screens */}
        <Route path='/' element={<Home />} />
        {/* Route for the home screen */}
        {/* <Route path='/home' element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
