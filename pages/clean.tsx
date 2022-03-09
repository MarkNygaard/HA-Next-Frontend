import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../stores/hass.store';
import { useEntity } from '@hooks';
import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@components/layout';
import Icon from '@components/icons';

const SomeComponent = () => {
  const entity_id = 'light.office_lightstrip';

  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  // Brightness
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

  // Color Temperature
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
    <Layout>
      <div className="flex flex-col divide-y divide-solid divide-zinc-800">
        <div className="py-3">
          <p className="pt-2 pb-1">Color Temperature</p>
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
        <div>
          <p className="pt-2 pb-1">Brightness</p>
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
            <div className="text-zinc-400">{brightness}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SomeComponent;
