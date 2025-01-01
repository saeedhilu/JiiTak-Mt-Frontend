import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/Card";
import GenderAgeBarChart from "@/components/analytics/AgeCharts";
import SummaryStatics from "@/components/analytics/SummaryStaticsCards";
const cardData = [
    // Dummy Data 
    {
        id: 5,
        title: "抽選利用回数",
        value: "125回 / 今月",
        description: "85回 (前月の今日時点)",
        highlight: "+47%",
        text: "2024年2月1日 - 2024年2月5日",
        isPositive: true,
    },
    {
        id: 6,
        title: "アカウント削除数",
        value: "10人 / 今月",
        description: "8人 (前月の今日時点)",
        highlight: "+25%",
        text: "2024年2月1日 - 2024年2月5日",
        isPositive: false,
    },
];

const Dashboard = () => {
    return (
        <>
            <SummaryStatics />
            <div className="bg-background pl-6 pr-6 xxk1:bg-red-950">
                <div className="flex flex-col xxk1:flex-col xxl:flex-row  lg:bg-green-400   gap-6">
                    <div className=" first bg-white shadow-md rounded-lg p-6 xxl:bg-black     ">
                        <GenderAgeBarChart />
                    </div>

                    <div className="second flex bg-indigo-500 flex-col sm:flex-row   lg:flex-row md:bg-violet-700 lg:bg-red-500  xxl:bg-yellow-200 xxl:flex-row gap-6 w-full   h-44">
                        {cardData.map((card) => (
                            <Card key={card.id} className="flex-1">
                                <CardHeader>
                                    <CardTitle>{card.title}</CardTitle>
                                    <CardDescription>{card.text ? card.text : ""}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xl font-bold">{card.value}</p>
                                    <div
                                        className="flex justify-between"
                                    >
                                        <p>{card.description}</p>
                                        <p className={`text-sm ${card.isPositive ? "text-green-500" : "text-red-500"
                                            }`} >{card.highlight}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
