import React, { useEffect } from "react";
import Link from "next/link";
import { urlFor } from "./lib/client";
import  Image  from 'next/image';
import { useStateContext } from "../Context/StateContext";

const Product = ({ product: { image, name, slug, price } }) => {

  const { setQty, qty } =
  useStateContext();

  useEffect(() => {
    
    setQty(1)
    return () => {
      qty
    }
  }, [])
  

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
