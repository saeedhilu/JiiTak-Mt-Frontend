import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../ui/Card";
import GenderAgeBarChart from "./AgeCharts";

const cardData = [

    {
        id: 1,
        title: "ユーザー登録数累計", // Total User Registrations
        value: "450人", // 450 users
        description: "400人 (前月分比較)", // 400 users (Previous month)
        highlight: "+12.5%", // Increase by 12.5%
        isPositive: true, // Indicates positive growth
    },
    {
        id: 2,
        title: "アクティブユーザー", // Active Users
        value: "50人 / 今月", // 50 users this month
        description: "12人 (前月分比較)", // 12 users (Previous month)
        highlight: "+316.6%", // Increase by 316.6%
        text: "2024年2月1日 - 2024年2月5日",
        isPositive: true,
    },
    {
        id: 3,
        title: "定着率", // Retention Rate
        value: "10% / 今月", // 10% this month
        description: "12% (前月分比較)", // 12% (Previous month)
        highlight: "-16.6%", // Decrease by 16.6%
        text: "2024年1月1日 - 2024年1月31日",
        isPositive: false,
    },
    {
        id: 4,
        title: "平均換回数", // Average Visits
        value: "4回 / 今月", // 4 times this month
        description: "2回 (前月の今日時点)", // 2 times (As of the same day last month)
        highlight: "+100%", // Increase by 100%
        text: "2024年2月1日 - 2024年2月5日",
        isPositive: true,
    },
];

const SummaryStatics = () => {
    return (
        <div className=" bg-background pl-6 pr-6">
            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {cardData.map((card) => (

                    <Card key={card.id}>

                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription className="text-sm font-thin" >{card.text ? card.text : ""}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl font-bold">{card.value ?  card.value : '-'}</p>
                            <div
                                className="flex justify-between"
                            >
                                <p className="font-thin text-sm">{card.description}</p>
                                <p className={`text-sm ${card.isPositive ? "text-green-500" : "text-red-500"
                                    }`} >{card.highlight ? card.highlight : '0%'}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>


        </div>
    );
};

export default SummaryStatics;
