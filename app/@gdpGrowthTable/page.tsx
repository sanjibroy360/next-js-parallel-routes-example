"use client";

import { gdpData } from "@/data/gdp-details";
import React from "react";

const GDPTable = () => {
  return (
    <div className="md:w-1/3 w-10/12 mx-auto">
      <table className="w-full my-10 mb-0 mx-auto bg-gray-50">
        <tr>
          <th className="border shadow p-4 text-center font-bold">Year</th>
          <th className="border shadow p-4 text-center font-bold">
            GDP Growth
          </th>
          <th className="border shadow p-4 text-center font-bold">
            Annual Change
          </th>
        </tr>
        {gdpData?.map((data) => (
          <tr key={data.year}>
            <td className="border shadow p-4 text-center font-medium">
              {data.year}
            </td>
            <td className="border shadow p-4 text-center font-medium">
              {data.gdpGrowth}
            </td>
            <td className="border shadow p-4 pb-0 text-center font-medium">
              {data.annualChange}
            </td>
          </tr>
        ))}
      </table>
      <p className="text-xs text-right capitalize font-medium">
        <sup className="text-red-500">*</sup>Dummy data
      </p>
    </div>
  );
};

export default GDPTable;
