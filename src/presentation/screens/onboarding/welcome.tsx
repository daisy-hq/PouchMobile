import React from 'react';
import {OnboardingLayout} from '@src/presentation/constants/layouts';

const Welcome = ({
  currentStep,
  totalSteps,
  onNext,
  onSkip,
}: {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onSkip: () => void;
}) => {
  return (
    <OnboardingLayout
      title="Welcome to Pouch!"
      illustration={require('../../../assets/images/onboarding/welcome.png')}
      description="Track your finances, save smarter, and achieve your goals effortlessly.
      "
      totalSteps={totalSteps}
      currentStep={currentStep}
      onNext={onNext}
      onSkip={onSkip}
    />
  );
};

export default Welcome;
