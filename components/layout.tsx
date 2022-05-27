import Navigation from 'components/navigation';
import React from 'react';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className="flex min-h-screen w-full flex-col sm:flex-row"
    >
      <Navigation />
      <div className="relative flex h-full w-full items-start justify-center bg-gray-100 dark:bg-darkmode-bg sm:items-center standalone:fixed">
        <div className="relative flex">
          <div className="relative max-w-lg">
            <div className="absolute left-0 -bottom-20 animate-blob rounded-full bg-purple-300 opacity-50 blur-xl filter dark:mix-blend-overlay md:h-64 md:w-64 xl:h-96 xl:w-96"></div>
            <div className="animation-delay-2000 absolute -right-4 -bottom-20 animate-blob rounded-full bg-yellow-300 opacity-50 blur-xl filter dark:mix-blend-overlay md:h-64 md:w-64 xl:h-96 xl:w-96"></div>
            <div className="animation-delay-4000 absolute -top-28 -left-40 animate-blob rounded-full bg-pink-300 opacity-50 blur-xl filter dark:mix-blend-overlay md:h-64 md:w-64 xl:h-96 xl:w-96"></div>
          </div>
        </div>
        <div className="max-w-8xl flex h-full w-full flex-wrap items-center justify-center overflow-auto sm:absolute standalone:fixed standalone:h-screen standalone:pt-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
