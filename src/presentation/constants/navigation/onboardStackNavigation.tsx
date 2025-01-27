import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@src/presentation/screens/onboarding/splashScreen';
import Welcome from '@src/presentation/screens/onboarding/welcome';
import PlanYourBudget from '@src/presentation/screens/onboarding/plan-budget';
import AchieveYourGoals from '@src/presentation/screens/onboarding/achieve-goals';
import GetTimelyUpdates from '@src/presentation/screens/onboarding/timely-updates';

const Stack = createNativeStackNavigator();

// const steps = [
//     { name: 'Welcome', component: Welcome },
//     { name: 'PlanYourBudget', component: PlanYourBudget },
//     { name: 'AchieveGoals', component: AchieveYourGoals },
//     { name: 'GetTimelyUpdates', component: GetTimelyUpdates },
//   ];

const OnboardStackNavigation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const totalSteps = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    setCurrentStep(totalSteps - 1);
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {currentStep === 0 && (
        <Stack.Screen
          name="Welcome"
          children={props => (
            <Welcome
              {...props}
              currentStep={currentStep}
              totalSteps={totalSteps}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          )}
          options={{headerShown: false}}
        />
      )}
      {currentStep === 1 && (
        <Stack.Screen
          name="PlanYourBudget"
          children={props => (
            <PlanYourBudget
              {...props}
              currentStep={currentStep}
              totalSteps={totalSteps}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          )}
          options={{headerShown: false}}
        />
      )}
      {currentStep === 2 && (
        <Stack.Screen
          name="AchieveGoals"
          children={props => (
            <AchieveYourGoals
              {...props}
              currentStep={currentStep}
              totalSteps={totalSteps}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          )}
          options={{headerShown: false}}
        />
      )}
      {currentStep === 3 && (
        <Stack.Screen
          name="GetTimelyUpdates"
          children={props => (
            <GetTimelyUpdates
              {...props}
              currentStep={currentStep}
              totalSteps={totalSteps}
              onNext={handleNext}
              onSkip={handleSkip}
            />
          )}
          options={{headerShown: false}}
        />
      )}

      {/* {steps.map((step, index) => (
        <Stack.Screen
          key={step.name}
          name={step.name}
          component={step.component}
          initialParams={{
            currentStep,
            totalSteps,
            onNext: handleNext,
            onSkip: handleSkip,
          }}
          options={{headerShown: false}}
        />
      ))} */}
    </Stack.Navigator>
  );
};

export default OnboardStackNavigation;
