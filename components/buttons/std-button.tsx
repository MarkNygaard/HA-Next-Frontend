import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { useState, useEffect } from 'react';
import { DetailsWindow } from '@components/modals';
import Icon from '@components/icons';
import { RoomDetailConfigurations } from 'configurations/room-details';

const StandardButton = ({
  entity_name,
  entity_id,
  entity_icon,
  temp_id,
  humid_id,
}) => {
  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const temp = useEntity(temp_id);
  const humid = useEntity(humid_id);

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

  const allEntities = RoomDetailConfigurations;

  return (
    <div className="flex max-w-xs p-2">
      <div className="m-4 flex-col rounded-lg bg-tile-bg p-4 hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600">
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
        <button
          className="flex w-full flex-col"
          onClick={() => setIsOpen(true)}
        >
          {state === 'on' ? (
            <div className="flex w-full justify-center pt-3 text-xl font-normal text-white dark:text-black">
              {entity_name}
            </div>
          ) : (
            <div className="flex w-full justify-center pt-3 text-xl font-normal text-white dark:text-black/50">
              {entity_name}
            </div>
          )}
          <div className="flex w-full justify-center divide-x text-xs font-thin text-white dark:text-black">
            {temp?.state ? <div className="px-2">{temp?.state} °C</div> : <></>}
            {humid?.state ? <div className="px-2">{humid?.state}%</div> : <></>}
          </div>
        </button>
        {allEntities.map((allEntities: any) => {
          return allEntities.entity_name === entity_name ? (
            <DetailsWindow
              key={allEntities.entity_name}
              allEntities={allEntities.Lights}
              open={isOpen}
              onClose={() => setIsOpen(false)}
            />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default StandardButton;
