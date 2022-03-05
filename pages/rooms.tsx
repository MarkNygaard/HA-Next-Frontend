import React from 'react';
import OfficeLight from '@components/rooms/office-light';
import Hallway from '@components/rooms/hallway';
import Kitchen from '@components/rooms/kitchen';
import LivingRoom from '@components/rooms/living-room';
import Bedroom from '@components/rooms/bedroom';
import WalkInCloset from '../components/rooms/walk-in-closet';
import Bathroom from '../components/rooms/bathroom';
import Layout from '@components/layout';
import AllLights from '@components/rooms/all-lights';

export default function Rooms() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex max-w-5xl flex-wrap">
          <Hallway />
          <Kitchen />
          <LivingRoom />
          <Bedroom />
          <WalkInCloset />
          <OfficeLight />
          <Bathroom />
        </div>
        <div>
          <AllLights />
        </div>
      </div>
    </Layout>
  );
}
