import React from 'react';
import {OnboardingLayout} from '@src/presentation/constants/layouts';

const AchieveYourGoals = ({
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
      title="Achieve Your Goals"
      illustration={require('../../../assets/images/onboarding/achieve-goals.png')}
      description="Save for what matters with smart goal-setting tools"
      totalSteps={totalSteps}
      currentStep={currentStep}
      onNext={onNext}
      onSkip={onSkip}
    />
  );
};

export default AchieveYourGoals;
