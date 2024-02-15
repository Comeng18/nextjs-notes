import React from "react";

export default function layout({ children }) {
  return (
    <html>
      <head>
        <title>My page</title>
      </head>
      <body>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
