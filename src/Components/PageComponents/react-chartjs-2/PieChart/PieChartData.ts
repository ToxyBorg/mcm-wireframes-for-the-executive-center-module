import "server-only"

import { ChartData, ChartOptions } from "chart.js";

export interface PieChartProps {
    options: ChartOptions<"pie">;
    data: ChartData<"pie">;
}
export const PieChart_init = (inputs?: Partial<PieChartProps>): PieChartProps => {
    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const defaults = {
        options: {
            plugins: {
                legend: {
                    position: 'top' as const,

                },
                title: {
                    display: true,
                    position: 'top' as const,
                    text: 'Chart.js Pie Chart',
                },

            },

        },
        data: {
            labels,
            datasets: [
                {
                    label: 'default label',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        }
    };
    return {
        ...defaults,
        ...inputs,
    }

};