import "server-only";

import { NavLink } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import NavbarLink, { NavbarLinkProps } from "../../Shared/NavbarLink";

export interface NavbarAccordionProps {
	// ChildrenIDs: (typeof uuidv4)[];
	Active?: boolean;
	NavbarAccordionLabel: string;
	ChildrenNavbarLinks: NavbarLinkProps[];
}

const NavbarAccordion = (props: NavbarAccordionProps) => {
	return (
		<NavLink
			label={props.NavbarAccordionLabel}
			active={props.Active}
			childrenOffset={28}
		>
			{props.ChildrenNavbarLinks.map((ChildrenNavbarLink) => (
				<NavbarLink
					key={ChildrenNavbarLink.NavbarLinkID.toString()}
					NavbarLinkID={ChildrenNavbarLink.NavbarLinkID}
					Href={ChildrenNavbarLink.Href}
					NavbarLinkLabel={ChildrenNavbarLink.NavbarLinkLabel}
					NavbarLinkDescription={ChildrenNavbarLink.NavbarLinkDescription}
				/>
			))}
		</NavLink>
	);
};

export default NavbarAccordion;
