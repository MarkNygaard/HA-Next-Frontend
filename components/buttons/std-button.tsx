import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { DetailsWindow } from '@components/modals';
import Icon from '@components/icons';

const StandardButton = ({
  entity_name,
  entity_id,
  entity_icon,
  temp_id,
  humid_id,
  climate_id,
  window_id,
  door_id,
  roomDetails,
}) => {
  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const temp = useEntity(temp_id);
  const humid = useEntity(humid_id);
  const climate = useEntity(climate_id);
  const window = useEntity(window_id);
  const door = useEntity(door_id);

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
      <div className="flex w-full flex-col rounded-lg bg-tile-bg p-2 backdrop-blur-lg hover:bg-tile-bg-hover dark:bg-zinc-500/50 dark:hover:bg-zinc-600 sm:p-4">
        <button
          className="flex w-full flex-col justify-center"
          onClick={toggle}
          type="button"
        >
          <div className="flex w-full justify-end px-2 pb-1">
            <div className="pr-1 text-xl text-tile-svg">
              {door?.state === 'on' ? <Icon symbol="Door" /> : null}
            </div>
            <div className="pr-1 text-lg text-tile-svg">
              {window?.state === 'on' ? <Icon symbol="Window" /> : null}
            </div>
            {state === 'on' ? (
              <div className="text-xl text-yellow-300">
                <Icon symbol="Lightbulb" />
              </div>
            ) : (
              <div className="text-xl text-white dark:text-black/50">
                <Icon symbol="Lightbulb" />
              </div>
            )}
          </div>
          <div className="flex w-full justify-center text-4xl text-tile-svg dark:text-black/50 sm:text-6xl">
            <Icon symbol={entity_icon} />
          </div>
        </button>
        <button
          className="flex w-full flex-col justify-center"
          onClick={() => setIsOpen(true)}
        >
          {state === 'on' ? (
            <div className="flex w-full justify-center pt-1 text-lg font-normal text-white dark:text-black sm:pt-2 sm:text-xl">
              {entity_name}
            </div>
          ) : (
            <div className="flex w-full justify-center pt-1 text-lg font-normal text-white dark:text-black/50 sm:pt-2 sm:text-xl">
              {entity_name}
            </div>
          )}
          <div className="flex w-full justify-center divide-x pb-1 text-[0.65rem] text-white dark:divide-zinc-800 dark:text-black sm:pb-0 sm:text-xs sm:font-thin">
            {climate?.attributes.current_temperature ? (
              <div className="flex px-2">
                <div>{climate?.attributes.current_temperature} °C</div>
                {climate ? (
                  climate?.attributes.hvac_action === 'heating' ? (
                    <div className="pl-1 text-white dark:text-black/50">
                      <Icon symbol="Heating" />
                    </div>
                  ) : null
                ) : null}
              </div>
            ) : temp?.state ? (
              <div className="flex px-2">
                <div>{temp?.state} °C</div>
                {climate ? (
                  climate?.attributes.hvac_action === 'heating' ? (
                    <div className="pl-1 text-white dark:text-black/50">
                      <Icon symbol="Heating" />
                    </div>
                  ) : null
                ) : null}
              </div>
            ) : (
              <></>
            )}
            {humid?.state ? <div className="px-2">{humid?.state}%</div> : <></>}
          </div>
        </button>
        <DetailsWindow
          allEntities={roomDetails}
          entity_name={entity_name}
          entity_id={entity_id}
          climate_id={climate_id}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default StandardButton;
