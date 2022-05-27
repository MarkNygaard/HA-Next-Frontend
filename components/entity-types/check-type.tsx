import React from 'react';
import EntitySwitch from './switch';
import EntityInputBoolean from './input-boolean';
import EntityInputDatetime from './input-datetime';

export default function EntityType({ setting }) {
  return (
    <div className="divide-y divide-solid divide-black rounded-lg bg-zinc-300/50 px-4">
      <div className="pb-1 pt-2 text-xl font-medium text-black">
        {setting.settingName}
      </div>
      <div className="py-4 px-2">
        {setting.entity.map((entities) => {
          return (
            <div className="w-full py-2 font-light text-black">
              {entities.entityType.map((eType) => {
                return (
                  <>
                    {eType.entityTypeId === 'Switch' ? (
                      <EntitySwitch key={entities.id} allEntities={entities} />
                    ) : eType.entityTypeId === 'Input boolean' ? (
                      <EntityInputBoolean
                        key={entities.id}
                        allEntities={entities}
                      />
                    ) : eType.entityTypeId === 'Input datetime' ? (
                      <EntityInputDatetime
                        key={entities.id}
                        allEntities={entities}
                      />
                    ) : null}
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
