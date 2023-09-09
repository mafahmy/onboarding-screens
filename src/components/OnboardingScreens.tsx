import { useState } from 'react';
import { onboardingScreens } from '../data/oboardingScreens';
import OnboardingScreen from './OnboardingScreen';
import { useNavigate } from 'react-router-dom';

const OnboardingScreens = () => {
  const [index, setIndex] = useState(0);
  const [touchDown, setTouchDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchDown(true);

    setStartX(e.touches[0].clientX);
  };
  const handletouchEnd = () => {
    setTouchDown(false);
  };
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const threshold = 5;
    if (touchDown) {
      if (e.touches[0].clientX < startX - threshold) {
        if (onboardingScreens.length - 1 === index) {
          navigate('/home');
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

  const navigate = useNavigate();

  const handleClick = () => {
    if (onboardingScreens.length - 1 === index) {
      navigate('/home');
    }
    setIndex((previusIndex) => previusIndex + 1);
  };

  return (
    <>
      <div className='fixed h-screen w-screen bg-[#fbc1d7] z-10 top-0 opacity-50'></div>
      <div className='fixed top-0 right-0 left-0 z-20 flex justify-center'>
        <div
          className='w-96 h-screen my-0 mx-auto sm:flex sm:justify-center sm:items-center overflow-x-hidden'
          onTouchStart={handleTouchStart}
          onTouchEnd={handletouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div
            className='flex justify-center items-center rounded-2xl'
            style={onboardingScreens[index].backgroundStyle}
          >
            <div
              className='flex h-full'
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              {onboardingScreens.map((screen) => (
                <OnboardingScreen
                  key={screen.title}
                  image={screen.image}
                  title={screen.title}
                  description={screen.description}
                  index={index}
                  handleClick={handleClick}
                  onboardingScreens={onboardingScreens}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingScreens;
