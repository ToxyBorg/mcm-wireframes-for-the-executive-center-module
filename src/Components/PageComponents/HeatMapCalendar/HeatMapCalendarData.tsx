// HeatMapData.ts

"use server";
// import "server-only";

import { faker } from "@faker-js/faker";
import { HeatMapProps, HeatMapValue } from "@uiw/react-heat-map";

export interface HeatMapCalendarProps {
	options: HeatMapProps;
	data: HeatMapValue[];
}

export const HeatMapCalendar_init = (
	inputs?: Partial<HeatMapCalendarProps>
): HeatMapCalendarProps => {
	const defaults: HeatMapCalendarProps = {
		options: {
			rectSize: 15,
			legendCellSize: 15,
		},
		data: Array.from({ length: 365 }, (_, idx) => ({
			date: new Date(new Date().getFullYear(), new Date().getMonth(), idx + 1)
				.toISOString()
				.split("T")[0],
			count: faker.number.int({ min: 0, max: 5 }),
		})),
	};
	return {
		...defaults,
		...inputs,
	};
};
