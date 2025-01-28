"use client";
import { useLanguageStore } from "@/shared/stores/UseLanguageStores";
import React from "react";
import scss from "./Home.module.scss";
import Image from "next/image";
import jestokiy from "@/shared/image/jv.jpg";

const Home = () => {
  const { t } = useLanguageStore();
  return (
    <div id={scss.Home}>
      <div className="container">
        <div className={scss.home}>
          <div className={scss.box}>
            <Image width={300} height={400} src={jestokiy} alt="" />
            <div className={scss.text}>
              <h1>{t("Home.title")}</h1>
              <p>{t("Home.desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
