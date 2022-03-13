import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { useState, useEffect } from 'react';
import { SettingsWindow } from '@components/modals';
import Icon from '@components/icons';

const SettingButton = ({ entity_name, entity_id, entity_icon }) => {
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-center">
      <div className="w-full flex-col justify-center rounded-xl bg-tile-bg p-1 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600 sm:p-4">
        <button
          className="flex w-full flex-col justify-center"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <div className="flex w-full justify-center text-4xl text-tile-svg dark:text-black/50 sm:text-6xl">
            <Icon symbol={entity_icon} />
          </div>
        </button>
        <button
          className="flex w-full flex-col justify-center"
          onClick={() => setIsOpen(true)}
        >
          <div className="flex w-full justify-center pt-2 text-lg font-normal text-white dark:text-black sm:text-xl">
            {entity_name}
          </div>
        </button>
        <SettingsWindow
          key={entity_id}
          entity_name={entity_name}
          entity_id={entity_id}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default SettingButton;
