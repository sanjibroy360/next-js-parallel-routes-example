"use client";

import { getChartData } from "@/utils/chart";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ChartComponent = () => {
  const [data, setData] = useState<any>(null);
  const updateBarChartDirection = () => {
    const isDesktopView = window.matchMedia("(min-width: 1024px)").matches;
    const isHorizontalBarChart = !isDesktopView;
    const tempData = getChartData(isHorizontalBarChart);
    setData(tempData);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", updateBarChartDirection);
      window.addEventListener("load", updateBarChartDirection);
    }
    updateBarChartDirection();

    return () => {
      window.removeEventListener("resize", updateBarChartDirection);
      window.removeEventListener("load", updateBarChartDirection);
    };
  }, []);

  return (
    <div className="md:w-1/2 w-11/12 mx-auto border shadow md:p-6 md:text-sm text-xs rounded bg-gray-50">
      {data && typeof window !== "undefined" && (
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          className="md:text-sm text-xs"
        />
      )}
      <p className="text-xs text-center font-medium underline m-0 md:p-0 pb-3">
        Chart: Per capita net national income{" "}
        <span className="no-underline capitalize">
          [<sup className="text-red-500">*</sup>Dummy data]
        </span>
      </p>
    </div>
  );
};

export default ChartComponent;
