"use client";
import { useLanguageStore } from "@/shared/stores/UseLanguageStores";
import React from "react";
import scss from "./Home.module.scss";

const Home = () => {
  const { t } = useLanguageStore();
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <h1>{t("Home.title")}</h1>
          <p>{t("Home.desc")} </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
