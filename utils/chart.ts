export const getChartData = (isHorizontalBarChart: boolean) => {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        bar: {
          horizontal: isHorizontalBarChart,
        },
      },
      xaxis: {
        categories: [
          "FY 2015",
          "FY 2016",
          "FY 2017",
          "FY 2018",
          "FY 2019",
          "FY 2020",
          "FY 2021",
          "FY 2022",
        ],
      },
    },
    series: [
      {
        name: "Per capita income",
        data: [72805, 77659, 83003, 87586, 92133, 94270, 85110, 91481],
      },
    ],
  };
  return data;
};
