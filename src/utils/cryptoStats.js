import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import millify from "millify";


export const statsFunc = (cryptoDetails) => [
  {
    title: "Price to USD",
    value: `${
      cryptoDetails?.price ? `$ ${millify(cryptoDetails?.price)}` : "---"
    }`,
    icon: <DollarCircleOutlined />,
  },
  {
    title: "Rank",
    value: cryptoDetails?.rank || "---",
    icon: <NumberOutlined />,
  },
  {
    title: "24h Volume",
    value: `${
      cryptoDetails["24hVolume"] ? `$ ${millify(cryptoDetails["24hVolume"])}` : "---"
    }`,
    icon: <ThunderboltOutlined />,
  },
  {
    title: "Market Cap",
    value: `${
      cryptoDetails?.marketCap
        ? `$ ${millify(cryptoDetails?.marketCap)}`
        : "---"
    }`,
    icon: <DollarCircleOutlined />,
  },
  {
    title: "All-time-high(daily avg.)",
    value: `${
      cryptoDetails?.allTimeHigh?.price
        ? `$ ${millify(cryptoDetails?.allTimeHigh?.price)}`
        : "---"
    }`,
    icon: <TrophyOutlined />,
  },
];

export const genericStatsFunc = (cryptoDetails) => [
  {
    title: "Number Of Markets",
    value: cryptoDetails?.numberOfMarkets || "---",
    icon: <FundOutlined />,
  },
  {
    title: "Number Of Exchanges",
    value: cryptoDetails?.numberOfExchanges || "---",
    icon: <MoneyCollectOutlined />,
  },
  {
    title: "Aprroved Supply",
    value: cryptoDetails?.supply?.confirmed ? (
      <CheckOutlined />
    ) : (
      <StopOutlined />
    ),
    icon: <ExclamationCircleOutlined />,
  },
  {
    title: "Total Supply",
    value: `${
      cryptoDetails?.supply?.total
        ? `$ ${millify(cryptoDetails?.supply?.total)}`
        : "---"
    }`,
    icon: <ExclamationCircleOutlined />,
  },
  {
    title: "Circulating Supply",
    value: `${
      cryptoDetails?.supply?.circulating
        ? `$ ${millify(cryptoDetails?.supply?.circulating)}`
        : "---"
    }`,
    icon: <ExclamationCircleOutlined />,
  },
];
