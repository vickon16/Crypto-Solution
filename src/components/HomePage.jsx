import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, Loader, News } from "../components";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const HomePage = () => {
  const { data, isFetching, isLoading } = useGetCryptosQuery(10);
  const globalStats = data?.stats;

  if (isLoading && isFetching)
    return (
      <div className="flex_center w-full min-h-screen">
        <Loader size="large" />
      </div>
    );


  return (
    <section>
      <Title className="!text-2xl md:!text-3xl max-md:mt-3">
        Global Crypto Stats
      </Title>

      <Row className="gap-4 sm:gap-0">
        <Col sm={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats?.total}
          />
        </Col>
        <Col sm={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
        <Col sm={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col sm={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col sm={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
      </Row>

      <div className="flex_between gap-4 flex-wrap mt-14 mb-6">
        <Title className="!text-[1.3rem] md:!text-[1.8rem] !m-0">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Link
          to="/cryptocurrencies"
          className="flex_center gap-x-1 text-[.9rem] md:text-[1rem] text-textBlue font-semibold"
        >
          Show more <ArrowRightOutlined className="text-sm" />
        </Link>
      </div>

      <Cryptocurrencies simplified={10} />

      <div className="flex_between gap-4 flex-wrap mt-14 mb-6">
        <Title className="!text-[1.3rem] md:!text-[1.8rem] !m-0">
          Latest Crypto News
        </Title>
        <Link
          to="/news"
          className="flex_center gap-x-1 text-[.9rem] md:text-[1rem] text-textBlue font-semibold"
        >
          Show more <ArrowRightOutlined className="text-sm" />
        </Link>
      </div>

      <News simplified={8} />
    </section>
  );
};

export default HomePage;
