import React from 'react';
import {OnboardingLayout} from '@src/presentation/constants/layouts';

const PlanYourBudget = ({
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
      title="Plan Your Budget"
      illustration={require('../../../assets/images/onboarding/plan-budget.png')}
      description="Set monthly budgets and track spending across categories"
      totalSteps={totalSteps}
      currentStep={currentStep}
      onNext={onNext}
      onSkip={onSkip}
    />
  );
};

export default PlanYourBudget;
