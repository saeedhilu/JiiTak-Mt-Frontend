import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "../components/ui/card";

const cardData = [

    {
        id: 1,
        title: "ユーザー登録数累計",
        value: "450人",
        description: "400人 (前月分比較)",
        highlight: "+12.5%",
        isPositive: true,
    },
    {
        id: 2,
        title: "アクティブユーザー",
        value: "50人 / 今月",
        description: "12人 (前月分比較)",
        highlight: "+316.6%",
        text: "2024年2月1日 - 2024年2月5日",
        isPositive: true,
    },
    {
        id: 3,
        title: "定着率",
        value: "10% / 今月",
        description: "12% (前月分比較)",
        highlight: "-16.6%",
        text: "2024年1月1日 - 2024年1月31日",
        isPositive: false,
    },
    {
        id: 4,
        title: "平均換回数",
        value: "4回 / 今月",
        description: "2回 (前月の今日時点)",
        highlight: "+100%",
        text: "2024年2月1日 - 2024年2月5日",
        isPositive: true,
    },
];

const SummaryStatics = () => {
    return (
        <div className=" bg-background pl-6 pr-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {cardData.map((card) => (

                    <Card key={card.id}>

                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                            <CardDescription className="text-sm font-thin" >{card.text ? card.text : ""}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl font-bold">{card.value ? card.value : '-'}</p>
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
