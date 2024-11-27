'use client';

import { inter_bold, inter_med } from "../fonts";
import { IoMdPerson, IoMdPrint } from "react-icons/io";
import { HiOutlineCircleStack } from "react-icons/hi2";

import ButtonSm from "../components/ButtonSm";
import { SafeUser } from "../types";

import DonutRatio from "../components/vis/DonutRatio";
import HorBarChart from "../components/vis/HorBarChart";
import RevBar from "../components/vis/RevBar";
import LineChart from "../components/vis/LineChart";

interface DashboardProps {
    currentUser?: SafeUser | null;
}

const DashboardClient: React.FC<DashboardProps> = ({
    currentUser
}) => {

    // hor bar chart
    const salesData = [
        { item: "Item A", sales: 150 },
        { item: "Item B", sales: 300 },
        { item: "Item C", sales: 120 },
        { item: "Item D", sales: 80 },
        { item: "Item E", sales: 250 },
        { item: "Item F", sales: 100 },
    ];

    // item dist
    const donutData = [
        { label: "A", value: 30 },
        { label: "B", value: 70 },
        { label: "C", value: 50 },
        { label: "D", value: 20 },
    ]

    // revenue by product group
    const revData = [
        { name: 'Small Lamps', value: 7.77 },
        { name: 'Alarm Clocks', value: 6.38 },
        { name: 'Large Lamps', value: 5.77 },
        { name: 'Coat Racks', value: 5.83 },
        { name: 'Small Storage', value: 4.71 },
        { name: 'Picture Frames', value: 4.09 },
        { name: 'Mirrors', value: 4.04 },
        { name: 'Pots and Plants', value: 3.86 },
        { name: 'Posters', value: 2.76 },
        { name: 'Canvas Art', value: 2.42 },
        { name: 'Light Fixtures', value: 1.94 },
        { name: 'Miscellaneous Decor', value: 1.69 },
        { name: 'Rugs', value: 1.59 },
        { name: 'Wall Organization', value: 1.32 },
    ]

    // revenue over the quarter (per month)
    const revTimeData = [
        { month: 'January', value1: 100, value2: 120},
        { month: 'February', value1: 130, value2: 110},
        { month: 'March', value1: 170, value2: 180},
        { month: 'April', value1: 150, value2: 160},
    ]

    // lead conversion rate
    const leadData = [
        { month: 'January', value1: 48},
        { month: 'February', value1: 44},
        { month: 'March', value1: 47},
        { month: 'April', value1: 54},
    ]

    return (
        <div className="flex flex-col mt-4 px-4 text-neutral-900">
            <div className="flex flex-row justify-between">
                <div className={`text-4xl ${inter_med.className}`}>
                    Sales KPI Dashboard
                </div>
                <ButtonSm 
                    label="Print this page"
                    onClick={() => {}} // void; unnecessary functionality for scope
                    icon={IoMdPrint}
                />
            </div>
            <div className="mt-10 mb-10 grid grid-cols-4 gap-4 grid-rows-3">
                {currentUser && (currentUser.level === '1' || currentUser.level === '2')? (
                    <>
                        <div className="bg-gray-100 col-span-2 p-20 flex flex-col justify-center items-center rounded-md">
                            <div className={`text-5xl ${inter_med.className}`}>
                                $498,567 CAD
                            </div>
                            <div className="text-2xl pt-3">
                                Average Monthly Revenue
                            </div>
                        </div>
                        <div className="bg-gray-100 col-span-2 row-span-3 rounded-md flex flex-col">
                            <div className="mt-2 ml-4 text-xl">
                                Total Revenue by Product Group
                            </div>
                            <RevBar data={revData} width={300} height={300}/>
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
                                Actual vs. Estimated Revenue
                            </div>
                            <LineChart data={revTimeData} width={500} height={200}/>
                        </div>
                    </>
                ) : (
                    <>
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
                                Leads to Opportunities Conversion Rate
                            </div>
                            <LineChart data={leadData} width={500} height={200}/>
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
                            <ul className="list-decimal mx-5 text-lg mt-2">
                                <li className="ml-5">
                                    Increase efforts in converting prospective customers into contracted customers as leads to opportunites conversion 
                                    rate has been consistently greater than the opportunities to contracts ratio for Q1.
                                </li>
                                <li className="ml-5">
                                    Contracts should be reviewed.
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default DashboardClient;