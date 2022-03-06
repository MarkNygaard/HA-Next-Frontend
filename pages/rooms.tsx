import React from 'react';
import Layout from '@components/layout';
import AllLights from '@components/buttons/all-lights';
import StandardButton from '@components/buttons/std-button';
import { rooms } from 'configurations/rooms';

export default function Rooms() {
  const allRooms = rooms;

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex max-w-5xl flex-wrap">
          {allRooms.map((Room: any) => {
            return (
              <StandardButton
                key={Room.entity_id}
                entity_name={Room.entity_name}
                entity_id={Room.entity_id}
                entity_icon={Room.entity_icon}
                temp_id={Room.temp_id}
                humid_id={Room.humid_id}
              />
            );
          })}
        </div>
        <div>
          <AllLights />
        </div>
      </div>
    </Layout>
  );
}
