'use client';

import { inter_bold, inter_med } from "../fonts";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineCircleStack } from "react-icons/hi2";

import HorBarChart from "../components/vis/HorBarChart";
import Donut from "../components/vis/Donut";
import DonutRatio from "../components/vis/DonutRatio";

const DashboardClient = () => {

    // Horizontal bar chart data
    const salesData = [
        { item: "Item A", sales: 150 },
        { item: "Item B", sales: 300 },
        { item: "Item C", sales: 120 },
        { item: "Item D", sales: 80 },
        { item: "Item E", sales: 250 },
        { item: "Item F", sales: 100 },
    ];

    const donutData = [
        { label: "A", value: 30 },
        { label: "B", value: 70 },
        { label: "C", value: 50 },
        { label: "D", value: 20 },
    ]

    return (
        <div className="flex flex-col pl-4 text-neutral-900">
            <div className={`text-4xl ${inter_med.className}`}>
                Sales KPI Dashboard
            </div>
            <div className="mt-10 mb-10 grid grid-cols-4 gap-4 grid-rows-3">
                <div className="bg-gray-100 col-span-2 p-20 flex flex-col justify-center items-center rounded-md">
                    <div className={`text-5xl ${inter_med.className}`}>
                        $498,567 CAD
                    </div>
                    <div className="text-2xl pt-3">
                        Average Monthly Revenue
                    </div>
                </div>
                <div className="bg-gray-100 col-span-2 rounded-md flex flex-col">
                    <div className="mt-2 ml-4 text-xl">
                        Item Distribution
                    </div>
                    <Donut data={donutData}/>
                </div>
                <div className="bg-indigo-200 col-span-1 rounded-md p-5 flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <IoMdPerson size={40}/>
                    </div>
                    <div className={`text-5xl ${inter_med.className}`}>
                        360
                    </div>
                    <div className="text-2xl pt-3">
                        New Customers
                    </div>
                </div>
                <div className="bg-blue-200 col-span-1 rounded-md p-5 flex flex-col justify-center items-center">
                    <div className="mb-4">
                        <HiOutlineCircleStack size={40}/>
                    </div>
                    <div className={`text-5xl ${inter_med.className}`}>
                        1.1M
                    </div>
                    <div className="text-2xl pt-3">
                        Quarterly Profit
                    </div>
                </div>
                <div className="bg-gray-100 col-span-2 rounded-md flex flex-col">
                    <div className="mt-2 ml-4 text-xl">
                        Leads to Opportunities Ratio
                    </div>
                    <DonutRatio x={147} y={90} xLabel="Leads" yLabel="Opportunities"/>
                </div>
                <div className="bg-gray-100 col-span-2 rounded-md flex flex-col">
                    <div className="mt-2 ml-4 text-xl">
                        Top 5 Sales Items
                    </div>
                    <HorBarChart data={salesData} width={500} height={200} />
                </div>
                <div className="bg-gray-100 col-span-2 rounded-md flex flex-col">
                    <div className="mt-2 ml-4 text-xl">
                        Opportunities to Contract Ratio
                    </div>
                    <DonutRatio x={80} y={25} xLabel="Opportunities" yLabel="Contracts"/>
                </div>
            </div>
        </div>
    );
}

export default DashboardClient;