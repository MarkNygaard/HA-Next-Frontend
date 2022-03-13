import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';

function RoomDetails({ entity_id, entity_name, entity_icon }): JSX.Element {
  const { connection } = useHassStore();

  const entity = useEntity(entity_id);

  const [state, setState] = useState<any>(entity?.state || 'off');

  useEffect(() => {
    setState((s) => entity?.state || s);
  }, [entity]);

  const turnOn = () => {
    setState('on');
    callService(connection, 'light', 'turn_on', { entity_id });
  };

  const turnOff = () => {
    setState('off');
    callService(connection, 'light', 'turn_off', { entity_id });
  };

  const toggle = () => {
    state === 'on' ? turnOff() : turnOn();
  };

  return (
    <div className="flex flex-col rounded-lg bg-tile-bg p-4 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600">
      <button
        className="flex w-full flex-col justify-center"
        onClick={toggle}
        type="button"
      >
        <div className="flex w-full justify-end">
          {state === 'on' ? (
            <div className="text-lg text-yellow-300 sm:text-2xl">
              <Icon symbol="Lightbulb" />
            </div>
          ) : (
            <div className="text-lg text-white dark:text-black/50 sm:text-2xl">
              <Icon symbol="Lightbulb" />
            </div>
          )}
        </div>
        <div className="flex w-full justify-center text-4xl text-tile-svg dark:text-black/50 sm:text-6xl">
          <Icon symbol={entity_icon} />
        </div>
      </button>
      <button className="flex w-full flex-col">
        <div className="flex w-full justify-center pt-3 text-base font-normal text-white dark:text-black sm:text-xl">
          {entity_name}
        </div>
        <div className="flex w-full justify-center text-xs font-thin text-white"></div>
      </button>
    </div>
  );
}

export default RoomDetails;
