import {
  BsLightbulbFill,
  BsLaptop,
  BsFillDoorOpenFill,
  BsGearWideConnected,
} from 'react-icons/bs';
import {
  FaCouch,
  FaKey,
  FaBed,
  FaUtensils,
  FaTshirt,
  FaTemperatureLow,
  FaSearchengin,
} from 'react-icons/fa';
import { MdShower, MdOutlineBrightnessMedium } from 'react-icons/md';
import {
  GiTable,
  GiFlexibleLamp,
  GiRoundShield,
  GiHeatHaze,
  GiWindow,
  GiVacuumCleaner,
} from 'react-icons/gi';
import { AiOutlineHome, AiOutlineBulb } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import {
  CeilingAurelle,
  AdoreAlt,
  Lightstrip,
  PendantBeing,
  Go,
  FloorShade,
} from './hue-icons';
import { BiHome } from 'react-icons/bi';
import { SiHomebridge } from 'react-icons/si';
import { IoMdAdd } from 'react-icons/io';
import { LightDark, OpenDoor, OpenWindow } from './misc';

// Search icons at https://react-icons.github.io/react-icons/ & https://github.com/arallsopp/hass-hue-icons
// Remember to Icon above and add it in the list below.
// Icons from https://github.com/arallsopp/hass-hue-icons should be translated from bulb-filament to BulbFilament when added

function Icon(props) {
  switch (props.symbol) {
    case 'PendantBeing':
      return <PendantBeing />;
    case 'Lightbulb':
      return <BsLightbulbFill />;
    case 'Couch':
      return <FaCouch />;
    case 'Key':
      return <FaKey />;
    case 'Bed':
      return <FaBed />;
    case 'Utensils':
      return <FaUtensils />;
    case 'Tshirt':
      return <FaTshirt />;
    case 'Shower':
      return <MdShower />;
    case 'Laptop':
      return <BsLaptop />;
    case 'Table':
      return <GiTable />;
    case 'Lightstrip':
      return <Lightstrip />;
    case 'CornerLamp':
      return <GiFlexibleLamp />;
    case 'Brightness':
      return <MdOutlineBrightnessMedium />;
    case 'Temperature':
      return <FaTemperatureLow />;
    case 'Home':
      return <AiOutlineHome />;
    case 'LightbulbShine':
      return <HiOutlineLightBulb />;
    case 'RobotVacuum':
      return <GiRoundShield />;
    case 'Search':
      return <FaSearchengin />;
    case 'Heating':
      return <GiHeatHaze />;
    case 'Door':
      return <OpenDoor />;
    case 'Window':
      return <OpenWindow />;
    case 'CeilingAurelle':
      return <CeilingAurelle />;
    case 'AdoreAlt':
      return <AdoreAlt />;
    case 'Settings':
      return <BsGearWideConnected />;
    case 'LightDark':
      return <LightDark />;
    case 'Home':
      return <BiHome />;
    case 'AiOutlineBulb':
      return <AiOutlineBulb />;
    case 'GiVacuumCleaner':
      return <GiVacuumCleaner />;
    case 'SiHomebridge':
      return <SiHomebridge />;
    case 'Plus':
      return <IoMdAdd />;
    case 'Go':
      return <Go />;
    case 'FloorShade':
      return <FloorShade />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;
