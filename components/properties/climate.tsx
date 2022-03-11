import React, { useState, useEffect } from 'react';
import { callService } from 'home-assistant-js-websocket';
import useHassStore from '../../stores/hass.store';
import { useEntity } from '@hooks';
import Icon from '@components/icons';

export default function Climate(entity_id) {
  const { connection } = useHassStore();
  const entity = useEntity(entity_id);

  return <div></div>;
}
