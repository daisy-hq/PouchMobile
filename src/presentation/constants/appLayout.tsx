import React, {useState} from 'react';
import AuthStackNavigation from './navigation/authStackNavigation';
import RootTabNavigation from './navigation/rootTabNavigation';
import Onboarding from '../screens/onboarding/onboarding';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(true);

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboardingComplete, setIsOnboardingComplete] = useState(true);

  // func to navigate to auth screens after onboarding
  const handleOnboardingComplete = () => {
    setIsOnboardingComplete(true);
  };

  // func to help route to dashboard
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isOnboardingComplete) {
    return <Onboarding onOnboardingComplete={handleOnboardingComplete} />;
  }

  if (!isAuthenticated) {
    return <AuthStackNavigation onLoginSuccess={handleLoginSuccess} />;
  }

  return <RootTabNavigation />;
};

export default AppLayout;
