import Link from "next/link";
import React from "react";

const MenuItem = ({ mn }) => {
  return (
    <Link href={mn.url} className="no-underline">
      {mn.name}
    </Link>
  );
};

export default MenuItem;
