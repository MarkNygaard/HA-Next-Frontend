import React from 'react';
import { StatusModal } from 'components/modals';
import { gql, GraphQLClient } from 'graphql-request';
import StandardButton from '@components/buttons/std-button';
import AllLights from '@components/buttons/all-lights';
import Layout from '@components/layout';

export default function Home({ allRooms, allLight }) {
  return (
    <div className="min-h-screen">
      <main className="container">
        <div className="flex w-screen">
          <Layout>
            <div className="flex w-full max-w-sm flex-col justify-center lg:max-w-xl xl:max-w-3xl">
              <div className="xl-gap-6 grid grid-cols-2 gap-4 p-4 lg:grid-cols-3 xl:grid-cols-4">
                {allRooms.map((Room: any) => {
                  return (
                    <StandardButton
                      key={Room.entityId}
                      entity_name={Room.entityName}
                      entity_id={Room.entityId}
                      entity_icon={Room.icon.iconName}
                      temp_id={Room.tempId}
                      humid_id={Room.humidId}
                      radiat_id={Room.radiatId}
                      window_id={Room.windowId}
                      door_id={Room.doorId}
                      roomDetails={Room.subLight}
                    />
                  );
                })}
              </div>
              <div>
                <AllLights
                  entity_name={allLight.entityName}
                  entity_id={allLight.entityId}
                />
              </div>
            </div>
          </Layout>
          <StatusModal />
        </div>
      </main>
    </div>
  );
}

const query = gql`
  query {
    allRooms(orderBy: sorting_ASC) {
      entityName
      entityId
      tempId
      humidId
      radiatId
      windowId
      doorId
      icon {
        iconName
      }
      subLight {
        entityName
        entityId
        icon {
          iconName
        }
      }
    }
    allLight {
      entityName
      entityId
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
  const allRooms = await graphQLClient.request(query);
  return {
    props: allRooms,
  };
}
