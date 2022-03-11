import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../stores/hass.store';
import { useEntity } from '@hooks';
import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@components/layout';
import Icon from '@components/icons';

const SomeComponent = () => {
  const entity_id = 'climate.kitchen';

  const { connection } = useHassStore();
  const entity = useEntity(entity_id)?.attributes.hvac_action;

  return (
    <Layout>
      <div className="flex flex-col divide-y divide-solid divide-zinc-800">
        <div className="py-3">
          <p className="pt-2 pb-1">Kitchen Temperature</p>
          <div className="flex items-center">
            <div className="w-full">{entity}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SomeComponent;
