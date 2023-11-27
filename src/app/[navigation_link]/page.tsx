import { PageComponents } from "@/Components/PageComponents";
import "server-only";

interface NavigationLinkPageProps {
	params: {
		navigation_link: string;
	};
}
const NavigationLinkPage = ({ params }: NavigationLinkPageProps) => {
	return (
		<>
			{/* <div>navigation_link: {params.navigation_link}</div> */}
			<PageComponents PageLinkName={params.navigation_link} />
		</>
	);
};

export default NavigationLinkPage;
