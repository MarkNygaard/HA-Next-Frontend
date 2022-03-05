import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className="flex h-screen w-3/12 flex-col border-r-8 bg-white dark:border-luke-border dark:bg-luke-nav">
      <div className="w-full space-y-1 px-3 pt-12 pb-3">
        <div className="rounded-sm text-center text-8xl font-thin text-zinc-600 dark:text-zinc-400">
          {dateState.toLocaleString('da-DK', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          })}
        </div>
        <div className="rounded-sm pb-6 text-center font-light capitalize text-zinc-800 dark:text-zinc-600">
          {dateState.toLocaleDateString('da-DK', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </div>
        <div className="group flex items-center rounded-[75px] px-4 font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700">
          <div className="flex-1">
            <a
              href="#"
              className="group-hover:zinc-800 block p-4 text-lg font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
            >
              Home
            </a>
          </div>
          <div className="px-4">
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
        </div>
        <div className="group flex items-center rounded-[75px] px-4 hover:bg-zinc-200 dark:hover:bg-zinc-700">
          <div className="flex-1">
            <a
              href="#"
              className="group-hover:zinc-800 block p-4 text-lg font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
            >
              Control Lights
            </a>
          </div>
          <div className="px-4">
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
        </div>
        <div className="group flex items-center rounded-[75px] px-4 font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700">
          <div className="flex-1">
            <a
              href="#"
              className="group-hover:zinc-800 block p-4 text-lg font-light text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-200"
            >
              Clean
            </a>
          </div>
          <div className="px-4">
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
        </div>
      </div>
    </div>
  );
}
