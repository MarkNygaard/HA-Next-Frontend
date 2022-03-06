import React from 'react';
import RoomDetails from '@components/buttons/room-details';

export default function DetailsWindow({ open, onClose, allEntities }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto p-4 pt-[10vh]">
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative mx-auto flex max-w-xl flex-col justify-center rounded-xl bg-zinc-200 shadow-2xl ring-1 ring-black/5 dark:bg-luke-bg">
        <p className="flex flex-wrap justify-center py-4 text-center text-zinc-900">
          {allEntities.map((allEntities: any) => {
            return (
              <RoomDetails
                entity_name={allEntities.entity_name}
                entity_id={allEntities.entity_id}
                entity_icon={allEntities.entity_icon}
              />
            );
          })}
        </p>
      </div>
    </div>
  );
}
