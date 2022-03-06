export const RoomDetailConfigurations = [
  // Hallway
  {
    entity_name: 'Hallway',
    Lights: [],
  },

  // Kitchen
  {
    entity_name: 'Kitchen',
    Lights: [
      {
        entity_name: 'Kitchen Table',
        entity_id: 'light.kitchen_table',
        entity_icon: 'Table',
      },
      {
        entity_name: 'Lightstrip',
        entity_id: 'light.kitchen_lightstrip',
        entity_icon: 'Lightstrip',
      },
    ],
  },

  // Living Room
  {
    entity_name: 'Living Room',
    Lights: [
      {
        entity_name: 'Dining Table',
        entity_id: 'light.dining_table',
        entity_icon: 'Table',
      },
      {
        entity_name: 'Lightstrip',
        entity_id: 'light.lightstrip',
        entity_icon: 'Lightstrip',
      },
      {
        entity_name: 'Floor Lamp',
        entity_id: 'light.living_room_floor_lamp',
        entity_icon: 'Lightbulb',
      },
      {
        entity_name: 'Cornor Lamp',
        entity_id: 'light.corner_lamp',
        entity_icon: 'CornorLamp',
      },
    ],
  },
  {
    entity_name: 'Bedroom',
    Lights: [],
  },
  {
    entity_name: 'Walk in Closet',
    Lights: [],
  },
  {
    entity_name: 'Office',
    Lights: [],
  },
  {
    entity_name: 'Bathroom',
    Lights: [],
  },
];

export default { RoomDetailConfigurations };
