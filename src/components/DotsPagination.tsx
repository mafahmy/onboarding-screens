import { OnboardingScreenType } from '../types';

interface Props {
  onboardingScreens: OnboardingScreenType[];
  index: number;
}
/**
 * The DotsPagination component that displays a series of dots for pagination.
 * Each dot represents an onboarding screen, and the current screen's dot is highlighted.
 *
 * @param {Object} props - The props for the DotsPagination component.
 * @param {Array} props.onboardingScreens - An array of onboarding screen objects.
 * @param {number} props.index - The index of the current onboarding screen.
 *
 * @returns {JSX.Element} The JSX element representing the DotsPagination component.
 */
const DotsPagination = ({ onboardingScreens, index }: Props) => {
  return (
    // Container for the dots
    <div className='text-center'>
      {/* Map over the onboardingScreens array to create a dot for each screen */}
      {onboardingScreens.map((_, idx) => (
        // Each dot is a div element with a unique key
        // The dot's color is determined by whether it represents the current screen (index === idx)
        <div
          key={idx}
          className={`relative inline-block h-2 w-2 rounded-full cursor-pointer mx-2 my-4 ${index === idx ? 'bg-slate-700' : 'bg-slate-500'}`}
        ></div>
      ))}
    </div>
  );
};

export default DotsPagination;
