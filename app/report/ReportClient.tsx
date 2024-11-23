'use client';

import { inter_bold, inter_med } from "../fonts";
import BarChart from "../components/vis/BarChart";
import ButtonSm from "../components/ButtonSm";
import { IoMdPrint } from "react-icons/io";

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
        <div className="flex flex-row pl-4 text-neutral-900">
            {/* Main Content */}
            <div className="flex-grow">
                <div className={`text-4xl ${inter_med.className}`} id="report-title">
                    Q1 Sales Report
                </div>
                <div className="text-2xl pt-5" id="sales-by-country">
                    Sales by Country
                </div>
                <div className="flex justify-right mt-5 p-6 rounded-md bg-gray-100 w-[650px] h-[450px]">
                    <BarChart
                        data={sampleData}
                        width={800}
                        height={600}
                        xAxisLabel="Country"
                        yAxisLabel="Number of Sales"
                    />
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
                        <li>
                            <p>
                                <span className="bg-yellow-100 px-1 rounded">
                                    4 retailers in Canada
                                </span>{" "}
                                have moved forward in the contracting process and should be finalized by the end of Q2.
                            </p>
                        </li>
                        <li>
                            <p>
                                Market forecasts show opportunities for{" "}
                                <span className="bg-yellow-100 px-1 rounded">
                                    growth in Germany
                                </span>
                                . Focus on prospecting here should be increased.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="text-2xl pt-5" id="sales-distribution">
                    Sales Distribution
                </div>
            </div>

            {/* Table of Contents */}
            <div className="flex flex-row ml-8 mr-4">
                <div className="border-l border-gray-300 h-[100px]"></div>
                <div className="pl-4">
                    <div className={`text-lg font-bold ${inter_bold.className}`}>
                        Contents
                    </div>
                    <ul className="mt-2 space-y-1 text-neutral-900">
                        <li>
                            <a href="#sales-by-country" className="hover:underline">
                                Sales by Country
                            </a>
                        </li>
                        <li>
                            <a href="#sales-distribution" className="hover:underline">
                                Sales Distribution
                            </a>
                        </li>
                    </ul>
                    <div className="mt-5">
                        <ButtonSm 
                            label="Print this page"
                            onClick={() => {}} // void; unnecessary functionality for scope
                            icon={IoMdPrint}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportClient;
