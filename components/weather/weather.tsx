import React from 'react';
import { useEntity } from '@hooks';
import Card from './card';

export default function Weather() {
  const entity = useEntity('weather.home');

  return (
    <div className="hidden h-full max-h-52 w-full bg-weatherClouds bg-cover bg-no-repeat dark:bg-weatherCloudsDark dark:opacity-60 lg:flex">
      <div className="flex h-full w-full items-end p-2">
        <Card entity={entity} />
      </div>
    </div>
  );
}
