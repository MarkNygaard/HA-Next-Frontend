import React from 'react';
import { StatusModal } from 'components/modals';
import DetailsWindow from '@components/details/details';

import Layout from '@components/layout';

const Home: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen">
      <main className="container">
        <div className="flex w-screen">
          <Layout>
            test
            <DetailsWindow />
          </Layout>
          <StatusModal />
        </div>
      </main>
    </div>
  );
};

export default Home;
