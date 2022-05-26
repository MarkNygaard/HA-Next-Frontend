import React from 'react';
import { gql, GraphQLClient } from 'graphql-request';
import { callService } from 'home-assistant-js-websocket';
import { useAuth, useHass } from '@hooks';
import { useEntity } from '@hooks';
import Layout from '@components/layout';
import Icon from '@components/primitives/icons';
import EntityType from '@components/entity-types/check-type';

export default function Settings({ allSettings }) {
  const { connection } = useHass();
  const { logout } = useAuth();

  return (
    <Layout>
      <div className="w-full flex-col">
        <div className="flex h-screen w-full flex-col p-4 md:w-2/4 xl:w-1/3">
          {allSettings.map((Setting: any) => {
            return (
              <div className="pt-2" key={Setting.id}>
                <div className="py-2">
                  <EntityType setting={Setting} />
                </div>
                <div className=""></div>
              </div>
            );
          })}
          <div className="pt-4">
            <div className="rounded-lg bg-zinc-300/50 p-2">
              <button onClick={() => logout(connection)}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const query = gql`
  query {
    allSettings {
      id
      settingName
      icon {
        iconName
      }
      entity {
        id
        entityName
        entityId
        entityType {
          entityTypeId
        }
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
