import React, { useState } from "react";
import { Avatar, Col, Row, Select, Typography } from "antd";
import {
  useGetCryptoExchangesQuery,
  useGetCryptosQuery,
} from "../services/cryptoApi";
import Loader from "./Loader";
import noIcon from "../images/no-Icon.png";
import millify from "millify";

const { Title } = Typography;
const { Option } = Select;
const defaultCoinId = "Qwsogvtv82FCd"; // default coinId for bitcoin

const Exchanges = () => {
  const [coinId, setCoinId] = useState(defaultCoinId);
  const [newsCategory, setNewsCategory] = useState("Bitcoin");
  const { data: coinExchanges, isFetching: isFetchingExchanges } =
    useGetCryptoExchangesQuery(coinId);
  const { data: cryptoData, isFetching: isFetchingCryptos } =
    useGetCryptosQuery(100);

  if (isFetchingExchanges && isFetchingCryptos)
    return (
      <div className="flex_center w-full min-h-screen">
        <Loader size="large" />
      </div>
    );

  return (
    <section>
      <div className="my-5">
        <Title level={3} className="!text-textBlue">
          Crypto Exchanges Platform For {newsCategory}
        </Title>
        <p className="text-gray-600 text-base">
          Here are the list of all cryptocurrency exchanges for {newsCategory}
        </p>
      </div>

      {cryptoData && (
        <Select
          showSearch
          className="w-[250px]"
          placeholder="Select a crypto"
          optionFilterProp="children"
          onChange={(value) => {
            setCoinId(
              cryptoData?.coins?.find((coin) => coin.name === value).uuid
            );
            setNewsCategory(value);
          }}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
        >
          {cryptoData?.coins?.map((coin) => (
            <Option key={coin?.uuid} value={coin?.name}>
              {coin?.name}
            </Option>
          ))}
        </Select>
      )}

      {/* exchanges headers */}
      <div className="[&>*:nth-child(odd)]:bg-gray-200/70n w-full overflow-x-auto">
        <Row className="w-full border-b border-b-border mt-8 flex flex-nowrap p-3">
          <Col
            span={6}
            className="whitespace-nowrap min-w-[200px] text-base font-semibold"
          >
            Exchanges
          </Col>
          <Col
            span={6}
            className="whitespace-nowrap min-w-[150px] text-base font-semibold"
          >
            24h Volume
          </Col>
          <Col
            span={6}
            className="whitespace-nowrap min-w-[80px] text-base font-semibold"
          >
            Markets
          </Col>
          <Col
            span={6}
            className="whitespace-nowrap min-w-[80px] text-base font-semibold"
          >
            Price
          </Col>
        </Row>

        {coinExchanges?.map((exchange) => (
          <Row
            className="cursor-pointer hover:!bg-white w-full flex flex-nowrap p-2 sm:p-4"
            key={exchange.uuid}
          >
            <Col span={6} className="whitespace-nowrap min-w-[200px]">
              <strong className="text-sm sm:text-base">{exchange.rank}.</strong>
              <Avatar className="mx-2" src={exchange?.iconUrl || noIcon} />
              <span className="text-sm sm:text-base font-semibold">
                {exchange.name}
              </span>
            </Col>
            <Col span={6} className="whitespace-nowrap min-w-[150px]">
              ${millify(exchange["24hVolume"])}
            </Col>
            <Col span={6} className="whitespace-nowrap min-w-[80px]">
              {millify(exchange.numberOfMarkets)}
            </Col>
            <Col span={6} className="whitespace-nowrap min-w-[80px]">
              {millify(exchange.price)}
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default Exchanges;
