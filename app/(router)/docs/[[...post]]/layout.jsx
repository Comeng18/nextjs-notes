import React from "react";

export default function layout({ children, ...rest }) {
  console.log("layout", rest);
  return (
    <div>
      <div>layout before</div>
      {children}
      <div>layout after</div>
    </div>
  );
}
