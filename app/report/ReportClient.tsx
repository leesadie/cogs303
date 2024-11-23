'use client';

import { inter_bold, inter_med } from "../fonts";
import BarChart from "../components/vis/BarChart";

const ReportClient = () => {

    const sampleData = [
        { label: "UK", value: 30 },
        { label: "France", value: 80 },
        { label: "Australia", value: 45 },
        { label: "Netherlands", value: 60 },
        { label: "Germany", value: 20 },
        { label: "Norway", value: 90 },
      ];

    return (
        <div className="flex flex-col pl-4 text-neutral-900">
            <div className={`text-4xl ${inter_med.className}`}>
                Q1 Sales Report
            </div>
            <div className="text-2xl pt-5">
                Sales by Country
            </div>
            <div className="flex justify-right mt-5 p-6 rounded-md bg-gray-100 w-[650px] h-[450px]">
                <BarChart data={sampleData} width={800} height={600} 
                    xAxisLabel="Country" yAxisLabel="Number of Sales"/>
            </div>
            <div className="w-[650px]">
                <div className="mt-5 text-lg">
                    Q1 showed the greatest amount of sales from Norway, which is expected given our target market.
                </div>
                <div className={`mt-5 text-xl ${inter_med.className}`}>
                    Moving into Q2
                </div>
                <div className="mt-2 text-lg">
                    The following items are in the pipeline and should be prioritized:
                </div>
                <ul className="list-decimal pl-4 text-lg mt-2">
                    <li>4 retailers in Canada have moved forward in the contracting process and should be finalized by the end of Q2.</li>
                    <li>Market forecasts show opportunities for growth in Germany. Focus on prospecting here should be increased.</li>
                </ul>
            </div>
        </div>
    );
}

export default ReportClient;