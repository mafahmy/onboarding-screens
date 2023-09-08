import { OnboardingScreenType } from '../types';
import DotsPagination from './DotsPagination';
import { useState } from 'react';

interface Props {
  image: string;
  title: string;
  description: string;
  backgroundStyle: React.CSSProperties;
  onboardingScreens: OnboardingScreenType[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const OnboardingScreen = ({
  onboardingScreens,
  image,
  title,
  description,
  backgroundStyle,
  index,
  setIndex,
}: Props) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setIndex((previusIndex) =>
      previusIndex === onboardingScreens.length - 1 ? 0 : previusIndex + 1
    );
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  return (
    <div className='w-96 h-screen overflow-hidden my-0 mx-auto'>
      <div
        className={`h-screen w-auto flex flex-col items-center justify-around ${
          animate ? 'animate-slideLeftRight' : ''
        }`}
        style={backgroundStyle}
      >

        <div>
          <img className='' src={image} alt={title} />
          <section className='p-4 flex flex-col justify-between items-center h-1/2'>
            <h1 className='text-3xl'>{title}</h1>
            <p>{description}</p>
            <DotsPagination
              onboardingScreens={onboardingScreens}
              index={index}
            />
            <button
              type='button'
              className='px-8 py-2 rounded-t border border-gray-900 text-lg'
              onClick={handleClick}
            >
              Skip
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
