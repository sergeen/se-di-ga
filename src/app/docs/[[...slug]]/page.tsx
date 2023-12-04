import React from "react";

interface ProductDetailsProps {
  params: { slug: string[] };
}

export default function Docs({ params }: ProductDetailsProps) {
  {
    if (params.slug?.length === 1) {
      return (
        <div>
          <p>This is <strong>{params.slug[0]}</strong>!</p>
        </div>
      )
    }
    if (params.slug?.length > 1) {
      return (
        <div>
          <p>This is <strong>{params.slug[1]}</strong> of{" "}<strong>{params.slug[0]}</strong>!</p>
        </div>
      )
    }
    return <div><h1>Docs</h1></div>;
  }
}
