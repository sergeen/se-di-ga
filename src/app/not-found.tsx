import React from "react";

interface ProductDetailsProps {
  params: { slug: string[] };
}

export default function Docs({ params }: ProductDetailsProps) {
  {
    return <div><h1>Resource not found</h1></div>;
  }
}
