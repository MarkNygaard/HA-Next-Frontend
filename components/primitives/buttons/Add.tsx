import { Prisma } from '@prisma/client';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import AddRoomForm from '../forms/AddRoomForm';
import Icon from '../icons';

export default function Add({ room }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [rooms, setRooms] = useState(room);

  return (
    <div className="flex items-center p-3 text-2xl text-blue-500 hover:cursor-pointer group-hover:text-tile-bg sm:text-2xl sm:group-hover:text-white xl:text-3xl">
      <div onClick={() => setIsOpen(true)}>
        <Icon symbol="Plus" />
      </div>
      <AnimatePresence>
        {isOpen && (
          <AddRoomForm
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
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
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
