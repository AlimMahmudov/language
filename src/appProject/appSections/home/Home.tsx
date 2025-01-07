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
          <img
            src="https://m.media-amazon.com/images/I/91g0NtLvNuL._UF1000,1000_QL80_.jpg"
            alt=""
          />
          <img
            src="https://64.media.tumblr.com/7e278e63ff2c9c0b100eaa4bbd0d3948/tumblr_omk5k4Uj9N1tedwcmo9_r1_500.gif"
            alt=""
          />
          <div className={scss.text}>
            <h1>{t("Home.title")}</h1>
            <p>{t("Home.desc")} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
