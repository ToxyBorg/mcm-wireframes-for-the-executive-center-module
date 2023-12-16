// import "server-only"

import { faker } from "@faker-js/faker";

export interface VirtualizedListRow {
    id: string;
    [key: string]: string | number;
}

export interface VirtualizedListProps {
    rows: VirtualizedListRow[];
    title: string;
}

export const VirtualizedList_init = (inputs?: Partial<VirtualizedListProps>): VirtualizedListProps => {
    const defaultRows: VirtualizedListRow[] = Array.from({ length: 1000 }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
    }));

    const defaults = {
        rows: defaultRows,
        // rowHeight: 30,
        title: 'Default Virtualized List Title',
    };

    return {
        ...defaults,
        ...inputs,
    };
};