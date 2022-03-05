import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { useState, useEffect } from 'react';

const OfficeLight = () => {
  const entity_id = 'light.office_lightstrip';

  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const [state, setState] = useState<any>(entity?.state || 'off');

  useEffect(() => {
    setState((s) => entity?.state || s);
  }, [entity]);

  const turnOn = () => {
    setState('on');
    callService(connection, 'light', 'turn_on', { entity_id });
  };

  const turnOff = () => {
    setState('off');
    callService(connection, 'light', 'turn_off', { entity_id });
  };

  const toggle = () => {
    state === 'on' ? turnOff() : turnOn();
  };

  return (
    <div className="flex max-w-xs p-2">
      <button
        className="m-4 flex-col rounded-lg bg-tile-bg p-4 hover:bg-tile-bg-hover dark:bg-zinc-500 dark:hover:bg-zinc-600"
        onClick={toggle}
        type="button"
      >
        <div className="flex justify-end">
          {state === 'on' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 w-6"
              fill="#FFFF66"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 w-6 text-white dark:text-black"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" />
            </svg>
          )}
        </div>
        <div className="flex justify-center px-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="h-16 w-16 text-tile-svg dark:text-black"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M128 96h384v256h64v-272c0-26.38-21.62-48-48-48h-416c-26.38 0-48 21.62-48 48V352h64V96zM624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1z" />
          </svg>
        </div>
        <div className="pt-3 text-xl font-normal text-white dark:text-black">
          Office
        </div>
      </button>
    </div>
  );
};

export default OfficeLight;
