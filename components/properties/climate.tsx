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

  const [hvacMode, setHvacMode] = useState<any>(entity?.state || 'off');

  useEffect(() => {
    setHvacMode((s) => entity?.state || s);
  }, [entity]);

  const turnOff = () => {
    setHvacMode('off');
    callService(connection, 'climate', 'set_hvac_mode', {
      entity_id: entity_id,
      hvac_mode: 'off',
    });
  };

  const auto = () => {
    setHvacMode('auto');
    callService(connection, 'climate', 'set_hvac_mode', {
      entity_id: entity_id,
      hvac_mode: 'auto',
    });
  };

  const heat = () => {
    setHvacMode('heat');
    callService(connection, 'climate', 'set_hvac_mode', {
      entity_id: entity_id,
      hvac_mode: 'heat',
    });
  };

  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-center pt-4">
        Current temp {currentTemp}
      </div>

      {entity_id ? (
        <div className="flex flex-col justify-center">
          <div className="relative w-full flex-col justify-center">
            <div className="flex justify-center">
              <Roundy
                arcSize={270}
                rotationOffset={-45}
                min={entity?.attributes.min_temp}
                max={entity?.attributes.max_temp}
                stepSize={1}
                radius={100}
                strokeWidth={20}
                sliced={true}
                thumbSize={15}
                color="rgba(74,145,96,255)"
                bgColor="#FFF"
                value={temperature}
                onChange={(e) => setTemperature(e)}
                onAfterChange={temperatureOnChange}
                overrideStyle={
                  hvac === 'heating'
                    ? 'svg{background: #e36304; border-radius:100%} path{stroke-width:9px; stroke:#FFF} .sliderHandle:after{width:15px; height:15px; background: #FFF; border-color: #e36304}'
                    : 'svg{background: #003cec; border-radius: 100%} path{stroke-width:9px; stroke:#FFF} .sliderHandle:after{width:15px; height:15px; background: #FFF; border-color: #003cec}'
                }
              />
            </div>
            <div className="absolute right-0 top-[30%] left-0 mx-auto w-[100px] text-center text-6xl font-medium text-white">
              {temperature}
            </div>
            <div className="absolute right-0 bottom-[12%] left-0 mx-auto w-[100px] text-center uppercase text-white">
              {hvac}
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="mt-4 flex divide-x divide-zinc-500 overflow-hidden rounded-lg bg-zinc-400">
              {entity?.state === 'off' ? (
                <div className="py-1 pl-3 pr-2 text-sm font-semibold uppercase ">
                  {entity?.attributes.hvac_modes[0]}
                </div>
              ) : (
                <button
                  onClick={turnOff}
                  className="py-1 pl-3 pr-2 text-sm font-thin uppercase hover:bg-zinc-600"
                >
                  {entity?.attributes.hvac_modes[0]}
                </button>
              )}
              {entity?.state === 'auto' ? (
                <div className="py-1 px-2 text-sm font-semibold uppercase">
                  {entity?.attributes.hvac_modes[1]}
                </div>
              ) : (
                <button
                  onClick={auto}
                  className="py-1 px-2 text-sm font-thin uppercase hover:bg-zinc-600"
                >
                  {entity?.attributes.hvac_modes[1]}
                </button>
              )}
              {entity?.state === 'heat' ? (
                <div className="py-1 pr-3 pl-2 text-sm font-semibold uppercase">
                  {entity?.attributes.hvac_modes[2]}
                </div>
              ) : (
                <button
                  onClick={heat}
                  className="py-1 pr-3 pl-2 text-sm font-thin uppercase hover:bg-zinc-600"
                >
                  {entity?.attributes.hvac_modes[2]}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
