import React, { useState } from 'react';

export default function DetailsWindow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        isOpen ? 'hidden' : 'fixed inset-0 overflow-y-auto p-4 pt-[40vh]'
      }
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
      ></div>
      <div className="relative mx-auto max-w-xl rounded-xl bg-zinc-200 shadow-2xl ring-1 ring-black/5">
        <p className="py-4 text-center text-zinc-900">
          This is a details window
        </p>
      </div>
    </div>
  );
}

/*
"light.living_room_bulb_1",
"light.living_room_bulb_2",
"light.living_room_lightstrip",
"light.living_room_floor_lamp",
"light.corner_lamp" 
*/
