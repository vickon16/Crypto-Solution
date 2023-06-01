import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  HomePage,
  Exchanges,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";
import { pages } from "./utils/pages";

function App() {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <aside className="flex-1 bg-navbar md:flex-[0.18] w-full min-w-[300px]">
        <Navbar />
      </aside>
      <main className="flex-1 md:flex-[0.84] w-full mr-3 max-md:mt-16">
        <Layout className="p-5 xl:ml-4">
          <Routes>
            <Route exact path={pages.homePage} element={<HomePage />} />
            <Route exact path={pages.exchangesPage} element={<Exchanges />} />
            <Route
              exact
              path={pages.cryptoPage}
              element={<Cryptocurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path={pages.newsPage} element={<News />} />
          </Routes>
        </Layout>

        {/* // footer */}
        <footer className="bg-navbar flex flex-col p-5 items-center w-full">
          <Typography.Title level={4} className="!text-white">
            Crypto Solution
          </Typography.Title>

          <Space className="my-4 flex !gap-x-3">
            <Link to={pages.homePage} className="links text-sm">
              Home{" "}
            </Link>
            <Link to={pages.exchangesPage} className="links text-sm">
              Exchanges{" "}
            </Link>
            <Link to={pages.cryptoPage} className="links text-sm">
              Crypto{" "}
            </Link>
            <Link to={pages.newsPage} className="links text-sm">
              News{" "}
            </Link>
          </Space>

          <Typography.Paragraph className="text-slate-400 text-sm">
            Vickonary | Cyril
          </Typography.Paragraph>
          <Typography.Paragraph className="text-slate-300 text-xs">
            &copy; All rights reserved
          </Typography.Paragraph>
        </footer>
      </main>
    </div>
  );
}

export default App;
