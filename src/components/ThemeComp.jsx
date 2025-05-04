"use client";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";

const ThemeComp = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <CiLight size={25} /> : <CiDark size={25} />}
    </div>
  );
};

export default ThemeComp;
