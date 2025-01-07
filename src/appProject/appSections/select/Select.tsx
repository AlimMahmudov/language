"use client";
import { useLanguageStore } from "@/shared/stores/UseLanguageStores";
import React from "react";
import scss from "./Select.module.scss";

const Select = () => {
  const { language, setLanguage } = useLanguageStore();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ru" | "en";
    setLanguage(selectedLanguage);
  };

  return (
    <div className={scss.Select}>
      <div className="container">
        <div className={scss.select}>
          <select onChange={handleChangeLanguage} value={language}>
            <option value="ru">RU</option>
            <option value="ky">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
