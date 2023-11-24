import "server-only";

import {
	PageComponentsType,
	PagesComponentData,
} from "./Data/PagesComponentsData";
import { LineChart } from "./LineChart";
import { LineChartProps } from "./LineChart/LineChartData";

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
				<GettingComponentsForPage
					PagesComponentData={pageComponents.PageComponents}
				/>
			) : (
				<div>Page is not valid</div>
			)}
		</>
	);
};

/* ########################################################################### */

interface GettingComponentsForPage {
	PagesComponentData: PageComponentsType[];
}

const GettingComponentsForPage = (props: GettingComponentsForPage) => {
	return (
		<>
			{props.PagesComponentData.map((component, index) => {
				if (component.ComponentName === "Line Chart") {
					function isLineChartProps(
						obj: typeof component.Config
					): obj is LineChartProps {
						// Checking if properties exist in LineChartProps
						return (
							(obj as LineChartProps).data !== undefined &&
							(obj as LineChartProps).options !== undefined
						);
					}

					if (isLineChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type LineChartProps here
						// Generate a LineChart component.Config
						return (
							<LineChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type LineChartProps" here
						// We return a div that tells us the config is wrong for LineChart
						return (
							<div key={index}>
								The Line Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				}
			})}
		</>
	);
};
