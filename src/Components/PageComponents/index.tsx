import "server-only";

import { PagesComponentData } from "./Shared/Data/PagesComponentsData";
import { WrapperWithWrappedComponents } from "./Shared/WrapperWithWrappedComponents";
interface PageComponentsProps {
	PageLinkName: string;
}

export const PageComponents = (props: PageComponentsProps) => {
	const pageComponents = PagesComponentData.find(
		(page) => page.PageLinkName === props.PageLinkName
	);

	return (
		<>
			{pageComponents ? (
				<WrapperWithWrappedComponents
					WrapperWithWrappedData={pageComponents.PageComponents}
				/>
			) : (
				<div>Page is not valid</div>
			)}
		</>
	);
};
