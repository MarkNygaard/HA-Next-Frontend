import React, { useState } from 'react';
import { useAuth, useEntities, useHass, useQuery } from '@hooks';
import Layout from '@components/layout';

export default function entitySearch() {
  const entities = useEntities();

  const [query, setQuery] = useState<string | undefined>();
  const results = useQuery(query || '');

  const t = results['foo'];

  return (
    <Layout>
      <div className="flex h-screen w-full flex-col">
        <div className="flex w-full justify-center p-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="dark:highlight-white/5 mx-4 hidden items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-zinc-400 shadow-sm ring-1 ring-zinc-900/10 hover:ring-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600 lg:flex"
          />
          <div className="text-zinc-900 dark:text-zinc-400">
            <p>Total # of Entities: {Object.keys(entities).length}</p>
            <p># of Found Entities: {Object.keys(results).length}</p>
          </div>
        </div>

        <div className="flex p-2 text-xs text-zinc-900 dark:text-zinc-400">
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      </div>
    </Layout>
  );
}
