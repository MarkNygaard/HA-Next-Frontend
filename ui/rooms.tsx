import React from 'react';
import OfficeLight from 'ui/rooms/office-light';
import Hallway from 'ui/rooms/hallway';
import Kitchen from 'ui/rooms/kitchen';
import LivingRoom from 'ui/rooms/living-room';
import Bedroom from 'ui/rooms/bedroom';
import WalkInCloset from './rooms/walk-in-closet';
import Bathroom from './rooms/bathroom';

export default function Rooms() {
  return (
    <>
      <div className="max-w-50 absolute flex max-h-screen max-w-6xl flex-wrap px-14">
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
