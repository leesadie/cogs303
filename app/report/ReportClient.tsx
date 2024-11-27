'use client';

import { inter_bold, inter_med } from "../fonts";
import BarChart from "../components/vis/BarChart";
import ButtonSm from "../components/ButtonSm";
import { IoMdPrint } from "react-icons/io";

import getCurrentUser from "../actions/getCurrentUser";

interface ReportProps {
    currentUser: {
        level: string;
        division: string;
    }
}

const ReportClient: React.FC<ReportProps> = ({
    currentUser
}) => {
    const sampleData = [
        { label: "UK", value: 30 },
        { label: "France", value: 80 },
        { label: "Australia", value: 45 },
        { label: "Netherlands", value: 60 },
        { label: "Germany", value: 20 },
        { label: "Norway", value: 90 },
    ];

    return (
        <div className="flex flex-row pl-4 mt-4 text-neutral-900">
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

                    {/* C-suite view */}
                    {currentUser && (currentUser.level === '1' || currentUser.level === '2') && (
                        <div className="flex flex-col">
                            <div className={`mt-5 text-xl ${inter_med.className}`}>
                                Growth Overview
                            </div>
                            <div className="mt-2 text-lg">
                                France has shown the greatest growth this quarter, with sales up by 60%, while
                                growth in Australia and the Netherlands has started to plateau. Both marketing
                                and prospecting efforts should increase focus in these countries.
                            </div>
                            <div className={`mt-5 text-xl ${inter_med.className}`}>
                                Beyond Q2
                            </div>
                            <ul className="list-decimal pl-4 text-lg mt-2">
                                <li>
                                    <p>
                                        Expansion into the East Asia market by the end of the fiscal year is expected to 
                                        <span className="bg-yellow-100 px-1 rounded">
                                            increase revenue by 40%.
                                        </span>{" "}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Marketing view */}
                    {currentUser && (currentUser.division === 'Marketing' || currentUser.division === 'Sales') && (
                        <div className="flex flex-col">
                            <div className={`mt-5 text-xl ${inter_med.className}`}>
                                Next Steps
                            </div>
                            <ul className="list-decimal pl-4 text-lg mt-2">
                                <li>
                                    <p>
                                        Heighten focus in
                                        <span className="bg-yellow-100 px-1 rounded">
                                            Australia and the Netherlands
                                        </span>{" "}
                                        to increase growth.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Table of Contents */}
            <div className="flex flex-row ml-8 mr-4">
                <div className="border-l border-gray-300 h-[120px]"></div>
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
