import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../stores/hass.store';
import { useEntity } from '@hooks';
import React, { useState, useEffect, useCallback } from 'react';
import Layout from '@components/layout';

const SomeComponent = () => {
  const entity_id = 'light.office_lightstrip';

  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  const [brightness, setBrightness] = useState<any>(
    entity?.attributes.brightness || 0
  );

  useEffect(() => {
    setBrightness((e) => entity?.attributes.brightness || e);
  }, [entity]);

  const handleOnChange = (e) => {
    setBrightness(parseInt(e.target.value, 10));
    //callService(connection, 'light', 'turn_on', { entity_id, brightness });
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div>
          <input type="range" min={0} max={255} value={brightness} />
          <div className="bg-gray-200">{brightness}</div>
        </div>
      </div>
    </Layout>
  );
};

export default SomeComponent;
