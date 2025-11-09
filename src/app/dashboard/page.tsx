'use client';

import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';

export default function ChartPage() {
    const lineChartRef = useRef<HTMLDivElement | null>(null);
    const pieChartRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const lineChartEl = lineChartRef.current;
        const pieChartEl = pieChartRef.current;

        let lineChart: echarts.ECharts | null = null;
        if (lineChartEl) {
            lineChart = echarts.init(lineChartEl);
            lineChart.setOption({
                title: {text: 'Cumulative profit'},
                tooltip: {trigger: 'axis'},
                xAxis: {type: 'category', data: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']},
                yAxis: {type: 'value'},
                series: [{name: 'Profit', type: 'line', data: [120, 200, 150, 80, 70, 110, 130]}],
            });
        }

        let pieChart: echarts.ECharts | null = null;
        if (pieChartEl) {
            pieChart = echarts.init(pieChartEl);
            pieChart.setOption({
                title: {text: 'Number of trades per coin', left: 'center'},
                tooltip: {trigger: 'item'},
                legend: {orient: 'vertical', left: 'left'},
                series: [
                    {
                        name: 'Number of trades',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            {value: 1048, name: 'BTC'},
                            {value: 735, name: 'ETH'},
                            {value: 580, name: 'DOGE'},
                            {value: 484, name: 'LINK'},
                            {value: 300, name: 'LTC'},
                        ],
                        emphasis: {itemStyle: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'}},
                    },
                ],
            });
        }

        // Cleanup
        return () => {
            if (lineChart) lineChart.dispose();
            if (pieChart) pieChart.dispose();
        };
    }, []);

    return (
        <div className="p-8 space-y-12">
            <div>
                <h2 className="text-xl font-bold mb-2">Cumulative profit chart</h2>
                <div ref={lineChartRef} style={{width: '100%', height: '400px'}}/>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Number of trades per coin chart</h2>
                <div ref={pieChartRef} style={{width: '100%', height: '400px'}}/>
            </div>
        </div>
    );
}