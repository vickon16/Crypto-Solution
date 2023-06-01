import { Typography, Col, Avatar, Card } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

const { Text, Title, Paragraph } = Typography;

const demoImg =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const NewsCard = ({ news }) => {
  return (
    <Col xs={24} sm={12} md={12} lg={8} xl={6} className="min-w-[300px]">
      <Link to={news?.url || "/"} target="_blank" rel="noreferrer">
        <Card hoverable className="min-h-[300px]">
          <img
            src={news?.image?.thumbnail?.contentUrl || demoImg}
            alt="crypto-news-img"
            className="w-full h-[100px] object-cover object-center"
          />
          <Title level={5} className="!my-2">
            {news?.name}
          </Title>
          <Paragraph className="!text-base !text-black">
            {news?.description.length > 200
              ? `${news.description.substring(0, 200)}...`
              : news.description}
          </Paragraph>

          <div className="flex_between flex-wrap">
            <div className="flex gap-x-2 items-center">
              <Avatar
                src={news?.provider[0]?.image?.thumbnail?.contentUrl || demoImg}
                alt="news-provider-img"
              />
              <Text className="font-semibold">{news?.provider[0]?.name}</Text>
            </div>
            <Text>
              {moment(news?.datePublished).startOf("seconds").fromNow()}
            </Text>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default NewsCard;
