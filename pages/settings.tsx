import React, { useState, useEffect, useCallback } from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import { callService } from 'home-assistant-js-websocket';
import { useAuth, useHass } from '@hooks';
import { useEntity } from '@hooks';
import Layout from '@components/layout';
import Icon from '@components/icons';
import SettingButton from '@components/buttons/settings';

export default function Settings({ allSettings }) {
  const entity = useEntity(allSettings.entityId);

  const { logout } = useAuth();
  const { connection } = useHass();

  return (
    <Layout>
      <div className="flex flex-col divide-y divide-solid divide-zinc-800">
        <div className="py-3">
          <div className="grid gap-5">
            {allSettings.map((Setting: any) => {
              return (
                <SettingButton
                  key={Setting.entityId}
                  entity_name={Setting.entityName}
                  entity_id={Setting.entityId}
                  entity_icon={Setting.icon.iconName}
                />
              );
            })}
          </div>
          <button onClick={() => logout(connection)}>Log Out</button>
        </div>
      </div>
    </Layout>
  );
}

const query = gql`
  query {
    allSettings {
      entityName
      entityId
      icon {
        iconName
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });
  const allSettings = await graphQLClient.request(query);
  return {
    props: allSettings,
  };
}
