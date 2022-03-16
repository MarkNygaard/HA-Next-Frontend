import React, { useState, useEffect, useCallback } from 'react';
import { callService } from 'home-assistant-js-websocket';
import { useAuth, useHass, useEntity } from '@hooks';
import { Switch } from '@headlessui/react';

export default function EntitySwitch({ allEntities }) {
  const { connection } = useHass();

  const entity_id = allEntities.entityId;
  const entity = useEntity(entity_id);

  const [state, setState] = useState<boolean>(
    entity?.state === 'on' ? true : false || false
  );

  useEffect(() => {
    setState((s) => (entity?.state === 'on' ? true : false || s));
  }, [entity]);

  const turnOn = () => {
    setState(true);
    callService(connection, 'switch', 'turn_on', { entity_id });
  };

  const turnOff = () => {
    setState(false);
    callService(connection, 'switch', 'turn_off', { entity_id });
  };

  const toggle = () => {
    state === true ? turnOff() : turnOn();
  };
  return (
    <div className="flex w-full">
      <div className="flex-1">{allEntities.entityName}</div>
      <div className="">
        <Switch
          checked={state}
          onChange={toggle}
          className={`${
            state ? 'bg-blue-600' : 'bg-gray-400'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              state ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </Switch>
      </div>
    </div>
  );
}
