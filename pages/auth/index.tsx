import React from 'react';
import { useRouter } from 'next/dist/client/router';

import { useDiscovery, useAuth } from '@hooks';

const Auth = () => {
  const router = useRouter();
  const { connect } = useAuth();
  const { instances, loading } = useDiscovery(1);

  if (router.query.auth_callback) router.push('/');

  return (
    <>
      {loading && !instances.length ? (
        <p>Loading...</p>
      ) : (
        <button onClick={() => connect(instances[0])}>
          {instances[0].locationName}
        </button>
      )}
    </>
  );
};

export default Auth;
