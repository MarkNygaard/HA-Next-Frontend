import { SlideUpModal } from '@components/modals';
import { Disclosure } from '@headlessui/react';
import React from 'react';

export default function RoomSettings({ onClose, allRooms }) {
  return (
    <SlideUpModal heading={'Room Settings'} add={true} onClose={onClose}>
      <div className="flex flex-col overflow-y-auto">
        <div className="text-md divide-y-[1px] divide-solid divide-gray-300 px-4 font-medium">
          <div className="pt-2"></div>
          {allRooms.map((room: any) => {
            return (
              <Disclosure key={room.entityId}>
                <div className="flex flex-col justify-start">
                  <Disclosure.Button>
                    <div className="flex py-2 text-lg font-medium dark:text-white">
                      {room.entityName}
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="relative mb-2 rounded-md border-[1px] border-zinc-300 bg-zinc-200 dark:border-zinc-700">
                      <div className="mb-2 grid max-w-md grid-cols-3 p-1 text-sm">
                        <div className="col-span-1 flex flex-col justify-start">
                          <span className="flex">Entity Name:</span>
                          <span className="flex">Entity ID:</span>
                          <span className="flex">Icon:</span>
                          {room.tempId && (
                            <span className="flex">Temperature:</span>
                          )}
                          {room.humidId && (
                            <span className="flex">Humidity:</span>
                          )}
                          {room.climateId && (
                            <span className="flex">Climate:</span>
                          )}
                          {room.windowId && (
                            <span className="flex">Window Sensor:</span>
                          )}
                          {room.doorId && (
                            <span className="flex">Door Open:</span>
                          )}
                          <span className="flex">UID:</span>
                        </div>
                        <div className="col-span-2 flex flex-col justify-start">
                          <span className="flex">{room.entityName}</span>
                          <span className="flex">{room.entityId}</span>
                          <span className="flex">{room.icon}</span>
                          {room.tempId && (
                            <span className="flex">{room.tempId}</span>
                          )}
                          {room.humidId && (
                            <span className="flex">{room.humidId}</span>
                          )}
                          {room.climateId && (
                            <span className="flex">{room.climateId}</span>
                          )}
                          {room.windowId && (
                            <span className="flex">{room.windowId}</span>
                          )}
                          {room.doorId && (
                            <span className="flex">{room.doorId}</span>
                          )}
                          <span className="flex">{room.id}</span>
                        </div>
                      </div>
                      <button
                        // Delete Room on click
                        onClick={async () => {
                          try {
                            await deleteRoom(room.id);
                          } catch (err) {
                            console.log(err);
                          }
                        }}
                        className="absolute top-0 right-0 m-1 rounded-md border-[1px] border-zinc-300 bg-zinc-50 px-2 hover:border-zinc-400 hover:shadow-md"
                      >
                        Delete
                      </button>
                    </div>
                  </Disclosure.Panel>
                </div>
              </Disclosure>
            );
          })}
          <div className="pb-2"></div>
        </div>
      </div>
    </SlideUpModal>
  );
}

async function deleteRoom(room) {
  const response = await fetch('/api/rooms', {
    method: 'DELETE',
    body: JSON.stringify(room),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}
