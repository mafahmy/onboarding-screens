import { OnboardingScreenType } from '../types';
import DotsPagination from './DotsPagination';

interface Props {
  image: string;
  title: string;
  description: string;
  onboardingScreens: OnboardingScreenType[];
  index: number;
  handleClick: () => void;
  handleBackClick: () => void;
}
/**
 * The OnboardingScreen component that displays a single onboarding screen.
 * @param {Props} props - The props for the OnboardingScreen component.
 * @returns {JSX.Element} The JSX element representing the OnboardingScreen component.
 */
const OnboardingScreen = ({
  onboardingScreens,
  image,
  title,
  description,
  index,
  handleClick,
  handleBackClick,
}: Props) => {
  return (
    <>
      <div className='flex flex-col justify-evenly items-center min-w-full relative'>
        <div className='h-1/2 relative'>
          <img className='max-h-full w-auto' src={image} alt={title} />
        </div>
        <button
          type='button'
          className='absolute top-5 left-10 text-slate-700'
          onClick={handleBackClick}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='34'
            height='34'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z'
            />
          </svg>
        </button>

        <section className='p-4 flex flex-col justify-evenly items-center flex-wrap h-3/4 w-5/6'>
          <h1 className='text-3xl w-full'>{title}</h1>
          <p className='w-full'>{description}</p>
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
