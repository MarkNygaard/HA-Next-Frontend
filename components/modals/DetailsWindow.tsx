import React from 'react';
import RoomDetails from '@components/buttons/room-details';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';
import Brightness from '@components/properties/brightness';
import ColorTemp from '@components/properties/color-temp';
import Climate from '@components/properties/climate';

export default function DetailsWindow({
  open,
  onClose,
  allEntities,
  entity_name,
  entity_id,
  climate_id,
}) {
  if (!open) return null;

  // TODO set rightside div to change when focus changes on lights (tab on buttom half)
  return (
    <div className="fixed inset-0 overflow-y-auto p-4 pl-[9vh] pt-[3vh] sm:pl-[3vh] sm:pt-[10vh]">
      <div
        className="fixed inset-0 bg-gray-500/25 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative mx-auto flex min-h-[50%] max-w-4xl justify-center rounded-xl bg-zinc-200 ring-1 ring-black/5 dark:bg-darkmode-bg">
        {allEntities.length ? (
          <div className="flex w-full flex-col sm:flex-row">
            <div className="flex w-full flex-col p-4 sm:w-3/5">
              {allEntities.length <= 2 ? (
                <p className="grid grid-cols-2 justify-center gap-3 text-center text-zinc-900 sm:grid-cols-2">
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
              ) : (
                <p className="grid grid-cols-4 justify-center gap-3 text-center text-zinc-900 sm:grid-cols-2">
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
              )}
            </div>
            <div className="flex justify-center sm:w-2/5">
              <div className="flex w-full items-center px-3 pb-3 sm:py-4">
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
              </div>
            </div>
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
    </div>
  );
}
