import OnboardingScreens from './components/OnboardingScreens';
import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<OnboardingScreens />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
