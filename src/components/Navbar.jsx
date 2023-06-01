import React, { useEffect, useState } from "react";
import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
import { useLocation } from "react-router-dom";
import { navMenuItems } from "../utils/navMenuItems";

const iconStyles = "group-hover:!text-textBlue";
const linkStyles = `!text-white md:text-base text-sm ${iconStyles}`;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}



const Navbar = () => {
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [toggleMenu, setToggleMenu] = useState(false);

  const items = navMenuItems.map(({ title, link, Icon }) =>
    getItem(
      <Link className={linkStyles} to={link}>
        {title}
      </Link>,
      link,
      <Icon className={iconStyles} />
    )
);

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    <nav className="md:fixed left-0 md:h-screen bg-navbar top-0">
      <div className="bg-navbar flex_between p-5 gap-x-3 w-full max-md:fixed z-[10] top-0">
        <div className="flex items-center gap-x-2">
          <Avatar src={icon} />
          <Typography.Title className="!mb-0 !text-xl md:!text-2xl">
            <Link to="/" className="!text-white hover:!text-textBlue">
              Crypto-Solution
            </Link>
          </Typography.Title>
        </div>

        <div className="md:hidden relative">
          <MenuOutlined
            className="text-white text-xl flex  cursor-pointer"
            onClick={() => setToggleMenu((prev) => !prev)}
          />

          <Menu
            className={`absolute top-[2.5rem] ${
              toggleMenu ? "-right-4" : "-right-[400px]"
            } flex-col transition-all duration-300 ease-in-out z-[10]`}
            theme="dark"
            items={items}
            selectedKeys={[activeMenu]}
            onClick = {e => setToggleMenu(false)}
          />

        </div>
      </div>

      <Menu
        className="hidden md:flex md:flex-col mt-7 z-[10]"
        theme="dark"
        items={items}
        selectedKeys={[activeMenu]}
      />
    </nav>
  );
};

export default Navbar;
