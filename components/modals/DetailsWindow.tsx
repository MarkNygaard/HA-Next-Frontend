import React from 'react';
import RoomDetails from '@components/buttons/room-details';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';
import Brightness from '@components/properties/brightness';
import ColorTemp from '@components/properties/color-temp';

export default function DetailsWindow({
  open,
  onClose,
  allEntities,
  entity_name,
  entity_id,
}) {
  if (!open) return null;

  // TODO set rightside div to change when focus changes on lights (tab on buttom half)
  return (
    <div className="fixed inset-0 overflow-y-auto p-4 pt-[10vh]">
      <div
        className="fixed inset-0 bg-gray-500/25 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative mx-auto flex min-h-[50%] max-w-4xl justify-center rounded-xl bg-zinc-200 ring-1 ring-black/5 dark:bg-luke-bg">
        <div className="flex w-full">
          <div className="flex w-3/5 flex-col">
            <p className="flex flex-wrap justify-center py-4 text-center text-zinc-900">
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
          </div>
          <div className="flex w-2/5 justify-center">
            <div className="flex w-10/12 items-center py-5">
              <div className="flex h-full w-full flex-col justify-center rounded-md bg-zinc-400/70 p-5">
                <div className="pt-4 text-4xl ">{entity_name}</div>
                <div className="flex flex-col divide-y divide-solid divide-zinc-900 pb-4">
                  <ColorTemp entity_id={entity_id} />
                  <Brightness entity_id={entity_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
