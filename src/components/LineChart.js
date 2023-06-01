import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Typography } from "antd";
import Loader from "./Loader";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";
import millify from "millify";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinId, cryptoDetails, timePeriod }) => {
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const { name, price } = cryptoDetails;

  if (isFetching && !coinHistory)
    return (
      <div className="flex_center min-h-[20vh]">
        <Loader />
      </div>
    );

  const coinTimeStamp = coinHistory?.history?.map((history) =>
    moment.unix(history.timestamp).format("MM/DD/YY")
  );
  const coinPrice = coinHistory?.history?.map((history) => history.price);

  const data = {
    labels: coinTimeStamp,

    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <Row className=" my-10 flex justify-between gap-12 text-textBlue">
        <Typography.Title level={2} className="!text-textBlue !m-0">
          {name} Price Chart
        </Typography.Title>
        <div className="flex gap-5 items-center flex-wrap">
          <Typography.Title
            level={5}
            className={`!font-semibold !m-0 ${
              coinHistory?.change >= 0 ? "!text-emerald-700" : "!text-rose-600"
            }`}
          >
            {coinHistory?.change}%
          </Typography.Title>
          <p className="text-gray-600">
            Current {name} Price <strong>${millify(price)}</strong>{" "}
          </p>
        </div>
      </Row>

      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
