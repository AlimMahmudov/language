"use client";
import { useLanguageStore } from "@/shared/stores/UseLanguageStores";
import React from "react";

const Select = () => {
  const { language, setLanguage } = useLanguageStore();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ru" | "en";
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <select onChange={handleChangeLanguage} value={language}>
        <option value="ru">ru</option>
        <option value="ky">en</option>
      </select>
    </div>
  );
};

export default Select;
