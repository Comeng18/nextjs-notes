import { notFound } from "next/navigation";
import React from "react";

export default function Post({ params }) {
  console.log(params.post);
  if (params.post[0] === "error") {
    throw new Error("post error");
  } else if (params.post[0] === "notfound") {
    notFound();
  }
  return <div>Post: {params.post}</div>;
}
