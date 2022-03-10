import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';

export default function Brightness({ entity_id }) {
  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const [brightness, setBrightness] = useState<any>(
    entity?.attributes.brightness || 0
  );

  useEffect(() => {
    setBrightness((e) => entity?.attributes.brightness || e);
  }, [entity]);

  const brightnessOnChange = (e) => {
    setBrightness(parseInt(e.target.value, 10));
    callService(connection, 'light', 'turn_on', {
      entity_id,
      brightness: brightness,
    });
  };

  return (
    <div>
      <p className="pt-4 pb-2">Brightness</p>
      <div className="flex items-center">
        <div className="px-2">
          <Icon symbol="Brightness" />
        </div>
        <div>
          <input
            type="range"
            min={0}
            max={255}
            value={brightness}
            onChange={(e) => setBrightness(parseInt(e.target.value, 10))}
            onMouseUp={brightnessOnChange}
            className="mx-2 mb-3 h-1 appearance-none rounded-md bg-blue-500"
          />
        </div>
        <div className="rounded-md bg-zinc-400 px-1 font-light">
          {Math.floor((brightness / 255) * 100)}%
        </div>
      </div>
    </div>
  );
}
