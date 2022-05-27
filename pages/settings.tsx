import EntityType from '@components/entity-types/check-type';
import Layout from '@components/layout';
import RoomSettings from '@components/views/RoomSettings';
import { useAuth, useHass } from '@hooks';
import { PrismaClient } from '@prisma/client';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

export default function Settings({ allSettings, allRooms }) {
  const { connection } = useHass();
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-screen">
      <Layout>
        <div className="w-full flex-col">
          <div className="flex h-screen w-full flex-col p-4 md:w-2/4 xl:w-1/3">
            {allSettings.map((Setting: any) => {
              return (
                <div className="pt-2" key={Setting.id}>
                  <div className="py-2">
                    <EntityType setting={Setting} />
                  </div>
                </div>
              );
            })}
            <div className="pt-4 pb-2">
              <div className="rounded-lg bg-zinc-300/50 p-2 px-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full text-left text-xl font-medium"
                >
                  Rooms
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <RoomSettings
                      allRooms={allRooms}
                      onClose={() => setIsOpen(false)}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="pt-4">
              <div className="rounded-lg bg-zinc-300/50 p-2 px-4">
                <button onClick={() => logout(connection)}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const settings = await prisma.settings.findMany({
    include: {
      entity: {
        include: {
          entityType: true,
        },
      },
    },
  });
  const rooms = await prisma.room.findMany({
    include: {
      subLights: true,
    },
  });
  return {
    props: {
      allSettings: settings,
      allRooms: rooms,
    },
  };
}
