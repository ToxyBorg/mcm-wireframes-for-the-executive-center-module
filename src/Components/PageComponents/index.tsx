import "server-only";

import {
	PageComponentsType,
	PagesComponentData,
} from "./Data/PagesComponentsData";
import { LineChart } from "./LineChart";
import { LineChartProps } from "./LineChart/LineChartData";
import { PieChartProps } from "./PieChart/PieChartData";
import { PieChart } from "./PieChart";

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
				} else if (component.ComponentName === "Pie Chart") {
					function isPieChartProps(
						obj: typeof component.Config
					): obj is PieChartProps {
						// Checking if properties exist in PieChartProps
						return (
							(obj as PieChartProps).data !== undefined &&
							(obj as PieChartProps).options !== undefined
						);
					}

					if (isPieChartProps(component.Config)) {
						// TypeScript knows that component.Config is of type PieChartProps here
						// Generate a PieChart component.Config
						return (
							<PieChart
								options={component.Config.options}
								data={component.Config.data}
								key={index}
							/>
						);
					} else {
						// TypeScript knows that component.Config is not of type PieChartProps" here
						// We return a div that tells us the config is wrong for PieChart
						return (
							<div key={index}>
								The Pie Chart Config For Element {index} is Wrong!
							</div>
						);
					}
				}
			})}
		</>
	);
};
