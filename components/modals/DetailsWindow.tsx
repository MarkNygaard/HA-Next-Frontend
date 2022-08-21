import RoomDetails from '@components/primitives/buttons/RoomDetails';
import Brightness from '@components/properties/Brightness';
import Climate from '@components/properties/Climate';
import ColorTemp from '@components/properties/ColorTemp';
import { Dialog, Tab } from '@headlessui/react';
import React from 'react';

export default function DetailsWindow({
  open,
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

  // TODO set rightside div to change when focus changes on lights (tab on buttom half)
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 overflow-y-auto p-4 pl-[9vh] pt-[3vh] sm:pl-[3vh] sm:pt-[10vh]"
    >
      <Dialog.Overlay
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        onClick={onClose}
      ></Dialog.Overlay>
      <Tab.Group>
        <div className="relative mx-auto flex min-h-[50%] max-w-4xl justify-center rounded-xl bg-zinc-200 ring-1 ring-black/5 dark:bg-darkmode-bg">
          {allEntities.length ? (
            <div className="flex w-full flex-col sm:flex-row">
              <div className="flex w-full flex-col p-4 sm:w-3/5">
                {allEntities.length <= 2 ? (
                  <Tab.List>
                    <p className="grid grid-cols-2 justify-center gap-3 text-center text-zinc-900 sm:grid-cols-2">
                      <Tab
                        key={entity_id}
                        className="col-span-2 flex flex-col justify-center rounded-lg bg-tile-bg p-2 hover:bg-tile-bg-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:bg-zinc-500/50 dark:hover:bg-zinc-600 sm:p-4"
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
                            entity_icon={allEntities.icon.iconName}
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
                            entity_icon={allEntities.icon.iconName}
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
              <div className="flex w-10/12 items-center py-5">
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
        </div>
      </Tab.Group>
    </Dialog>
  );
}
