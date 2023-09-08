import { useState } from 'react';
import { onboardingScreens } from '../data/oboardingScreens';
import OnboardingScreen from './OnboardingScreen';
import { useNavigate } from 'react-router-dom';

const OnboardingScreens = () => {
  const [index, setIndex] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseDown(true);
    console.log('mah');
    setStartX(e.clientX);
  };
  const handleMouseUp = () => {
    setMouseDown(false);
    console.log('moh');
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (mouseDown) {
      if (e.clientX < startX) {
        if (onboardingScreens.length - 1 === index) {
          navigate('/home');
        }
        setIndex((prevIndex) => prevIndex + 1);
      }
      setMouseDown(false);
      console.log('meh');
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
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className='h-full sm:h-5/6 rounded-2xl'
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
