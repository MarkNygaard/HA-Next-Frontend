import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@components/primitives/icons';
import Weather from './weather/weather';

export default function Navigation() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className="flex justify-center border-b-2 border-zinc-200 dark:border-darkmode-border dark:bg-darkmode-nav sm:h-screen sm:w-4/12 sm:flex-col sm:border-r-4 sm:bg-white xl:w-3/12 standalone:pt-10">
      <div className="flex space-y-1 sm:block sm:w-full sm:flex-1 sm:px-3 sm:pb-3 sm:pt-12">
        <div className="hidden justify-center rounded-sm text-center text-6xl font-thin text-zinc-600 dark:text-zinc-400 sm:flex sm:text-7xl lg:text-8xl">
          {dateState.toLocaleString('da-DK', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          })}
        </div>
        <div className="hidden justify-center rounded-sm pb-6 text-center text-sm font-light capitalize text-zinc-800 dark:text-zinc-500 sm:flex lg:text-base">
          {dateState.toLocaleDateString('da-DK', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <div className="mx-auto flex sm:max-w-xs sm:flex-col">
          <Link href="/">
            <a className="group flex items-center rounded-[75px] font-medium sm:hover:bg-tile-bg sm:dark:hover:bg-zinc-800 md:px-4">
              <div className="hidden flex-1 sm:flex">
                <div className="block p-3 text-sm font-light text-zinc-900 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
                  Home
                </div>
              </div>
              <div className="p-2 px-4 text-3xl text-zinc-900 group-hover:text-tile-bg dark:text-zinc-400 sm:text-2xl sm:group-hover:text-white xl:text-3xl">
                <Icon symbol="Home" />
              </div>
            </a>
          </Link>
          <Link href="#">
            <a className="group flex items-center rounded-[75px] font-medium sm:hover:bg-tile-bg sm:dark:hover:bg-zinc-800 md:px-4">
              <div className="hidden flex-1 sm:flex">
                <div className="block p-3 text-sm font-light text-zinc-900 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
                  Rooms
                </div>
              </div>
              <div className="p-2 px-4 text-3xl text-zinc-900 group-hover:text-tile-bg dark:text-zinc-400 sm:text-2xl sm:group-hover:text-white xl:text-3xl">
                <Icon symbol="AiOutlineBulb" />
              </div>
            </a>
          </Link>
          <Link href="/clean">
            <a className="group flex items-center rounded-[75px] font-medium sm:hover:bg-tile-bg sm:dark:hover:bg-zinc-800 md:px-4">
              <div className="hidden flex-1 sm:flex">
                <div className="block p-3 text-sm font-light text-zinc-900 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
                  Clean
                </div>
              </div>
              <div className="p-2 px-4 text-3xl text-zinc-900 group-hover:text-tile-bg dark:text-zinc-400 sm:text-2xl sm:group-hover:text-white xl:text-3xl">
                <Icon symbol="GiVacuumCleaner" />
              </div>
            </a>
          </Link>
          <Link href="/entities">
            <a className="group flex items-center rounded-[75px] font-medium sm:hover:bg-tile-bg sm:dark:hover:bg-zinc-800 md:px-4">
              <div className="hidden flex-1 sm:flex">
                <div className="block p-3 text-sm font-light text-zinc-900 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
                  Search
                </div>
              </div>
              <div className="p-2 px-4 text-3xl text-zinc-900 group-hover:text-tile-bg dark:text-zinc-400 sm:text-2xl sm:group-hover:text-white xl:text-3xl">
                <Icon symbol="Search" />
              </div>
            </a>
          </Link>
          <Link href="/settings">
            <a className="group flex items-center rounded-[75px] font-medium  sm:hover:bg-tile-bg sm:dark:hover:bg-zinc-800 md:px-4">
              <div className="hidden flex-1 sm:flex">
                <div className="block p-3 text-sm font-light text-zinc-900 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg">
                  Settings
                </div>
              </div>
              <div className="p-2 px-4 text-3xl text-zinc-900 group-hover:text-tile-bg dark:text-zinc-400 sm:text-2xl sm:group-hover:text-white xl:text-3xl">
                <Icon symbol="Settings" />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
