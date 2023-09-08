import { OnboardingScreenType } from '../types';

interface Props {
  onboardingScreens: OnboardingScreenType[];
  index: number;
}

const DotsPagination = ({ onboardingScreens, index }: Props) => {
  return (
    <div className='text-center'>
      {onboardingScreens.map((_, idx) => (
        <div
          key={idx}
          className={`relative inline-block h-2 w-2 rounded-full cursor-pointer mx-2 my-4 ${index === idx ? 'bg-slate-700' : 'bg-slate-500'}`}
        ></div>
      ))}
    </div>
  );
};

export default DotsPagination;
