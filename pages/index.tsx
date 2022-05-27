import React from 'react';
import { StatusModal } from 'components/modals';
import StandardButton from '@components/primitives/buttons/StandardButton';
import AllLights from '@components/primitives/buttons/AllLights';
import Layout from '@components/layout';
import { Prisma, PrismaClient } from '@prisma/client';

export default function Home({ allRooms, allLights }) {
  return (
    <div className="flex w-screen">
      <Layout>
        <div className="flex w-full max-w-sm flex-col justify-center sm:max-w-sm md:max-w-xl xl:max-w-3xl standalone:max-w-none">
          <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6">
            {allRooms.map((r: any) => {
              return (
                <StandardButton
                  key={r?.entityId}
                  entity_name={r.entityName}
                  entity_id={r.entityId}
                  entity_icon={r.icon}
                  temp_id={r.tempId}
                  humid_id={r.humidId}
                  climate_id={r.climateId}
                  window_id={r.windowId}
                  door_id={r.doorId}
                  roomDetails={r.subLights}
                />
              );
            })}
          </div>
          {allLights.map((Lights: any) => {
            return (
              <div>
                <AllLights
                  entity_name={Lights.entityName}
                  entity_id={Lights.entityId}
                />
              </div>
            );
          })}
        </div>
      </Layout>
      <StatusModal />
    </div>
  );
}

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const rooms = await prisma.room.findMany({
    include: {
      subLights: true,
    },
  });
  const allLights = await prisma.allLights.findMany();
  return {
    props: {
      allRooms: rooms,
      allLights: allLights,
    },
  };
}
