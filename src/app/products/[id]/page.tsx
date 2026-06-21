import { notFound } from "next/navigation";
import { products } from "@/lib/constants";
import { ProductContent } from "@/components/product/product-content";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return <ProductContent product={product} />;
}
