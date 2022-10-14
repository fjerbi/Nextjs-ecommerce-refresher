import type { NextPage } from "next";
import type { InferGetStaticPropsType } from "next";
import { Layout } from "../components/common";
import { ProductCard } from "../components/common/product";
import { Grid } from "../components/ui";
import getAllProducts from "../framework/shopify/product/get-all-products";

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: { products },
    revalidate: 1,
  };
}

Home.Layout = Layout;
