import React from "react";

export default function NavList(props: { children: React.ReactNode }) {
  return <ul className="flex gap-6 font-bold">{props.children}</ul>;
}
