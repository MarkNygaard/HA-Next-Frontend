import { BsLightbulbFill, BsLaptop } from 'react-icons/bs';
import { FaCouch, FaKey, FaBed, FaUtensils, FaTshirt } from 'react-icons/fa';
import { MdShower } from 'react-icons/md';
import { GiTable, GiRoad, GiFlexibleLamp } from 'react-icons/gi';

function Icon(props) {
  switch (props.symbol) {
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
      return <GiRoad />;
    case 'CornorLamp':
      return <GiFlexibleLamp />;
    default:
      return <span>Unknown icon: {props.symbol}</span>;
  }
}

export default Icon;