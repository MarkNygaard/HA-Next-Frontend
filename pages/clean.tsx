import Layout from '@components/layout';
import { Prisma, PrismaClient, Room } from '@prisma/client';
import React, { useState } from 'react';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const rooms: Room[] = await prisma.room.findMany();
  return {
    props: {
      allRooms: rooms,
    },
  };
}

async function saveRoom(room: Prisma.RoomCreateInput) {
  const response = await fetch('/api/rooms', {
    method: 'POST',
    body: JSON.stringify(room),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

const SomeComponent = ({ allRooms }) => {
  const [rooms, setRooms] = useState<Room[]>(allRooms);

  return (
    <div className="flex w-screen">
      <Layout>
        <div className="flex h-full w-full flex-col items-center">
          {/* <AddRoomForm
            onSubmit={async (data, e) => {
              const parsedData = {
                ...data,
                sorting: parseInt(data.sorting),
              };
              try {
                await saveRoom(parsedData);
                setRooms([...rooms, parsedData]);
                e.target.reset();
              } catch (err) {
                console.log(err);
              }
            }}
          /> */}
        </div>
      </Layout>
    </div>
  );
};

export default SomeComponent;
