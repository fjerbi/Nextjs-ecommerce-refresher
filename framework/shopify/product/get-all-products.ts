import fetchApi from "../utils/fetch-api";
import getAllProductsQuery from "../utils/queries/get-all-products";
import { ProductConnection } from "../schema";
import { normalizeProuct } from "../utils/normalize";
import { Product } from "../../common/types/product";

type ReturnType = {
  products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

  const products =
    data.products.edges.map(({ node: product }) => normalizeProuct(product)) ??
    [];
  return products;
};

export default getAllProducts;
