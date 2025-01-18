import React, {useState} from 'react';
import AuthStackNavigation from './navigation/authStackNavigation';
import RootTabNavigation from './navigation/rootTabNavigation';

// TODO: Review navigation and refactor authentication routing
const AppLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return isAuthenticated ? <RootTabNavigation /> : <AuthStackNavigation />;
};

export default AppLayout;
