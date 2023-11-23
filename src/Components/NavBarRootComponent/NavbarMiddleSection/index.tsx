import "server-only";
import { NavbarAccordionLinksData } from "./Data/NavbarAccordionData";
import NavbarAccordion from "./NavbarAccordion";

interface NavbarMiddleSectionProps {}

const NavbarMiddleSection = (props: NavbarMiddleSectionProps) => {
	return (
		<>
			{NavbarAccordionLinksData.map((NavbarAccordionInfo) => (
				<NavbarAccordion
					key={NavbarAccordionInfo.NavbarAccordionLabel}
					NavbarAccordionLabel={NavbarAccordionInfo.NavbarAccordionLabel}
					ChildrenNavbarLinks={NavbarAccordionInfo.ChildrenNavbarLinks}
				/>
			))}
		</>
	);
};

export default NavbarMiddleSection;
