import React from 'react';
import HassProvider from './HassProvider';
import AuthProvider from './AuthProvider';
import SearchProvider from './SearchProvider';

const AppProvider: React.FunctionComponent = ({ children }) => (
  <div className="flex min-h-screen items-center justify-center">
    <AuthProvider>
      <HassProvider>
        <SearchProvider>{children}</SearchProvider>
      </HassProvider>
    </AuthProvider>
  </div>
);

export default AppProvider;
