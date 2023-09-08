import { OnboardingScreenType } from '../types';
import DotsPagination from './DotsPagination';

interface Props {
  image: string;
  title: string;
  description: string;
  onboardingScreens: OnboardingScreenType[];
  index: number;
  handleClick: () => void;
}

const OnboardingScreen = ({
  onboardingScreens,
  image,
  title,
  description,
  index,
  handleClick,
}: Props) => {
  return (
    <>
      <div className='flex flex-col justify-evenly items-center min-w-full min-h-full '>
        <img className='' src={image} alt={title} />
        <section className='p-4 flex flex-col justify-evenly items-center h-3/4'>
          <h1 className='text-3xl'>{title}</h1>
          <p>{description}</p>
          <DotsPagination onboardingScreens={onboardingScreens} index={index} />
          <button
            type='button'
            className='px-8 py-2 rounded-t border border-gray-900 text-lg'
            onClick={handleClick}
          >
            Skip
          </button>
        </section>
      </div>
    </>
  );
};

export default OnboardingScreen;
