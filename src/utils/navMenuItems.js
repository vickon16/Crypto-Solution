import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import { pages } from "./pages";

export const navMenuItems =  [
  {
    title: "Home",
    link : pages.homePage,
    Icon: () => <HomeOutlined />,
  },
  {
    title: "Crypto Currencies",
    link : pages.cryptoPage,
    Icon: () => <FundOutlined />,
  },
  {
    title: "Exchanges",
    link : pages.exchangesPage,
    Icon: () => <MoneyCollectOutlined />,
  },
  {
    title: "News",
    link : pages.newsPage,
    Icon: () => <BulbOutlined />,
  },
];