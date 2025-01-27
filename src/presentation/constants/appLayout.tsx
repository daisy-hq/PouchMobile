import React, {useState} from 'react';
import AuthStackNavigation from './navigation/authStackNavigation';
import RootTabNavigation from './navigation/rootTabNavigation';
import Onboarding from '../screens/onboarding/onboarding';

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <RootTabNavigation />
  ) : (
    <Onboarding />
    // <AuthStackNavigation onLoginSuccess={handleLoginSuccess} />
  );
};

export default AppLayout;
