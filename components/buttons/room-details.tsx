import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { BsLightbulbFill } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
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
    <div className="m-4 flex flex-col rounded-lg bg-tile-bg p-4 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600">
      <button className="flex-col" onClick={toggle} type="button">
        <div className="flex justify-end">
          {state === 'on' ? (
            <div className="text-2xl text-yellow-300">
              <Icon symbol="Lightbulb" />
            </div>
          ) : (
            <div className="text-2xl text-white dark:text-black/50">
              <Icon symbol="Lightbulb" />
            </div>
          )}
        </div>
        <div className="flex justify-center px-12 text-6xl text-tile-svg dark:text-black/50">
          <Icon symbol={entity_icon} />
        </div>
      </button>
      <button className="flex w-full flex-col">
        <div className="flex w-full justify-center pt-3 text-xl font-normal text-white dark:text-black">
          {entity_name}
        </div>
        <div className="flex w-full justify-center text-xs font-thin text-white"></div>
      </button>
    </div>
  );
}

export default RoomDetails;