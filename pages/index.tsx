import React from 'react';

import { Page } from '@components/structure';
import Layout from 'ui/layout';
import Navigation from 'ui/navigation';

const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <div className="min-h-screen">
        <main className="container">
          <div className="flex w-screen">
            <Navigation />
            <Layout />
          </div>
        </main>
      </div>
    </Page>
  );
};

export default Home;
