import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import { useState, useEffect } from 'react';

const Bedroom = () => {
  const entity_id = 'light.bedroom_plafond';

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
            <path d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z" />
          </svg>
        </div>
        <div className="pt-3 text-xl font-normal text-white dark:text-black">
          Bedroom
        </div>
      </button>
    </div>
  );
};

export default Bedroom;
