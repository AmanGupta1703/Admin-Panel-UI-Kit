type TNavItemProps = {
  label: string;
  icon: string;
  count?: number;
  isActive: boolean;
};

const NavItem = ({ label, icon, count, isActive }: TNavItemProps) => {
  return (
    <li
      className={`p-1 flex items-center justify-between cursor-pointer 
    transition-colors duration-200 rounded-md hover:bg-white ${isActive ? "bg-white" : ""}`}>
      <span className="flex items-center space-x-1">
        <span className="">{icon}</span>
        <span className="text-gray-800 font-medium text-xs">{label}</span>
      </span>
      <span className="text-xs text-gray-500">{count}</span>
    </li>
  );
};

export default NavItem;
