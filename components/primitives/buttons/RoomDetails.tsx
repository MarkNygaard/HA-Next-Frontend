import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/primitives/icons';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

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
    <div className="flex flex-col rounded-lg bg-tile-bg p-2 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600 sm:p-4">
      <button
        className="flex w-full flex-col justify-center"
        onClick={toggle}
        type="button"
      >
        <div className="relative w-full">
          <div className="absolute top-0 right-0 w-full">
            <div className="flex w-full flex-col">
              <div
                className={classNames('flex justify-end text-xl', {
                  'text-yellow-300': state === 'on',
                  'text-white dark:text-black/50': state === 'off',
                })}
              >
                <Icon symbol="Lightbulb" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center pt-0 text-6xl text-tile-svg dark:text-black/50 sm:text-6xl">
          <Icon symbol={entity_icon} />
        </div>
      </button>
      <Tab
        key={entity_id}
        className="flex w-full flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className="flex w-full justify-center py-2 text-lg font-normal leading-4 text-white dark:text-black sm:pt-2 sm:text-xl sm:leading-none">
          {entity_name}
        </div>
        <div className="flex w-full justify-center text-xs font-thin text-white"></div>
      </Tab>
    </div>
  );
}

export default RoomDetails;
