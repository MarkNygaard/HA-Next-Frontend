import React from 'react';

import Layout from '@components/layout';
import Navigation from '@components/navigation';

const Home: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen">
      <main className="container">
        <div className="flex w-screen">
          <Navigation />
          <Layout />
        </div>
      </main>
    </div>
  );
};

export default Home;
