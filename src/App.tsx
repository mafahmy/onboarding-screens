import { useState } from 'react';
import OnboardingScreen from './components/OnboardingScreen';
import img1 from './assets/onboarding-img1.png'

function App() {
  const [index, setIndex] = useState(0)
  const onboardingScreens = [
    {
      image: img1,
      title: '1. This the first step of the app',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In inventore, impedit perferendis nisi architecto repellendus.',
      backgroundStyle: {
        backgroundColor: '#b8aaff'
      },
      buttonText: 'Skip',
      buttonAction: () => {
        setIndex(1)
      }
    },
    {
      image: img1,
      title: '2. This the first step of the app',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In inventore, impedit perferendis nisi architecto repellendus.',
      backgroundStyle: {
        backgroundColor: '#b8aaff'
      },
      buttonText: 'Skip',
      buttonAction: () => {
        setIndex(2)
      }
    },
    {
      image: img1,
      title: '3. This the first step of the app',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In inventore, impedit perferendis nisi architecto repellendus.',
      backgroundStyle: {
        backgroundColor: '#b8aaff'
      },
       buttonText: 'Skip',
       buttonAction: () => {
         setIndex(0)
       }
    },
  ]
  

  return (
    <>
      <OnboardingScreen
        image={onboardingScreens[index].image}
        title={onboardingScreens[index].title}
        description={onboardingScreens[index].description}
        backgroundStyle={onboardingScreens[index].backgroundStyle}
        onboardingScreens={onboardingScreens}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}

export default App;
