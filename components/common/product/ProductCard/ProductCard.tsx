import { Product } from "../../../../framework/common/types/product";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const placeHolderImage = "/product-image-placeholder.svg";
const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="cursor-pointer">
        <h3>
          <span>{product.name}</span>
        </h3>
        <span>14 $</span>
        {product.images && (
          <Image
            alt={product.name ?? "Product Image"}
            src={product.images[0].url ?? placeHolderImage}
            height={540}
            width={540}
            quality="85"
            layout="responsive"
          />
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
