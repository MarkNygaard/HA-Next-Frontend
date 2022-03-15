import React from 'react';
import EntitySwitch from './switch';
import EntityInputBoolean from './input-boolean';

export default function EntityType({ setting }) {
  return (
    <div>
      {setting.entity.map((entities) => {
        return (
          <div>
            {entities.entityType.entityTypeId === 'Switch' ? (
              <EntitySwitch key={entities.id} allEntities={entities} />
            ) : entities.entityType.entityTypeId === 'Input boolean' ? (
              <EntityInputBoolean key={entities.id} allEntities={entities} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
