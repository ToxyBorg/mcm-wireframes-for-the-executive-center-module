import { faker } from "@faker-js/faker";

export interface Column {
    header: string;
    accessor: string;
}

export interface Row {
    id: string;
    [key: string]: string | number;
}

export interface TableComponentProps {
    columns: Column[];
    rows: Row[];
}

export const TableComponent_init = (inputs?: Partial<TableComponentProps>): TableComponentProps => {
    const defaultColumns: Column[] = [
        { header: 'Name', accessor: 'name' },
        { header: 'Age', accessor: 'age' },
        { header: 'Email', accessor: 'email' },
    ];

    const defaultRows: Row[] = Array.from({ length: 7 }, () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        age: faker.number.int({ min: 20, max: 60 }),
        email: faker.internet.email(),
    }));

    const defaults = {
        columns: defaultColumns,
        rows: defaultRows,
    };

    return {
        ...defaults,
        ...inputs,
    };
};