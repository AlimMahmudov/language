import { useLanguageStore } from "@/shared/stores/UseLanguageStores";
import Image from "next/image";
import React from "react";

const Home = () => {
  const { t } = useLanguageStore();
  return (
    <div>
      <h1>{t("Hero.title")}</h1>
      <p>{t("Hero.desc")} </p>
    </div>
  );
};

export default Home;
