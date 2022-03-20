import React, { useState, useEffect } from 'react';
import Icon from '@components/icons';
import Weather from './weather/weather';

export default function Navigation() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className="flex h-screen flex-col border-r-2 border-zinc-200 bg-white dark:border-darkmode-border dark:bg-darkmode-nav sm:w-4/12 sm:border-r-4 xl:w-3/12">
      <div className="w-full flex-1 space-y-1 pb-3 pt-3 sm:px-3 sm:pt-12">
        <div className="hidden justify-center rounded-sm text-center text-6xl font-thin text-zinc-600 dark:text-zinc-400 sm:flex sm:text-7xl lg:text-8xl">
          {dateState.toLocaleString('da-DK', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          })}
        </div>
        <div className="hidden justify-center rounded-sm pb-6 text-center text-sm font-light capitalize text-zinc-800 dark:text-zinc-600 sm:flex lg:text-base">
          {dateState.toLocaleDateString('da-DK', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <a
          href="/"
          className="group flex items-center rounded-[75px] font-medium hover:shadow-md sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800 md:px-4"
        >
          <div className="hidden flex-1 sm:flex">
            <div className="group-hover:zinc-800 block p-3 text-sm font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
              Home
            </div>
          </div>
          <div className="p-2 sm:px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:zinc-800 h-6 w-6 text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
        </a>
        <a
          href="#"
          className="group flex items-center rounded-[75px] font-medium hover:shadow-md sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800 md:px-4"
        >
          <div className="hidden flex-1 sm:flex">
            <div className="group-hover:zinc-800 block p-3 text-sm font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
              Rooms
            </div>
          </div>
          <div className="p-2 sm:px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:zinc-800 h-6 w-6 text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
        </a>
        <a
          href="/clean"
          className="group flex items-center rounded-[75px] font-medium hover:shadow-md sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800 md:px-4"
        >
          <div className="hidden flex-1 sm:flex">
            <div className="group-hover:zinc-800 block p-3 text-sm font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
              Clean
            </div>
          </div>
          <div className="p-2 sm:px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:zinc-800 h-6 w-6 text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </a>
        <a
          href="/entities"
          className="group flex items-center rounded-[75px] font-medium hover:shadow-md sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800 md:px-4"
        >
          <div className="hidden flex-1 sm:flex">
            <div className="group-hover:zinc-800 block p-3 text-sm font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
              Search
            </div>
          </div>
          <div className="p-2 sm:px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 460 512"
              stroke="none"
              strokeWidth="1"
              className="group-hover:zinc-800 h-6 w-6 text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
              fill="currentColor"
            >
              <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
            </svg>
          </div>
        </a>
        <a
          href="/settings"
          className="group flex items-center rounded-[75px] font-medium hover:shadow-md sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800 md:px-4"
        >
          <div className="hidden flex-1 sm:flex">
            <div className="group-hover:zinc-800 block p-3 text-sm font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
              Settings
            </div>
          </div>
          <div className="p-2 text-xl text-zinc-900 dark:text-zinc-400 sm:px-4">
            <Icon symbol="Settings" />
          </div>
        </a>
      </div>
      <Weather />
    </div>
  );
}
