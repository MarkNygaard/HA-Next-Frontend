import React from 'react';
import RoomDetails from '@components/primitives/buttons/RoomDetails';
import { Tab } from '@headlessui/react';
import Brightness from '@components/properties/Brightness';
import ColorTemp from '@components/properties/ColorTemp';
import Climate from '@components/properties/Climate';
import { SlideUpModal, CenterModal } from '@components/modals';

export default function DetailsWindow({
  onClose,
  allEntities,
  entity_name,
  entity_id,
  climate_id,
}) {
  if (!open) return null;

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <SlideUpModal heading={false} add={false} onClose={onClose}>
      <Tab.Group>
        {allEntities.length ? (
          <div className="flex w-full flex-col sm:flex-row">
            <div className="flex w-full flex-col p-4 pt-2 sm:w-3/5 sm:pt-4">
              {allEntities.length <= 4 ? (
                <Tab.List>
                  <p className="grid grid-cols-2 justify-center gap-3 text-center text-zinc-900 sm:grid-cols-2">
                    <Tab
                      key={entity_id}
                      className="col-span-2 flex flex-col justify-center rounded-lg bg-tile-bg p-2 hover:bg-tile-bg-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-500/50 dark:hover:bg-zinc-600 sm:p-4"
                    >
                      <div className="flex w-full justify-center py-2 text-lg font-normal leading-4 text-white dark:text-black sm:text-xl sm:leading-none">
                        {entity_name}
                      </div>
                    </Tab>
                    {allEntities.map((allEntities: any) => {
                      return (
                        <RoomDetails
                          key={allEntities.entityId}
                          entity_name={allEntities.entityName}
                          entity_id={allEntities.entityId}
                          entity_icon={allEntities.icon}
                        />
                      );
                    })}
                  </p>
                </Tab.List>
              ) : (
                <Tab.List>
                  <p className="grid grid-cols-3 justify-center gap-3 text-center text-zinc-900 sm:grid-cols-2">
                    <Tab
                      key={entity_id}
                      className="col-span-3 flex flex-col justify-center rounded-lg bg-tile-bg p-2 hover:bg-tile-bg-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-500/50 dark:hover:bg-zinc-600 sm:col-span-2 sm:p-4"
                    >
                      <div className="flex w-full justify-center text-sm font-normal leading-4 text-white dark:text-black sm:text-xl sm:leading-none">
                        {entity_name}
                      </div>
                    </Tab>
                    {allEntities.map((allEntities: any) => {
                      return (
                        <RoomDetails
                          key={allEntities.entityId}
                          entity_name={allEntities.entityName}
                          entity_id={allEntities.entityId}
                          entity_icon={allEntities.icon}
                        />
                      );
                    })}
                  </p>
                </Tab.List>
              )}
            </div>
            <Tab.Panels className="flex justify-center sm:w-2/5">
              <Tab.Panel
                className={classNames(
                  'flex w-full items-center px-3 pb-3 focus:outline-none sm:py-4'
                )}
              >
                <div className="flex h-full w-full flex-col justify-center rounded-md bg-zinc-400/70 p-5">
                  <div className="text-3xl sm:pt-4 sm:text-4xl ">
                    {entity_name}
                  </div>
                  <div className="flex flex-col divide-y divide-solid divide-zinc-900 sm:pb-4">
                    <ColorTemp entity_id={entity_id} />
                    <Brightness entity_id={entity_id} />
                    <Climate entity_id={climate_id} />
                  </div>
                </div>
              </Tab.Panel>
              {allEntities.map((allEntities: any) => (
                <Tab.Panel
                  key={allEntities.entityId}
                  className={classNames(
                    'flex w-full items-center px-3 pb-3 sm:py-4'
                  )}
                >
                  <div className="flex h-full w-full flex-col justify-center rounded-md bg-zinc-400/70 p-5">
                    <div className="text-3xl sm:pt-4 sm:text-4xl ">
                      {allEntities.entityName}
                    </div>
                    <div className="flex flex-col divide-y divide-solid divide-zinc-900 sm:pb-4">
                      <ColorTemp entity_id={allEntities.entityId} />
                      <Brightness entity_id={allEntities.entityId} />
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        ) : (
          <div className="flex w-full justify-center sm:w-2/5">
            <div className="flex items-center py-5 sm:w-10/12 standalone:w-full standalone:px-3">
              <div className="flex h-full w-full flex-col justify-center rounded-md bg-zinc-400/70 p-5">
                <div className="pt-4 text-4xl ">{entity_name}</div>
                <div className="flex flex-col divide-y divide-solid divide-zinc-900 pb-4">
                  <ColorTemp entity_id={entity_id} />
                  <Brightness entity_id={entity_id} />
                  <Climate entity_id={climate_id} />
                </div>
              </div>
            </div>
          </div>
        )}
      </Tab.Group>
    </SlideUpModal>
  );
}
