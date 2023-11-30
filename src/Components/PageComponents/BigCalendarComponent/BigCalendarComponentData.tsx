import "server-only";

import { faker } from "@faker-js/faker";
import { Event } from "react-big-calendar";

export interface BigCalendarComponentProps {
	calendarTitle: string;
	events: Event[];
}

export const BigCalendarComponent_init = (
	inputs?: Partial<BigCalendarComponentProps>
): BigCalendarComponentProps => {
	const defaults = {
		calendarTitle: "Default Big Calendar",
		events: Array.from({ length: 10 }, () => ({
			start: faker.date.recent({
				days: faker.number.int({ min: 0.5, max: 7 }),
			}),
			end: faker.date.soon({
				days: faker.number.int({ min: 0.5, max: 7 }),
			}),
			title: `${faker.person.fullName()}'s shift`,
		})),
	};

	return {
		...defaults,
		...inputs,
	};
};
