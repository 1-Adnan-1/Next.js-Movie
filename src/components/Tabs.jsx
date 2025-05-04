"use client";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const { theme } = useTheme(true);
  const backgroundColor = theme === "dark" ? "bg-gray-950" : "bg-gray-200";

  const tabs = [
    {
      name: "En Popüler",
      url: "popular",
    },
    {
      name: "En Son",
      url: "lates",
    },
    {
      name: "Yakında Gelecekler",
      url: "upcoming",
    },
  ];

  return (
    <div
      className={`p-5 my-5 ${backgroundColor} flex items-center justify-center gap-10`}
    >
      {tabs.map((tab, i) => (
        <Link
          className={`cursor-pointer hover:opacity-65 transition-opacity ${
            tab.url === genre
              ? "underline text-amber-600 underline-offset-8"
              : ""
          }`}
          key={i}
          href={`/?genre=${tab.url}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
