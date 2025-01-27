import React from 'react';
import {OnboardingLayout} from '@src/presentation/constants/layouts';

const GetTimelyUpdates = ({
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
      title="Get Timely Updates"
      illustration={require('../../../assets/images/onboarding/timely-updates.png')}
      description="Receive reminders, tips, and progress updates to stay on track"
      totalSteps={totalSteps}
      currentStep={currentStep}
      onNext={onNext}
      onSkip={onSkip}
    />
  );
};

export default GetTimelyUpdates;
