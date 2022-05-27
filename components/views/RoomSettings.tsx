import { SlideUpModal } from '@components/modals';
import React from 'react';
import { Disclosure } from '@headlessui/react';

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
                    <div className="flex py-2 text-lg font-medium">
                      {room.entityName}
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel>
                    <div className="rounded-sm bg-zinc-200">
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
                        </div>
                        <div className="col-span-2 flex flex-col justify-start">
                          <span className="flex">{room.entityName}</span>
                          <span className="flex">{room.entityId}</span>
                          <span className="flex">{room.icon}</span>
                          <span className="flex">{room.tempId}</span>
                          <span className="flex">{room.humidId}</span>
                          <span className="flex">{room.climateId}</span>
                          <span className="flex">{room.windowId}</span>
                          <span className="flex">{room.doorId}</span>
                        </div>
                      </div>
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
