"use client";

import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    {
      name: "about",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-6 h-20 p-5">
      <div className="bg-amber-600 p-3 text-2xl font-bold rounded-lg text-white">
        Movie <span className="max-md:hidden">App</span>
      </div>
      <div className="flex flex-1 items-center gap-2 border border-gray-300 p-3 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          className="outline-none flex-1"
          placeholder="Arama Yapınız..."
        />
        <CiSearch size={25} />
      </div>

      <div className="md:hidden">
        <IoIosMenu size={25} />
      </div>

      <div className="hidden md:flex md:items-center gap-6">
        {menu.map((mn, i) => (
          <MenuItem mn={mn} key={i} />
        ))}
      </div>

      <ThemeComp />
    </div>
  );
};

export default Header;
