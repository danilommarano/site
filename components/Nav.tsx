import React from "react";

export default function Nav(props: { children: React.ReactNode }) {
  return (
    <nav className="flex justify-between items-center h-16 w-full px-10 bg-[#e2e2e2]">
      {props.children}
    </nav>
  );
}
