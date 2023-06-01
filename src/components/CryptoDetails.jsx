import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Typography, Select, Card } from "antd";
import { useGetCryptosDetailsQuery } from "../services/cryptoApi";
import { statsFunc, genericStatsFunc } from "../utils/cryptoStats";
import Loader from "./Loader";
import noIcon from "../images/no-Icon.png";
import { CryptoDetailsCard, CryptoLinks, LineChart } from "../components";

const { Title} = Typography;
const { Option } = Select;
const timePeriodArr = ["3h", "24h", "7d", "30d", "3m", "1y",  "3y", "5y"]

const CryptoDetails = () => {
  const { coinId } = useParams();
  const { data: cryptoDetails, isFetching : isFetchingDetails } = useGetCryptosDetailsQuery(coinId);
  const [timePeriod, setTimePeriod] = useState(timePeriodArr[2]);


  if (isFetchingDetails && !cryptoDetails)
    return (
      <div className="flex_center w-full min-h-screen">
        <Loader size="large" />
      </div>
    );

  const stats = statsFunc(cryptoDetails);
  const genericStats = genericStatsFunc(cryptoDetails);

  if (!coinId) return;

  return (
    <section className="m-0 sm:m-7">
      <Col className="flex_center flex-col border-b border-b-border py-5 gap-3">
        <Title
          level={2}
          className="!font-bold !text-textBlue !mb-1 max-sm:!text-2xl flex items-center"
        >
          <img
            src={cryptoDetails?.iconUrl || noIcon}
            alt="img-icon"
            className="w-[30px] h-[30px] mr-1 inline-block"
          />
          {cryptoDetails?.name} ({cryptoDetails?.symbol || "---"}) Price
          
        </Title>
        <p className="text-base text-center text-gray-600">
          {cryptoDetails?.name} live price in <strong>USDT</strong> |{" "}
          {cryptoDetails?.symbol || "---"}/USDT. View value statistics, market
          cap and supply.
        </p>
      </Col>

      <Select
        defaultValue={timePeriodArr[2]}
        className="w-[200px] mt-5"
        placeholder="Select Time Period"
        onChange={(value) => setTimePeriod(value)}
        size="large"
      >
        {timePeriodArr.map((period) => (
          <Option key={period} value={period}>
            {period}
          </Option>
        ))}
      </Select>

      <LineChart coinId={coinId} cryptoDetails={cryptoDetails} timePeriod={timePeriod} />

      <Col className="flex_between gap-10 flex-wrap">
        {/* Crypto Statistics */}
        <CryptoDetailsCard
          arr={stats}
          title={`${cryptoDetails?.name} Value Statistics`}
          subtitle={`An overview showing the statistics of ${cryptoDetails?.name}`}
        />

        {/* Other Crypto Statistics */}
        <CryptoDetailsCard
          arr={genericStats}
          title="Other Statistics"
          subtitle="An overview showing the statistics of all cryptocurrencies"
        />
      </Col>

      {/* links and description */}
      <Col className="flex gap-8 mt-8 pt-5 flex-wrap">
        <Card
          className="flex-[0.5] h-fit max-lg:flex-1 min-w-[500px]"
          title={`${cryptoDetails?.rank}. ${cryptoDetails?.name} (${cryptoDetails?.symbol})`}
          extra={
            <img
              className="w-[35px]"
              src={cryptoDetails?.iconUrl || noIcon}
              alt="crypto-img"
            />
          }
        >
          <Title level={3} className="!text-bold !mt-5 !text-textBlue">
            What is {cryptoDetails?.name}
          </Title>
          <article className="text-lg">{cryptoDetails?.description}</article>

          {cryptoDetails?.websiteUrl && (
            <Link
              to={cryptoDetails?.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex text-textBlue"
            >
              Visit {cryptoDetails?.name} Website
            </Link>
          )}
        </Card>

        {/* crypto links */}
        <CryptoLinks cryptoDetails={cryptoDetails} />
      </Col>
    </section>
  );
};

export default CryptoDetails;
