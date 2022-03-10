import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { useState, useEffect } from 'react';
import Icon from '@components/icons';

const AllLights = ({ entity_name, entity_id }) => {
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
    <div className="flex max-w-5xl p-2">
      <button
        className="m-4 flex w-full items-center justify-center rounded-lg bg-tile-bg p-4 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600"
        onClick={toggle}
        type="button"
      >
        <div className="px-3 text-xl font-normal text-white dark:text-black">
          {entity_name}
        </div>
        <div className="flex">
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
      </button>
    </div>
  );
};

export default AllLights;
