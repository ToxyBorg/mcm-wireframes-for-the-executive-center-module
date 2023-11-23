import "server-only";

import {
	Accordion,
	AccordionControl,
	AccordionItem,
	AccordionPanel,
	AppShellNavbar,
	AppShellSection,
	Button,
	NavLink,
	Stack,
	Text,
} from "@mantine/core";
import Link from "next/link";
import NavbarMiddleSection from "./NavbarMiddleSection";

interface NavBarRootComponentProps {}

export const NavBarRootComponent = (props: NavBarRootComponentProps) => {
	return (
		<AppShellNavbar>
			<AppShellSection
				p={"xs"}
				component={Link}
				href='/'
				td={"none"}
			>
				<Text
					size='xl'
					fw={750}
				>
					Home
				</Text>
			</AppShellSection>

			<AppShellSection grow>
				<NavbarMiddleSection />
			</AppShellSection>

			<AppShellSection p={"xs"}>
				<h1>Menu</h1>
			</AppShellSection>
		</AppShellNavbar>
	);
};
