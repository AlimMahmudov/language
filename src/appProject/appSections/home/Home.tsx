"use client";
import { useLanguageStore } from "@/shared/stores/UseLanguageStores";
import React from "react";

const Home = () => {
  const { t } = useLanguageStore();
  return (
    <div>
      <h1>{t("Home.title")}</h1>
      <p>{t("Home.desc")} </p>
    </div>
  );
};

export default Home;
