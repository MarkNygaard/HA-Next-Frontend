import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { useState, useEffect } from 'react';
import { BsLightbulbFill } from 'react-icons/bs';

const AllLights = () => {
  const entity_id = 'light.all_lights';

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
    <div className="max-w-5-xl flex p-2">
      <button
        className="m-4 flex w-full items-center justify-center rounded-lg bg-tile-bg p-4 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600"
        onClick={toggle}
        type="button"
      >
        <div className="px-3 text-xl font-normal text-white dark:text-black">
          All Lights
        </div>
        <div className="flex">
          {state === 'on' ? (
            <div className="text-2xl text-yellow-300">
              <BsLightbulbFill />
            </div>
          ) : (
            <div className="text-2xl text-white dark:text-black/50">
              <BsLightbulbFill />
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default AllLights;