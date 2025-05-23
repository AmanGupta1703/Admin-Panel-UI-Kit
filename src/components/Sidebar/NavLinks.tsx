import { mainNavItems } from "../../utils";

import { NavItem } from "../ui";

const NavLinks = () => {
  return (
    <ul className="space-y-1 p-2.5">
      {mainNavItems.map((navItem) => (
        <NavItem key={navItem.label} {...navItem} />
      ))}
    </ul>
  );
};

export default NavLinks;
