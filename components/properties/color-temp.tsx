import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';

export default function ColorTemp({ entity_id }) {
  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const [colorTemp, setColorTemp] = useState<any>(
    entity?.attributes.color_temp || 0
  );

  useEffect(() => {
    setColorTemp((e) => entity?.attributes.color_temp || e);
  }, [entity]);

  const colorTempOnChange = (e) => {
    setColorTemp(parseInt(e.target.value, 10));
    callService(connection, 'light', 'turn_on', {
      entity_id,
      color_temp: colorTemp,
    });
  };

  return (
    <div className="py-4">
      <p className="pt-4 pb-2">Color Temperature</p>
      <div className="flex items-center">
        <div className="px-2">
          <Icon symbol="Temperature" />
        </div>
        <div className="w-full rounded-md bg-gradient-to-r from-blue-400 to-orange-400">
          <input
            type="range"
            min={153}
            max={500}
            value={colorTemp}
            onChange={(e) => setColorTemp(parseInt(e.target.value, 10))}
            onMouseUp={colorTempOnChange}
            className="mx-2 mb-3 h-1 w-[90%] appearance-none rounded-md bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
