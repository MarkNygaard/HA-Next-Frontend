import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { Switch } from '@headlessui/react';

export default function EntityInputDatetime({ allEntities }) {
  const { connection } = useHassStore();
  const entity_id = allEntities.entityId;
  const entity = useEntity(entity_id);

  const [time, setTime] = useState<any>(entity?.state || 0);

  useEffect(() => {
    setTime((e) => entity?.state || e);
  }, [entity]);

  const timeOnChange = (e) => {
    setTime(parseInt(e.target.value, 10));
    callService(connection, 'input_datetime', 'set_datetime', {
      entity_id: entity_id,
      time: time,
    });
  };

  return (
    <div className="flex w-full">
      <div className="flex-1">{allEntities.entityName}</div>
      <div className="justify-end">
        <input
          type="time"
          step="600"
          value={time}
          className="rounded-md px-1 text-black"
          placeholder="Time"
          onChange={timeOnChange}
        />
      </div>
    </div>
  );
}
