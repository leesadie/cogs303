'use client';

import { inter_med } from "@/app/fonts";
import DonutRatio from "../vis/DonutRatio";
import Donut from "../vis/Donut";
import { IoMdPerson } from "react-icons/io";
import { HiOutlineCircleStack } from "react-icons/hi2";
import HorBarChart from "../vis/HorBarChart";

const DefaultLayout = () => {
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
        <div>
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
                        Leads to Opportunities Ratio
                    </div>
                    <DonutRatio x={147} y={90} xLabel="Leads" yLabel="Opportunities"/>
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
                        Opportunities to Contract Ratio
                    </div>
                    <DonutRatio x={80} y={25} xLabel="Opportunities" yLabel="Contracts"/>
                </div>
                <div className="bg-gray-100 col-span-2 rounded-md flex flex-col">
                    <div className="mt-2 ml-4 text-xl">
                        Top 5 Sales Items
                    </div>
                    <HorBarChart data={salesData} width={500} height={200} />
                </div>
                <div className="bg-gray-100 col-span-2 rounded-md flex flex-col">
                    <div className="mt-2 ml-4 text-xl">
                        Next Steps
                    </div>
                    <ul className="list-decimal ml-5 text-lg mt-2">
                        <li className="ml-5">
                            Increase efforts in turning prospective customers into contracted customers.
                        </li>
                        <li className="ml-5">
                            Contracts should be reviewed.
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default DefaultLayout;