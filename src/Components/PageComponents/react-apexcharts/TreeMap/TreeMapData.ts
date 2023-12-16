import "server-only"

// TreeMapData.ts
import { faker } from "@faker-js/faker";

export interface TreeMapProps {
    series: ApexAxisChartSeries | ApexNonAxisChartSeries;
    options: ApexCharts.ApexOptions;
}

export const TreeMap_init = (inputs?: Partial<TreeMapProps>): TreeMapProps => {
    const defaultOptions: ApexCharts.ApexOptions = {
        plotOptions: {
            treemap: {
                enableShades: true,
            }
        },
        legend: {
            show: true
        },
        chart: {
            type: 'treemap'
        },
    };

    const defaultSeries: ApexAxisChartSeries | ApexNonAxisChartSeries = [
        {
            name: 'Metric 1',
            data: Array.from({ length: 12 }, () => ({ x: faker.lorem.word(), y: faker.number.int({ min: 10, max: 100 }) }))
        },
        {
            name: 'Metric 2',
            data: Array.from({ length: 12 }, () => ({ x: faker.lorem.word(), y: faker.number.int({ min: 10, max: 100 }) }))
        },
        // Add more metrics as needed
    ];

    const defaults: TreeMapProps = {
        series: defaultSeries,
        options: defaultOptions,
    }

    return {
        ...defaults,
        ...inputs,
    };
};