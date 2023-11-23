import { NavbarAccordionProps } from "../NavbarAccordion";
import { v4 as uuidv4 } from "uuid";

export const NavbarAccordionLinksData: NavbarAccordionProps[] = [
	{
		NavbarAccordionLabel: "Overview of clinic operations",
		ChildrenNavbarLinks: [
			{
				NavbarLinkLabel: "Patients",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could display graphs and data related to patient demographics, admission and discharge rates, average length of stay, and patient satisfaction scores.",
			},
			{
				NavbarLinkLabel: "Staff",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"Information about the number of doctors, nurses, and other staff, their schedules, and any other relevant data.",
			},
			{
				NavbarLinkLabel: "Equipment",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"Status of medical equipment, maintenance schedules, usage statistics, etc.",
			},
		],
	},
	{
		NavbarAccordionLabel: "ZKR Nurse Call System",
		ChildrenNavbarLinks: [
			{
				NavbarLinkLabel: "Nurse Call Data",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could display data on the number of calls, response times, and resolution times.",
			},
			{
				NavbarLinkLabel: "Nurse Call History",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"A log of past nurse calls, useful for analyzing response times and patterns.",
			},
			{
				NavbarLinkLabel: "ZKR System Status",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could show the current status of the system, including any ongoing issues or outages.",
			},
		],
	},
	{
		NavbarAccordionLabel: "GE Healthcare Medical Imaging",
		ChildrenNavbarLinks: [
			{
				NavbarLinkLabel: "Medical Imaging Data",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could show data on the number of images taken, types of images, and usage rates of the imaging equipment.",
			},
			{
				NavbarLinkLabel: "GE Healthcare System Status",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could provide an overview of the status of the imaging system, including any maintenance schedules or reported issues.",
			},
		],
	},
	{
		NavbarAccordionLabel: "Masimo Patient Monitoring",
		ChildrenNavbarLinks: [
			{
				NavbarLinkLabel: "Patient Monitoring Data",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could display data on the number of patients currently being monitored, types of monitoring, and any alerts or issues.",
			},
			{
				NavbarLinkLabel: "Masimo System Status",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could show the current status of the monitoring system, including any ongoing issues or outages.",
			},
		],
	},
	{
		NavbarAccordionLabel: "Finances",
		ChildrenNavbarLinks: [
			{
				NavbarLinkLabel: "Revenue",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could include a line chart showing revenue over time, a breakdown of revenue by department or service, and a data table with more detailed information.",
			},
			{
				NavbarLinkLabel: "Expenses",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"Similar to the revenue page, but for expenses. This could include salaries, equipment costs, overhead, etc.",
			},
			{
				NavbarLinkLabel: "Profit & Loss Statement",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"A summary of revenues and expenses, showing net profit or loss over a selected period.",
			},
			{
				NavbarLinkLabel: "Budgets",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"A page where executives can view and manage budgets for different departments or projects.",
			},
		],
	},
	{
		NavbarAccordionLabel: "CCTV Server",
		ChildrenNavbarLinks: [
			{
				NavbarLinkLabel: "Footage",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could provide access to live feeds from the CCTV cameras.",
			},
			{
				NavbarLinkLabel: "Incidents",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could display data on any security incidents, including time, location, and nature of the incident.",
			},
			{
				NavbarLinkLabel: "CCTV System Status",
				NavbarLinkID: uuidv4(),
				NavbarLinkDescription:
					"This page could show the current status of the CCTV system, including any ongoing issues or outages.",
			},
		],
	},
].map((item) => ({
	...item,
	ChildrenNavbarLinks: item.ChildrenNavbarLinks.map((link) => ({
		...link,
		Href: `/${link.NavbarLinkLabel.replace(/\s/g, "_")}`,
	})),
}));
