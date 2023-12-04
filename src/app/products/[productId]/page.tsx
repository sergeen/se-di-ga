import React from 'react';

interface ProductDetailsProps {
  params: { productId: string },
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  return (
    <div>
      <h1>Details about product</h1>
      <p>Details for <strong>{params.productId}</strong></p>
    </div>
  );
}
