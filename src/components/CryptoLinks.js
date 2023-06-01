import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const CryptoLinks = ({ cryptoDetails }) => {
  return (
    <div className="p-0 sm:px-5 flex-[0.5] max-lg:flex-1">
      <Title level={3} className="">
        {cryptoDetails?.name} Links
      </Title>
      <div className="flex gap-3 flex-wrap mt-6">
        {cryptoDetails?.links.map((link) => (
          <Link
            to={link?.url}
            target="_blank"
            rel="noreferrer"
            key={link?.name}
            className="text-sm sm:text-base bg-white rounded-xl px-4 py-2 text-gray-600 shadow-sm hover:shadow-md"
          >
            {link?.type} | {link?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CryptoLinks;
