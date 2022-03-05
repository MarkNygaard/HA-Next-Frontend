import React from 'react';
import Rooms from 'ui/rooms';

export default function Layout() {
  return (
    <div className="max-w-screen flex min-h-screen w-full items-center justify-center bg-gray-100 dark:bg-luke-bg">
      <div className="relative flex">
        <div className="relative max-w-lg">
          <div className="absolute left-0 -bottom-20  h-96 w-96 animate-blob rounded-full bg-purple-300 opacity-50 blur-xl filter dark:mix-blend-overlay"></div>
          <div className="animation-delay-2000 absolute -right-4 -bottom-20 h-96 w-96 animate-blob rounded-full bg-yellow-300 opacity-50 blur-xl filter dark:mix-blend-overlay"></div>
          <div className="animation-delay-4000 absolute -top-28 -left-40 h-96 w-96 animate-blob rounded-full bg-pink-300 opacity-50 blur-xl filter dark:mix-blend-overlay"></div>
        </div>
      </div>
      <Rooms />
    </div>
  );
}
