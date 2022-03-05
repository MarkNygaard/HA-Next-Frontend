import React from 'react';
import OfficeLight from '@components/rooms/office-light';
import Hallway from '@components/rooms/hallway';
import Kitchen from '@components/rooms/kitchen';
import LivingRoom from '@components/rooms/living-room';
import Bedroom from '@components/rooms/bedroom';
import WalkInCloset from './rooms/walk-in-closet';
import Bathroom from './rooms/bathroom';

export default function Rooms() {
  return (
    <>
      <div className="max-w-50 absolute flex max-h-screen max-w-6xl flex-wrap px-12">
        <Hallway />
        <Kitchen />
        <LivingRoom />
        <Bedroom />
        <WalkInCloset />
        <OfficeLight />
        <Bathroom />
      </div>
    </>
  );
}
