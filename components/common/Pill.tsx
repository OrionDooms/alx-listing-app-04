interface PillProps {
  label: string;
  isActive?: boolean;
    onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button onClick={onClick}  className={`text-sm border transition-all px-4 py-2 rounded-full ${
      isActive
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`}>
      {label}
    </button>
  );
};

export default Pill;