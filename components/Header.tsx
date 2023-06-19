import React from "react";

export default function Header(props: {
  level: string;
  children: React.ReactNode;
}) {
  if (props.level == "1") {
    return <h1 className="text-5xl font-extrabold">{props.children}</h1>;
  }
}
