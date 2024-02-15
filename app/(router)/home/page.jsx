import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Link href={"/hakkimizda"}> Hakkimizda</Link>
      <br />
      <Link href={"/docs/post-1"}> Post 1</Link>
      <br />
      <Link
        prefetch={true}
        href={{
          pathname: "/docs/post-1",
          query: { foo: "bar" },
        }}
      >
        Post 1 With Query
      </Link>
    </div>
  );
}
