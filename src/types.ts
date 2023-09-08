export interface OnboardingScreenType {
    image: string;
    title: string;
    description: string;
    backgroundStyle: {
        backgroundColor: string;
    };
    buttonText: string;
    buttonAction: () => void;
}