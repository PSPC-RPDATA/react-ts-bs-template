import React from "react";

import Navbar from "./Navbar";

export default function Page(props: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
}
