import OnboardingScreens from './components/OnboardingScreens';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import { useContext } from 'react';
import { FirstTimeLoginContext } from './contextAPI/context';


/**
 * The main App component that defines the routes for the application.
 * @returns {JSX.Element} The JSX element representing the App component.
 */
function App() {
  // Consume the FirstTimeLoginContext and destructure it if it's not null
  const [firstTimeLogin] = useContext(FirstTimeLoginContext) ?? [
    true,
    () => {},
  ];

  return (
    <>
      {firstTimeLogin && <OnboardingScreens />}

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
