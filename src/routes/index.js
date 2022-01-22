import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing components
import Layout from "../layout";

import Wallet from "../pages/wallet/Wallet";
import Savings from "../pages/savings/Savings";
import Transfer from "../pages/transfer/Transfer";
import Investment from "../pages/investment/Investment";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import New from "../pages/savings/New";
import InvestList from "../components/investment/InvestList";
import SavingList from "../components/savings/SavingList";
import NewInvest from "../pages/investment/NewInvest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />

        <Route path="/dashboard" element={<Layout />} />
        <Route
          path="/dashboard/wallet"
          element={
            <Layout>
              {" "}
              <Wallet />{" "}
            </Layout>
          }
        />
        <Route
          path="/dashboard/savings"
          element={
            <Layout>
              {" "}
              <Savings />{" "}
            </Layout>
          }
        />
        <Route
          path="/dashboard/savings/new"
          element={
            <Layout>
              {" "}
              <SavingList />{" "}
            </Layout>
          }
        />
        <Route
          path="/dashboard/transfer"
          element={
            <Layout>
              {" "}
              <Transfer />{" "}
            </Layout>
          }
        />
        <Route
          path="/dashboard/investment"
          element={
            <Layout>
              {" "}
              <InvestList />{" "}
            </Layout>
          }
        />
        <Route
          path="/dashboard/investment/new"
          element={
            <Layout>
              {" "}
              <NewInvest />{" "}
            </Layout>
          }
        />

        {/* // auth routes */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
