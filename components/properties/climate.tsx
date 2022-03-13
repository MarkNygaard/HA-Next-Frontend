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
    setTemperature(parseFloat(e));
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

      {entity_id ? (
        <div className="flex w-full flex-col justify-center">
          <div className="flex w-full justify-center pb-4">
            Set to {temperature}
          </div>
          <div className="flex justify-center">
            <Roundy
              arcSize={270}
              rotationOffset={-45}
              min={entity?.attributes.min_temp}
              max={entity?.attributes.max_temp}
              stepSize={1}
              radius={100}
              strokeWidth={20}
              sliced={false}
              thumbSize={15}
              color="rgba(74,145,96,255)"
              bgColor="#FFF"
              value={temperature}
              onChange={(e) => setTemperature(e)}
              onAfterChange={temperatureOnChange}
              overrideStyle={
                'path{stroke-width:5px} .sliderHandle:after{width:15px; height:15px; background: rgba(74,145,96,255); border: rgba(74,145,96,255)}'
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
