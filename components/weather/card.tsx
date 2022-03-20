import React, { useState, useEffect } from 'react';
import { WiDaySunny } from 'react-icons/wi';

export default function Card(props) {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const [dateTomorrow, setDateTomorrow] = useState(
    new Date(props.entity?.attributes.forecast[0].datetime)
  );
  useEffect(() => {
    setInterval(
      () =>
        setDateTomorrow(
          new Date(props.entity?.attributes.forecast[0].datetime)
        ),
      3600000
    );
  }, []);

  return (
    <div className="flex w-full divide-x divide-solid divide-black rounded-xl bg-white/50 p-1">
      {/** Today */}
      <div className="grid w-full grid-cols-2 py-1 px-2">
        {/** Row 1 */}
        <div className="flex items-center justify-center">
          {dateState.toLocaleDateString('en-US', {
            weekday: 'long',
          })}
        </div>
        <div></div>

        {/** Row 2 */}
        <div className="flex items-center justify-center text-6xl">
          <WiDaySunny />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-center text-4xl font-semibold">
            {Math.round(props.entity?.attributes.temperature)}°
          </div>
        </div>

        {/** Row 3 */}
        <div className="flex items-center justify-center text-sm font-light capitalize">
          {props.entity?.state}
        </div>
        <div className="flex items-center justify-center">
          <div></div>
          <div className="flex items-center justify-center text-sm font-light">
            {props.entity?.attributes.wind_speed} km/h
          </div>
        </div>
      </div>

      {/** Tomorrow */}
      <div className="py-1 px-2">
        <div>
          <div className="flex items-center justify-center">Tomorrow</div>
          <div>
            <div className="flex items-center justify-center">
              <div className="text-6xl">
                <WiDaySunny />
              </div>
              <div></div>
            </div>
          </div>
          <div className="flex items-center justify-center text-sm font-light">
            {props.entity?.attributes.forecast[0].templow}°/
            {props.entity?.attributes.forecast[0].temperature}°
          </div>
        </div>
      </div>
    </div>
  );
}
