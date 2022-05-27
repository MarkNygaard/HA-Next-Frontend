import Icon from '@components/primitives/icons';
import classNames from 'classnames';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function NavItem({ href, text, icon }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={classNames(
          isActive
            ? 'border-b-2 border-tile-bg sm:border-none sm:bg-tile-bg sm:dark:bg-zinc-800'
            : '',
          'group z-10 -mb-[2px] flex items-center sm:my-1 sm:rounded-[75px] sm:hover:bg-tile-bg sm:dark:hover:bg-zinc-800 md:px-4'
        )}
      >
        <div className="hidden flex-1 sm:flex">
          <div
            className={classNames(
              isActive
                ? 'font-medium dark:text-zinc-200 sm:font-light sm:text-white'
                : 'font-light',
              'block p-3 text-sm  text-zinc-900 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-zinc-200 sm:p-4 md:text-base xl:text-lg'
            )}
          >
            <span className="capsize">{text}</span>
          </div>
        </div>
        <div>
          <div
            className={classNames(
              isActive
                ? 'font-light text-tile-bg sm:text-white'
                : 'font-light dark:text-zinc-400',
              'px-4 text-3xl text-zinc-900 group-hover:text-tile-bg  sm:p-2 sm:text-2xl sm:group-hover:text-white xl:text-3xl'
            )}
          >
            <Icon symbol={icon} />
          </div>
          <div
            className={classNames(
              isActive
                ? 'text-tile-bg sm:text-white'
                : 'text-zinc-900 dark:text-zinc-400',
              'py-1 text-center text-[0.6rem] font-medium group-hover:text-tile-bg sm:hidden'
            )}
          >
            {text}
          </div>
        </div>
      </a>
    </NextLink>
  );
}

export default function Navigation() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className="flex w-full justify-center border-b-2 border-zinc-200 bg-white dark:border-darkmode-border dark:bg-darkmode-nav sm:h-screen sm:w-4/12 sm:flex-col sm:border-r-4 xl:w-3/12 standalone:fixed standalone:z-10 standalone:pt-10">
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
          <NavItem href={'/'} text="Home" icon="Home" />
          <NavItem href={'#'} text="Rooms" icon="AiOutlineBulb" />
          <NavItem href={'/clean'} text="Clean" icon="GiVacuumCleaner" />
          <NavItem href={'/entities'} text="Search" icon="Search" />
          <NavItem href={'/settings'} text="Settings" icon="Settings" />
        </div>
      </div>
    </div>
  );
}
