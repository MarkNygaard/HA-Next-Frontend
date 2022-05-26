import React from 'react';
import { StatusModal } from 'components/modals';
import { gql, GraphQLClient } from 'graphql-request';
import StandardButton from '@components/primitives/buttons/StandardButton';
import AllLights from '@components/primitives/buttons/all-lights';
import Layout from '@components/layout';

export default function Home({ allRooms, allLight }) {
  return (
    <div className="flex w-screen">
      <Layout>
        <div className="flex w-full max-w-xs flex-col justify-center sm:max-w-sm md:max-w-xl xl:max-w-3xl">
          <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {allRooms.map((Room: any) => {
              return (
                <StandardButton
                  key={Room.entityId}
                  entity_name={Room.entityName}
                  entity_id={Room.entityId}
                  entity_icon={Room.icon.iconName}
                  temp_id={Room.tempId}
                  humid_id={Room.humidId}
                  climate_id={Room.climateId}
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
  );
}

const query = gql`
  query {
    allRooms(orderBy: sorting_ASC) {
      entityName
      entityId
      tempId
      humidId
      climateId
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
