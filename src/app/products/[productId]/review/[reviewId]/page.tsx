import React from 'react';
import { notFound } from 'next/navigation';

interface ProductDetailsProps {
  params: { productId: string, reviewId: string },
}

export default function ProductDetails({ params }: ProductDetailsProps) {
  if (parseInt(params.reviewId) > 100) {
    return notFound();
  }
  return (
    <div>
      <h1>Details about product</h1>
      <p>Details for <strong>{params.productId}</strong></p>
      <p>Review {params.reviewId}</p>
    </div>
  );
}
