interface NavigationLinkPageProps {
	params: {
		// navigation_root: string;
		navigation_link: string;
	};
}
const NavigationLinkPage = ({ params }: NavigationLinkPageProps) => {
	return (
		<>
			{/* <div>navigation_root: {params.navigation_root}</div> */}
			<div>navigation_link: {params.navigation_link}</div>
		</>
	);
};

export default NavigationLinkPage;
