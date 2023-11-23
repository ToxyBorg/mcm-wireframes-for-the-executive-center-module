import "server-only";

import { NavLink } from "@mantine/core";
import Link from "next/link";

export interface NavbarLinkProps {
	NavbarLinkID: string;
	Active?: boolean;
	Href: string;
	NavbarLinkLabel: string;
	NavbarLinkDescription?: string;
}

const NavbarLink = (props: NavbarLinkProps) => {
	return (
		<NavLink
			component={Link}
			href={props.Href}
			active={props.Active}
			label={props.NavbarLinkLabel}
			description={props.NavbarLinkDescription}
		/>
	);
};

export default NavbarLink;
