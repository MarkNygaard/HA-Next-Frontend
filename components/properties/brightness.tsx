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
    <div className="w-full">
      <p className="pt-4 pb-2">Brightness</p>
      <div className="mb-3 flex w-full items-center">
        <div className="px-2">
          <Icon symbol="Brightness" />
        </div>
        <div className="flex w-full">
          <input
            type="range"
            min={0}
            max={255}
            value={brightness}
            onChange={(e) => setBrightness(parseInt(e.target.value, 10))}
            onMouseUp={brightnessOnChange}
            onTouchEnd={brightnessOnChange}
            className="mx-2 h-1 w-full appearance-none rounded-md bg-blue-500"
          />
        </div>
        <div className="flex rounded-md bg-zinc-400 px-1 font-light">
          {Math.floor((brightness / 255) * 100)}%
        </div>
      </div>
    </div>
  );
}
