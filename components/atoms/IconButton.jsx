import { FaWheelchair, FaBlind, FaVolumeUp, FaUserCheck, FaBrain } from 'react-icons/fa';

const iconMapping = {
  Motriz: <FaWheelchair />,
  Visual: <FaBlind />,
  Auditiva: <FaVolumeUp />,
  Intelectual: <FaUserCheck />,
  Neurodivergente: <FaBrain />,
};

const IconButton = ({ condition, onClick }) => {
  return (
    <button onClick={onClick} className="p-2 border rounded-md hover:bg-blue-200">
      {iconMapping[condition]}
    </button>
  );
};

export default IconButton;
