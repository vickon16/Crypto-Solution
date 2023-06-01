import { Card, Col, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import noIcon from "../images/no-Icon.png";
import millify from 'millify';

const {Paragraph} = Typography;

const CoinCard = ({coin}) => {
  // lg:4-columns sm:2-columns xs:1-column
  return (
    <Col xs={24} sm={12} lg={6} className="min-w-[250px]">
      
      <Link to={`/crypto/${coin.uuid}`}>
        <Card
          title={`${coin.rank}. ${coin.name} (${coin.symbol})`}
          extra={
            <img
              className="w-[35px]"
              src={coin.iconUrl || noIcon}
              alt="crypto-img"
            />
          }
          hoverable
        >
          <Paragraph className="text-rose-900  font-semibold text-lg">
            Price : {millify(coin.price)}
          </Paragraph>
          <Paragraph className="text-cyan-600 font-semibold">
            Market Cap : {millify(coin.marketCap)}
          </Paragraph>
          <Paragraph className="text-emerald-600 font-semibold">
            Daily Change : {millify(coin.change)}%
          </Paragraph>
          <Paragraph className="text-fuchsia-600 font-semibold">
            Market Cap : {millify(coin.price)}
          </Paragraph>
        </Card>
      </Link>
    </Col>
  )
}

export default CoinCard