import React from 'react';
import RoomDetails from '@components/buttons/room-details';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';

export default function DetailsWindow({
  open,
  onClose,
  entity_name,
  entity_id,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto p-4 pt-[10vh]">
      <div
        className="fixed inset-0 bg-gray-500/25 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative mx-auto flex min-h-[50%] max-w-4xl justify-center rounded-xl bg-zinc-200 ring-1 ring-black/5 dark:bg-darkmode-bg">
        <div className="flex w-full justify-center sm:w-2/5">
          <div className="flex w-10/12 items-center py-5">
            <div className="flex h-full w-full flex-col justify-center rounded-md bg-zinc-400/70 p-5">
              <div className="pt-4 text-4xl ">{entity_name}</div>
              <div className="flex flex-col divide-y divide-solid divide-zinc-900 pb-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
