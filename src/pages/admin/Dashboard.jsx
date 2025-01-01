import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import GenderAgeBarChart from "@/charts/AgeCharts";
import SummaryStatics from "@/charts/SummaryStaticsCards";


const cardData = [

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
            <div className="bg-background pl-6 pr-6 ">
                <div className="flex flex-col  xxk2:flex-row    gap-6">
                    <div className="second flex  flex-col sm:flex-row  xxl:order-2  lg:flex-col xxk2:order-2   xxl:flex-row gap-6 w-full   h-44">
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
                    <div className=" first bg-white shadow-md rounded-lg p-6">
                        <GenderAgeBarChart />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
