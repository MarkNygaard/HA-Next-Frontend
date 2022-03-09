// Main configuration file for rooms overview.
// See available icons in Components/icons/index.tsx

export const rooms = [
  {
    entity_name: 'Hallway',
    entity_id: 'light.hallway_lights',
    entity_icon: 'Key',
  },
  {
    entity_name: 'Kitchen',
    entity_id: 'light.kitchen',
    entity_icon: 'Utensils',
    temp_id: 'sensor.kitchen_temperature',
    humid_id: 'sensor.kitchen_humidity',
  },
  {
    entity_name: 'Living Room',
    entity_id: 'light.living_room',
    entity_icon: 'Couch',
    temp_id: 'sensor.living_room_temperature',
    humid_id: 'sensor.living_room_humidity',
  },
  {
    entity_name: 'Bedroom',
    entity_id: 'light.bedroom_plafond',
    entity_icon: 'Bed',
    temp_id: 'sensor.bedroom_temperature',
    humid_id: 'sensor.bedroom_humidity',
  },
  {
    entity_name: 'Walk in Closet',
    entity_id: 'light.walk_in_closet_aurelle',
    entity_icon: 'Tshirt',
    temp_id: 'sensor.walk_in_closet_temperature',
    humid_id: 'sensor.walk_in_closet_humidity',
  },
  {
    entity_name: 'Office',
    entity_id: 'light.office_lightstrip',
    entity_icon: 'Laptop',
  },
  {
    entity_name: 'Bathroom',
    entity_id: 'light.bathroom',
    entity_icon: 'Shower',
    temp_id: 'sensor.bathroom_temperature',
    humid_id: 'sensor.bathroom_humidity',
  },
];

export default { rooms };
