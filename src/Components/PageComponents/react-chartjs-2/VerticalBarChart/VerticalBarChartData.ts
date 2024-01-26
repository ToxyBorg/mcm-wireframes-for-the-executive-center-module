import "server-only"

import { ChartData, ChartOptions } from 'chart.js';
import { faker } from '@faker-js/faker';

export interface VerticalBarChartProps {
    options: ChartOptions<"bar">;
    data: ChartData<"bar">;
}

export const VerticalBarChart_init = (inputs?: Partial<VerticalBarChartProps>): VerticalBarChartProps => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const defaults = {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart',
                },
            },
        },
        data: {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                    label: 'Dataset 2',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ].map(dataset => ({
                ...dataset,
                data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            }))
        }
    };
    return {
        ...defaults,
        ...inputs,
    }
};