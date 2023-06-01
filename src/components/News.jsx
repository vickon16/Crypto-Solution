import React, { useState } from "react";
import { Select, Typography, Row} from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";
import { NewsCard } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified || 18;
  const defaultCategory = "crypto"
  const [newsCategory, setNewsCategory] = useState(defaultCategory);
  const {data : cryptoData} = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory, count,
  });

  if (isFetching && !cryptoNews)
    return (
      <div className="flex_center w-full min-h-screen">
        <Loader size="large" />
      </div>
    );

  return (
    <section>
      {!simplified && (
        <Title className="!text-[1.3rem] md:!text-[1.8rem] !my-8">
          Crypto News for you
        </Title>
      )}

      {!simplified && cryptoData && (
        <Select
          showSearch
          className="w-[250px]"
          placeholder="Select a crypto"
          optionFilterProp="children"
          onChange={(value) => setNewsCategory(value)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          size="large"
        >
          <Option value={defaultCategory}>Crypto</Option>
          {cryptoData?.coins?.map(coin => (
            <Option key={coin?.uuid} value={coin?.name}>{coin?.name}</Option>
          ))}
        </Select>
      )}

      {/* top bottom left right */}
      <Row gutter={[16, 16]} className="min-h-[65vh] mt-8">
        {/* lg:3-columns sm:2-columns xs:1-column */}
        {cryptoNews?.map((news, i) => (
          <NewsCard key={news?.datePublished + i} news={news} />
        ))}
      </Row>
    </section>
  );
};

export default News;
