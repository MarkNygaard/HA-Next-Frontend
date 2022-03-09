import React, { useState, useEffect } from 'react';
import RoomDetails from '@components/buttons/room-details';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';

export default function DetailsWindow({
  open,
  onClose,
  allEntities,
  entity_id,
}) {
  if (!open) return null;

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
    <div className="fixed inset-0 overflow-y-auto p-4 pt-[10vh]">
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative mx-auto flex min-h-[50%] max-w-4xl justify-center rounded-xl bg-zinc-200 pb-8 shadow-2xl ring-1 ring-black/5 dark:bg-luke-bg">
        {allEntities.length ? (
          <div className="flex w-full">
            <div className="flex w-3/5 flex-col">
              <p className="flex flex-wrap justify-center py-4 text-center text-zinc-900">
                {allEntities.map((allEntities: any) => {
                  return (
                    <RoomDetails
                      entity_name={allEntities.entity_name}
                      entity_id={allEntities.entity_id}
                      entity_icon={allEntities.entity_icon}
                    />
                  );
                })}
              </p>
            </div>
            <div className="flex w-2/5 justify-center">
              <div className="flex w-2/3 items-center">
                <div className="flex flex-col divide-y divide-solid divide-zinc-900">
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
                          onChange={(e) =>
                            setColorTemp(parseInt(e.target.value, 10))
                          }
                          onMouseUp={colorTempOnChange}
                          className="mx-2 mb-3 h-1 w-[90%] appearance-none rounded-md bg-blue-500"
                        />
                      </div>
                    </div>
                  </div>
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
                          onChange={(e) =>
                            setBrightness(parseInt(e.target.value, 10))
                          }
                          onMouseUp={brightnessOnChange}
                          className="mx-2 mb-3 h-1 appearance-none rounded-md bg-blue-500"
                        />
                      </div>
                      <div className="rounded-md bg-zinc-400 px-1 font-light">
                        {Math.floor((brightness / 255) * 100)}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex w-2/5 justify-center">
            <div className="flex w-2/3 items-center">
              <div className="flex flex-col divide-y divide-solid divide-zinc-900">
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
                        onChange={(e) =>
                          setColorTemp(parseInt(e.target.value, 10))
                        }
                        onMouseUp={colorTempOnChange}
                        className="mx-2 mb-3 h-1 w-[90%] appearance-none rounded-md bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
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
                        onChange={(e) =>
                          setBrightness(parseInt(e.target.value, 10))
                        }
                        onMouseUp={brightnessOnChange}
                        className="mx-2 mb-3 h-1 appearance-none rounded-md bg-blue-500"
                      />
                    </div>
                    <div className="rounded-md bg-zinc-400 px-1 font-light">
                      {Math.floor((brightness / 255) * 100)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
