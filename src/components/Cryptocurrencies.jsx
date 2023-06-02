import React, { useState, useEffect } from "react";
import { Input, Row, Typography } from "antd";
import { CoinCard } from "../components";

import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./Loader";
import { SearchOutlined } from "@ant-design/icons";

const {Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified || 100;
  const { data: coinList, isFetching } = useGetCryptosQuery(count);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (coinList?.coins && searchTerm) {
      const filteredCoins = coinList.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filteredCoins);
      return;
    }
    
    setFilteredData([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  if (isFetching)
    return (
      <div className="flex_center w-full min-h-screen">
        <Loader size="large" />
      </div>
    );

  return (
    <section>
      {!simplified && (
        <Title className="!text-[1.3rem] md:!text-[1.8rem] !my-8">
          Ranking Cryptocurrencies in the world
        </Title>
      )}

      {!simplified && (
        <div className="my-5 w-[250px]">
          <Input
            placeholder="Search Cryptocurrency"
            size="large"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="!rounded-md"
          />
        </div>
      )}

      {/* top bottom left right */}
      <Row gutter={[16, 16]} className="min-h-[65vh]">
        {!simplified && filteredData.length !== 0
          ? filteredData.map((coin) => <CoinCard key={coin.uuid} coin={coin} />)
          : coinList?.coins?.map((coin) => (
              <CoinCard key={coin.uuid} coin={coin} />
            ))}
      </Row>
    </section>
  );
};

export default Cryptocurrencies;
