import { teammateNavItems } from "../../utils";

import { NavItem } from "../ui";

const TeammateList = () => {
  return (
    <div className="p-2.5">
      <h2 className="uppercase text-xs text-gray-800 font-bold tracking-wide">Teammates</h2>

      <ul className="space-y-1 mt-1">
        {teammateNavItems.map((teamMateNavItem) => (
          <NavItem key={teamMateNavItem.label} {...teamMateNavItem} />
        ))}
      </ul>
    </div>
  );
};

export default TeammateList;
