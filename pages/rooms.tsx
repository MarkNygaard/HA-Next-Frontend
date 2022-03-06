import React from 'react';
import OfficeLight from '@components/rooms/office';
import Hallway from '@components/rooms/hallway';
import Kitchen from '@components/rooms/kitchen';
import LivingRoom from '@components/rooms/living-room';
import Bedroom from '@components/rooms/bedroom';
import WalkInCloset from '@components/rooms/walk-in-closet';
import Bathroom from '@components/rooms/bathroom';
import Layout from '@components/layout';
import AllLights from '@components/buttons/all-lights';
import Office from '@components/rooms/office';
import StandardButton from '@components/buttons/std-button';
import { rooms } from 'configurations/rooms';

export default function Rooms() {
  const allEntities = rooms;

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex max-w-5xl flex-wrap">
          {allEntities.map((allEntities: any) => {
            return (
              <StandardButton
                key={allEntities.entity_id}
                entity_name={allEntities.entity_name}
                entity_id={allEntities.entity_id}
                entity_icon={allEntities.entity_icon}
                temp_id={allEntities.temp_id}
                humid_id={allEntities.humid_id}
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
