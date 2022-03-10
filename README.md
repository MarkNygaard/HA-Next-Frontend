# Home Assistant Next.js Frontend

This is a Home Assistant frontend created on Next.js build with TypeScript and Tailwind.
Thanks to dangreco for his starter repo which this frontend is build up on. See: https://github.com/dangreco/home-assistant-nextjs-starter

## How to use

### Getting Started

1. [Create an account on DatoCMS](https://datocms.com).

2. Let DatoCMS set everything up for you clicking this button:

[![Clone DatoCMS project](https://dashboard.datocms.com/clone/button.svg)](https://dashboard.datocms.com/clone?projectId=64697&name=HA-Frontend)

### Local Setup

1. Clone this repository

```shell
$ git clone https://github.com/MarkNygaard/HA-Next-Frontend.git
```

2. Install dependencies

```shell
$ yarn
```

3. Edit `utils/config.ts` with the name of your app:

```tsx
const APP_NAME = 'app-name'; // <- Edit this!

export { APP_NAME };
```

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Then set each variable on `.env.local`:

- `DATOCMS_API_KEY` should be the API token you just copied.

Your `.env.local` file should look like this:

```bash
DATOCMS_API_KEY=...
```

#### Run your project locally

Start the dev server

```shell
$ yarn dev
```

Open up `localhost:3000` in your browser. The site might run slow in dev mode.

#### Build your finished project locally for optimal speed

For production build

```shell
$ yarn build
```

Run you build

```shell
$ yarn start
```

Open up `localhost:3000` in your browser, you're done!

# Pages

- `pages/index.tsx` This is where your "dashboard" should go. The user will be redirected to this route after succesful authentication.

- `components/` This is where your components like navigation, buttons, properties etc. are placed.

- `components/icons/index.tsx` This is where you will add new icons to be used. Search icons at https://react-icons.github.io/react-icons/

## Entities (Instructions from dangreco see: https://github.com/dangreco/home-assistant-nextjs-starter)

- `useEntity( entityId: string )` Retrieves an entity for the given `entityId`,`undefined` if the entity is not found.

- `useEntities( entityIds?: string[] )` Retrives an object of entities matching the given `entityIds`. If a given entity with ID `entityId` was not found, the corresponding entry `myEntities[entityId]` will be `undefined`. If `entityIds` is undefined, this hook returns all entities.

- `useDomain( domain: string )` Retrieves an object of entities matching the given `domain`. E.g., `useDomain('light')` will return all entities with IDs matching `light.xxxxxxxx`.

- `useQuery( query: string )` Searches all available entites by `query`. Matches are based on both the `entity_id` and `friendly_name` of the entity.

- **TODO** `useHistory( entityId: string )` ~~Retrieves the history for an entity given its `entityId`.~~

## Other (Instructions from dangreco see: https://github.com/dangreco/home-assistant-nextjs-starter)

- `useDiscovery( max?: number )` Finds Home Assistant servers on the local network. Stops the search once `max` instances are found. If `max` is undefined, this will search forever.

- `useAuth()` Retrieves current authentication information. The field `logout` is a function to log out of the current auth.

- `useHass()` Retrieves the current Home Assistant state, incuding fields `connection`, `entities`, `services`, `config`.
