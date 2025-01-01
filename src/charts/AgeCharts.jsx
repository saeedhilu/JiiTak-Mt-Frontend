import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const dataByMonth = {
  "2025-01": [
    { ageGroup: "10未満", male: 100, female: 80, other: 10, none: 5 },
    { ageGroup: "10代", male: 200, female: 150, other: 20, none: 10 },
    { ageGroup: "20代", male: 400, female: 350, other: 30, none: 15 },
    { ageGroup: "30代", male: 600, female: 550, other: 50, none: 20 },
    { ageGroup: "40代", male: 700, female: 600, other: 40, none: 25 },
    { ageGroup: "50代", male: 500, female: 400, other: 30, none: 15 },
    { ageGroup: "60代", male: 300, female: 250, other: 20, none: 10 },
    { ageGroup: "70代", male: 100, female: 90, other: 5, none: 2 },
    { ageGroup: "80代", male: 50, female: 40, other: 3, none: 1 },
    { ageGroup: "90以上", male: 20, female: 10, other: 1, none: 0 },
  ],
  "2025-02": [
    { ageGroup: "10未満", male: 120, female: 90, other: 15, none: 7 },
    { ageGroup: "10代", male: 250, female: 200, other: 30, none: 12 },
    { ageGroup: "20代", male: 450, female: 400, other: 40, none: 20 },
    { ageGroup: "30代", male: 650, female: 600, other: 60, none: 25 },
    { ageGroup: "40代", male: 750, female: 650, other: 50, none: 30 },
    { ageGroup: "50代", male: 520, female: 420, other: 35, none: 17 },
    { ageGroup: "60代", male: 310, female: 260, other: 25, none: 12 },
    { ageGroup: "70代", male: 120, female: 100, other: 7, none: 3 },
    { ageGroup: "80代", male: 60, female: 50, other: 5, none: 2 },
    { ageGroup: "90以上", male: 30, female: 15, other: 2, none: 1 },
  ],
};

const months = Object.keys(dataByMonth);
const currentYear = new Date().getFullYear();

function GenderAgeBarChart() {
  const [selectedDate, setSelectedDate] = useState(
    `${currentYear}-01`
  ); // Default to the first month of the current year
  const [selectedMonth, setSelectedMonth] = useState(months[0]); // Extracted month from the selected date
  const chartData = dataByMonth[selectedMonth] || []; // Default to empty data
  console.log('seelcted month is :', selectedMonth, selectedDate);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSelectedDate(selectedDate);
    setSelectedMonth(selectedDate); // Extract the month and set the state directly
  };

  const hasData = chartData.length > 0;

  return (
    <div className="p-2">
      {/* Title and Date Picker */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">性別・年代比</h3>
        <div className="flex items-center">
          <label htmlFor="date-picker" className="mr-2 font-medium">
            年月を選択:
          </label>
          <input
            type="month"
            id="date-picker"
            value={selectedDate}
            onChange={handleDateChange}
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Bar Chart */}
      <BarChart
        width={523}
        height={255}
        data={hasData ? chartData : [{ ageGroup: "No Data Available", male: 0, female: 0, other: 0, none: 0 }]}
        margin={{ top: 2, right: 2, left: 2, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ageGroup" />
        <YAxis />
        <Tooltip formatter={(value) => `${value}人`} />
        <Legend />
        <Bar dataKey="male" stackId="a" fill="#ff9500" name="男性" />
        <Bar dataKey="female" stackId="a" fill="#ffb854" name="女性" />
        <Bar dataKey="other" stackId="a" fill="#ffce8a" name="その他" />
        <Bar dataKey="none" stackId="a" fill="#ffdeb0" name="回答なし" />
      </BarChart>
    </div>
  );
}

export default GenderAgeBarChart;
