// DataGridData.ts
import "server-only"

import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { faker } from '@faker-js/faker';

export interface DataGridComponentProps {
    title: string,
    columns: GridColDef[];
    rows: GridRowsProp;
}

export const DataGridComponent_init = (inputs?: Partial<DataGridComponentProps>): DataGridComponentProps => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
    ];

    const rows: GridRowsProp = Array.from({ length: 100 }, (_, id) => ({
        id,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
    }));


    const defaults: DataGridComponentProps = {
        title: "Default Data Grid Title",
        columns,
        rows,
    };

    return {
        ...defaults,
        ...inputs,
    }
};