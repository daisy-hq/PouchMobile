import React, {useState} from 'react';
import AuthStackNavigation from './navigation/authStackNavigation';
import RootTabNavigation from './navigation/rootTabNavigation';
import OnboardStackNavigation from './navigation/onboardStackNavigation';

const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <RootTabNavigation />
  ) : (
    <OnboardStackNavigation />
    // <AuthStackNavigation onLoginSuccess={handleLoginSuccess} />
  );
};

export default AppLayout;
