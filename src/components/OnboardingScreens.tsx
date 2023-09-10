import { useState, useContext } from 'react';
import OnboardingScreen from './OnboardingScreen';
import { RenderingConditionContext } from '../contextAPI/context';
import { OnboardingScreenType } from '../types';

interface Props {
  screens: OnboardingScreenType[];
}
/**
 * The OnboardingScreens component that displays a series of onboarding screens.
 * @returns {JSX.Element} The JSX element representing the OnboardingScreens component.
 */
const OnboardingScreens = ({ screens }: Props) => {
  // State to keep track of the current onboarding screen index
  const [index, setIndex] = useState(0);
  // State to keep track of touch events
  const [touchDown, setTouchDown] = useState(false);
  const [startX, setStartX] = useState(0);
  // Consume the FirstTimeLoginContext and destructure it if it's not null
  const [firstTimeLogin, setFirstTimeLogin] = useContext(
    RenderingConditionContext
  ) ?? [true, () => {}];

  // Event handler for touch start events
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchDown(true);
    setStartX(e.touches[0].clientX);
  };
  //Event handler for touch end events
  const handletouchEnd = () => {
    setTouchDown(false);
  };
  // Event handler for touch move events
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const threshold = 5;
    if (touchDown) {
      if (e.touches[0].clientX < startX - threshold) {
        if (screens.length - 1 === index) {
          setFirstTimeLogin(false);
        }
        setIndex((prevIndex) => prevIndex + 1);
      } else if (e.touches[0].clientX > startX + threshold) {
        if (index === 0) {
          return;
        }
        setIndex((prevIndex) => prevIndex - 1);
      }
      setTouchDown(false);
    }
  };
  // Event handler for button click events
  const handleClick = () => {
    if (screens.length - 1 === index) {
      setFirstTimeLogin(false);
    }
    setIndex((previusIndex) => previusIndex + 1);
  };
  const handleBackClick = () => {
    if (index === 0) {
      return;
    }
    setIndex((previusIndex) => previusIndex - 1);
  };

  return (
    <>
      {firstTimeLogin && (
        <>
          <div className='fixed h-screen w-screen bg-[#fbc1d7] z-10 top-0 opacity-50'></div>
          <div className='fixed top-0 right-0 left-0 z-20 flex justify-center'>
            <div
              className=' max-w-md h-screen my-0 mx-auto flex justify-center items-center overflow-x-hidden'
              onTouchStart={handleTouchStart}
              onTouchEnd={handletouchEnd}
              onTouchMove={handleTouchMove}
            >
              <div
                className='flex justify-center items-center rounded-2xl'
                style={screens[index].backgroundStyle}
              >
                <div
                  className='flex h-full'
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: 'transform 0.5s ease-in-out',
                  }}
                >
                  {screens.map((screen) => (
                    <OnboardingScreen
                      key={screen.title}
                      image={screen.image}
                      title={screen.title}
                      description={screen.description}
                      index={index}
                      handleClick={handleClick}
                      handleBackClick={handleBackClick}
                      onboardingScreens={screens}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OnboardingScreens;
