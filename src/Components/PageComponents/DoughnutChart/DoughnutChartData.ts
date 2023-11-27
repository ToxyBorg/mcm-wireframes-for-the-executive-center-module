import "server-only"

import { ChartData, ChartOptions } from 'chart.js';
import { faker } from '@faker-js/faker';

export interface DoughnutChartProps {
    options: ChartOptions<"doughnut">;
    data: ChartData<"doughnut">;
}

export const DoughnutChart_init = (inputs?: Partial<DoughnutChartProps>): DoughnutChartProps => {
    const labels = ['Red', 'Blue', 'Yellow'];
    const defaults = {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top' as const,
                },
                title: {
                    display: true,
                    text: 'Chart.js Doughnut Chart',
                },
            },
        },
        data: {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                    ],
                },

            ].map(dataset => ({
                ...dataset,
                data: labels.map(() => faker.number.int({ min: 50, max: 1000 })),
            }))
        }
    };
    return {
        ...defaults,
        ...inputs,
    }
};