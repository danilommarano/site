import React from "react";

export default function Section(props: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center items-center h-[800px] ">
      {props.children}
    </section>
  );
}
