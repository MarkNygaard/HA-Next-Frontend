import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';
import Roundy from 'roundy';

export default function Climate({ entity_id }) {
  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const currentTemp = entity?.attributes.current_temperature;
  const hvac = entity?.attributes.hvac_action;

  const [temperature, setTemperature] = useState<any>(
    entity?.attributes.temperature || 0
  );

  useEffect(() => {
    setTemperature((e) => entity?.attributes.temperature || e);
  }, [entity]);

  const temperatureOnChange = (e) => {
    setTemperature(parseInt(e.target.value, 10));
    callService(connection, 'climate', 'set_temperature', {
      entity_id: entity_id,
      temperature: temperature,
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center pt-4">
        Current temp {currentTemp}
      </div>
      <div className="flex w-full justify-center pb-4">
        Set to {temperature}
      </div>
      <div className="flex w-full justify-center">
        <Roundy
          value={temperature}
          arcSize={270}
          rotationOffset={-45}
          min={10}
          max={40}
          stepSize={1}
          radius={100}
          strokeWidth={35}
          sliced={false}
          thumbWidth={5}
          color="rgba(74,145,96,255)"
          bgColor="#FFF"
          onChange={(e) => setTemperature(parseInt(e.target.value, 10))}
          onMouseUp={temperatureOnChange}
          //overrideStyle={}
        />
      </div>
    </div>
  );
}
