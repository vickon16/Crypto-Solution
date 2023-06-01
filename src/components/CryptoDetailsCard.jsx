import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const CryptoDetailsCard = ({ arr, title, subtitle}) => {
  return (
    <div className="max-lg:w-full">
      <Title level={3} className="!font-bold !mt-5 !text-textBlue">
        {title}
      </Title>
      <p className="text-gray-600 text-base mb-2">{subtitle}</p>

      {arr?.map(({ icon, title, value }) => (
        <div className="flex_between border-b border-b-border text-gray-600 p-5 hover:bg-bgSecondary" key={title}>
          <p className="flex items-center gap-x-3 text-base">
            <Text>{icon}</Text>
            <Text>{title}</Text>
          </p>
          <strong className="text-base">{value}</strong>
        </div>
      ))}
    </div>
  );
};

export default CryptoDetailsCard;
